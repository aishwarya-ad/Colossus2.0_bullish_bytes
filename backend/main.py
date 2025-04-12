# import eventlet
# eventlet.monkey_patch()

# from flask import Flask, jsonify, request
# from flask_socketio import SocketIO, emit
# from flask_cors import CORS
# from stock_fetcher import StockFetcher
# import time
# from gemini_analyser import analyze_stock
# from company_list import get_all_companies

# app = Flask(__name__)
# CORS(app)
# socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

# fetcher = StockFetcher(queue_size=30)
# tracked_companies = set()

# @app.route("/companies", methods=["GET"])
# def get_companies():
#     companies = get_all_companies()
#     return jsonify(companies)

# @socketio.on("connect")
# def handle_connect():
#     print("Frontend connected")
#     emit("connected", {"message": "Connected to backend"})

# @socketio.on("track_companies")
# def handle_track(data):
#     global tracked_companies
#     symbols = data.get("symbols", [])
#     tracked_companies = set(symbols)
#     for symbol in symbols:
#         fetcher.add_company(symbol)

# @socketio.on("untrack")
# def handle_untrack(data):
#     symbol = data.get("symbol")
#     fetcher.remove_company(symbol)


# def background_fetch():
#     analysis_interval = 60         # Analyze once every 1 minute
#     fetch_interval = 0.66          # Fetch every 0.66s = 90/minute
#     last_analysis_time = 0
#     last_sent_nlp = {}
#     last_sent_time = {}

#     while True:
#         current_time = time.time()
#         stock_data = fetcher.fetch_and_update()

#         if current_time - last_analysis_time >= analysis_interval:
#             for symbol, info in stock_data.items():
#                 if "error" in info:
#                     continue

#                 prices = info["prices"]
#                 price_count = len(prices)

#                 if price_count >= 30:  # Even partial queues can be analyzed
#                     nlp_result = analyze_stock(symbol, prices)
#                     info["nlp"] = nlp_result

#                     prev_nlp = last_sent_nlp.get(symbol)
#                     last_time = last_sent_time.get(symbol, 0)

#                     if nlp_result != prev_nlp or (current_time - last_time) >= 120:
#                         info["alert"] = any(word in nlp_result.lower() for word in ["buy", "sell", "strong upward", "strong downward"])
#                         last_sent_nlp[symbol] = nlp_result
#                         last_sent_time[symbol] = current_time
#                     else:
#                         info["nlp"] = None
#                         info["alert"] = False
#                 else:
#                     info["nlp"] = f"Collecting data... ({price_count}/90)"
#                     info["alert"] = False

#             socketio.emit("stock_update", stock_data)
#             last_analysis_time = current_time

#         eventlet.sleep(fetch_interval)

# socketio.start_background_task(background_fetch)

# if __name__ == "__main__":
#     print("Starting Flask-SocketIO server...")
#     socketio.run(app, host="0.0.0.0", port=5000)
#     print("main.py reached __main__ section")


import eventlet
eventlet.monkey_patch()

from flask import Flask, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from stock_fetcher import StockFetcher
import time
from gemini_analyser import analyze_stock
from company_list import get_all_companies

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

fetcher = StockFetcher(queue_size=30)
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
    analysis_interval = 60         # Analyze once every 1 minute
    fetch_interval = 0.66          # Fetch every 0.66s = 90/minute
    last_analysis_time = 0
    last_sent_nlp = {}
    last_sent_time = {}

    while True:
        current_time = time.time()
        stock_data = fetcher.fetch_and_update()

        if current_time - last_analysis_time >= analysis_interval:
            for symbol, info in stock_data.items():
                if "error" in info:
                    continue

                prices = info["prices"]
                price_count = len(prices)

                if price_count >= 30:
                    nlp_result = analyze_stock(symbol, prices)
                    info["nlp"] = nlp_result  # Already a dict

                    analysis_text = nlp_result.get("analysis", "")
                    prev_nlp = last_sent_nlp.get(symbol)
                    last_time = last_sent_time.get(symbol, 0)

                    if analysis_text != prev_nlp or (current_time - last_time) >= 120:
                        info["alert"] = any(word in analysis_text.lower() for word in ["buy", "sell", "strong upward", "strong downward"])
                        last_sent_nlp[symbol] = analysis_text
                        last_sent_time[symbol] = current_time
                    else:
                        info["nlp"] = None
                        info["alert"] = False
                else:
                    info["nlp"] = f"Collecting data... ({price_count}/90)"
                    info["alert"] = False
            # print(stock_data)
            socketio.emit("stock_update", stock_data)

            last_analysis_time = current_time

        eventlet.sleep(fetch_interval)

socketio.start_background_task(background_fetch)


if __name__ == "__main__":
    print("Starting Flask-SocketIO server...")
    socketio.run(app, host="0.0.0.0", port=5000)
    print("main.py reached __main__ section")
