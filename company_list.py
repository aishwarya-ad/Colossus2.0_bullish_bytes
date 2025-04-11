import yfinance as yf

def get_all_companies():
    """
    Fetches the current market price and short name for a list of Indian NSE stocks.
    Returns:
        List of dictionaries containing stock symbol, name, and current price.
    """
    stock_symbols = [
        "RELIANCE.NS",
        "TCS.NS",
        "INFY.NS",
        "HDFCBANK.NS",
        "ICICIBANK.NS"
    ]

    company_list = []

    print("📊 Fetching company details...\n")

    for symbol in stock_symbols:
        try:
            stock = yf.Ticker(symbol)
            info = stock.info
            price = info.get("regularMarketPrice")
            name = info.get("shortName")

            if price is not None and name:
                company_list.append({
                    "symbol": symbol,
                    "name": name,
                    "price": price
                })
                print(f"{name} ({symbol}): ₹{price}")
            else:
                print(f"{symbol}: Incomplete data.")

        except Exception as e:
            print(f"{symbol}: Could not fetch data — {e}")

    return company_list


# Uncomment below for testing independently
# if __name__ == "__main__":
#     from pprint import pprint
#     pprint(get_all_companies())
