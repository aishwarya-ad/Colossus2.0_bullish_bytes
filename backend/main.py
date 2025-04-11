import eventlet
eventlet.monkey_patch()

from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from stock_fetcher import StockFetcher
from gemini_analyser import analyze_stock
from company_list import get_all_companies

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

fetcher = StockFetcher(queue_size=3)
tracked_companies = set()

@app.route("/companies", methods=["GET"])
def get_companies():
    companies = get_all_companies()
    return jsonify(companies)

@socketio.on("connect")
def handle_connect():
    print("Frontend connected")
    emit("connected", {"message": "Connected to backend"})

@socketio.on("track_companies")
def handle_track(data):
    global tracked_companies
    symbols = data.get("symbols", [])
    tracked_companies = set(symbols)
    for symbol in symbols:
        fetcher.add_company(symbol)

@socketio.on("untrack")
def handle_untrack(data):
    symbol = data.get("symbol")
    fetcher.remove_company(symbol)

def background_fetch():
    while True:
        stock_data = fetcher.fetch_and_update()
        for symbol, info in stock_data.items():
            if "error" in info:
                continue
            prices = info["prices"]
            if len(prices) >= fetcher.queue_size:
                nlp_result = analyze_stock(symbol, prices)
                info["nlp"] = nlp_result

                if abs(info["change_pct"]) >= 5 or "increasing" in nlp_result.lower():
                    info["alert"] = True
                else:
                    info["alert"] = False

        socketio.emit("stock_update", stock_data)
        eventlet.sleep(30)

socketio.start_background_task(background_fetch)

if __name__ == "__main__":
    print("Starting Flask-SocketIO server...")
    socketio.run(app, host="0.0.0.0", port=5000)
    print("main.py reached __main__ section")
