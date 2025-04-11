import google.generativeai as genai
import os
from dotenv import load_dotenv


load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is missing. Please check your .env file.")


genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def analyze_stock(symbol, price_list):

    recent_prices = price_list[-10:]  
    prices_str = ", ".join(map(str, recent_prices))

    prompt = f"""
Analyze the trend of the stock prices for the company '{symbol}' based on the following price history:
{prices_str}

Please provide:
 A natural language summary of the trend.



Keep it short, useful, and actionable.
"""

    try:
        response = model.generate_content(prompt)

        if hasattr(response, "text") and response.text:
            result = response.text.strip()
            print(f"\n [{symbol}] Analysis:\n{result}\n")
            return result
        else:
            print(f"[{symbol}] Empty response from Gemini.")
            return "[Gemini API returned empty response]"
    except Exception as e:
        print(f"[{symbol}] Gemini API error: {str(e)}")
        return f"[Gemini API error] {str(e)}"







# 2. Whether this stock looks like a good buy/sell opportunity.
# 3. Any potential trade recommendations.