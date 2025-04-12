import yfinance as yf
from collections import deque

class StockFetcher:
    def __init__(self, queue_size=30):
        self.queue_size = queue_size
        self.price_queues = {}

    def add_company(self, symbol):
        if symbol not in self.price_queues:
            print(f"Added company for tracking: {symbol}")
            try:
                hist = yf.Ticker(symbol).history(period="30d")
                prices = hist["Close"].dropna().tolist()
            except Exception as e:
                print(f"Error fetching historical prices for {symbol}: {e}")
                prices = []

            self.price_queues[symbol] = deque(prices[-self.queue_size:], maxlen=self.queue_size)

    def remove_company(self, symbol):
        if symbol in self.price_queues:
            print(f"Removed company from tracking: {symbol}")
            del self.price_queues[symbol]

    def fetch_and_update(self):
        updated_data = {}
        symbols = list(self.price_queues.keys())

        # for symbol, queue in self.price_queues.items():
        for symbol in symbols:
            queue = self.price_queues[symbol]
            try:
                stock = yf.Ticker(symbol)
                price = stock.info.get("regularMarketPrice")

                if price is None:
                    raise ValueError("No market price found")

                if len(queue) == 0 or price != queue[-1]:
                    queue.append(price)
                    print(f"[{symbol}] Fetched price: {price}")

                prices = list(queue)
                change_pct = ((prices[-1] - prices[0]) / prices[0]) * 100 if len(prices) > 1 else 0

                updated_data[symbol] = {
                    "prices": prices,
                    "latest_price": price,
                    "change_pct": change_pct,
                }

            except Exception as e:
                print(f"[{symbol}] Error fetching price: {e}")
                updated_data[symbol] = {"error": str(e)}

        return updated_data
