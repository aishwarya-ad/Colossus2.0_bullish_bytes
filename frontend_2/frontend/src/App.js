import './App.css';
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot, FaBell, FaChartLine } from "react-icons/fa";

export default function App() {
  const navigate = useNavigate();

  const goToStockListPage = () => {
    navigate("/stocks");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TradePulse AI</h1>
        <button onClick={goToStockListPage} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-white">
        <h2 className="text-4xl font-bold mb-4">Never Miss a Trade Again</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          AI-powered real-time alerts for smarter, faster trading decisions.
        </p>
        <button onClick={goToStockListPage} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Join Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-100 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <FaChartLine className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Real-Time Market Monitoring</h4>
            <p>Continuously tracks live stock prices using APIs like yfinance and nsepython.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <FaRobot className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">AI-Powered Signal Analysis</h4>
            <p>Leverages GenAI and technical indicators to identify buy/sell signals.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <FaBell className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Instant Alerts</h4>
            <p>Sends trading alerts via voice and push notifications for fast action.</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Start Receiving Real-Time Trading Alerts Today</h3>
        <button onClick={goToStockListPage} className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center text-sm">
        © 2025 TradePulse AI. All rights reserved.
      </footer>
    </div>
  );
}
