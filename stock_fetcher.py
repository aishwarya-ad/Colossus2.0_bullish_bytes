import yfinance as yf
from collections import deque

class StockFetcher:
    def __init__(self, queue_size=10):
        self.queue_size = queue_size
        self.price_queues = {}

    def add_company(self, symbol):
        if symbol not in self.price_queues:
            print(f"Added company for tracking: {symbol}")
            try:
                # Fetch last 30 days of daily closing prices
                hist = yf.Ticker(symbol).history(period="30d")

                prices = hist["Close"].dropna().tolist()
            except Exception as e:
                print(f"Error fetching historical prices for {symbol}: {e}")
                prices = []

           
            # print(f"{symbol} historical prices: {prices[-self.queue_size:]}")

            # Store only the last `queue_size` prices in the queue
            self.price_queues[symbol] = deque(prices[-self.queue_size:], maxlen=self.queue_size)

    def remove_company(self, symbol):
        if symbol in self.price_queues:
            print(f"Removed company from tracking: {symbol}")
            del self.price_queues[symbol]

    def fetch_and_update(self):
        updated_data = {}

        for symbol, queue in self.price_queues.items():
            try:
                stock = yf.Ticker(symbol)
                price = stock.info.get("regularMarketPrice")

                if price is None:
                    raise ValueError("No market price found")

                # Add the new price to the queue
                queue.append(price)
                print(f"[{symbol}] Fetched price: {price}")

                # Calculate percent change from oldest to latest price
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

        
        for symbol, data in updated_data.items():
            if "prices" in data:
                print(f"Final price queue for {symbol}: {data['prices']}")

        return updated_data
