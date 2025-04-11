import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StockList = () => {
  const navigate = useNavigate();
  const dummyStocks = [
    {
      name: 'Reliance Industries',
      symbol: 'RELIANCE',
      price: 2870.50,
      change: -0.45,
      volume: 540000,
    },
    {
      name: 'Tata Motors',
      symbol: 'TATAMOTORS',
      price: 840.75,
      change: 1.12,
      volume: 780000,
    },
    {
      name: 'Infosys',
      symbol: 'INFY',
      price: 1550.10,
      change: 0.35,
      volume: 650000,
    },
    {
      name: 'HDFC Bank',
      symbol: 'HDFCBANK',
      price: 1630.25,
      change: -0.75,
      volume: 900000,
    },
    {
      name: 'Bharti Airtel',
      symbol: 'BHARTIARTL',
      price: 875.00,
      change: 0.92,
      volume: 320000,
    },
    {
      name: 'Wipro',
      symbol: 'WIPRO',
      price: 455.65,
      change: -0.28,
      volume: 410000,
    },
  ];

  const [selectedStocks, setSelectedStocks] = useState([]);

  const handleToggle = (stock) => {
    const exists = selectedStocks.find(s => s.symbol === stock.symbol);
    if (exists) {
      setSelectedStocks(selectedStocks.filter(s => s.symbol !== stock.symbol));
    } else {
      setSelectedStocks([...selectedStocks, stock]);
    }
  };

  const handleDone = () => {
    navigate('/preferences', { state: { selectedStocks } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">📊 Live Stock Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyStocks.map((stock, idx) => {
          const isAdded = selectedStocks.find(s => s.symbol === stock.symbol);
          return (
            <div
              key={idx}
              className={`bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 ${isAdded ? 'border-green-600' : 'border-blue-600'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {stock.name}
                </h3>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                  {stock.symbol}
                </span>
              </div>
              <p className="text-lg text-gray-700 mb-1">💰 Price: ₹{stock.price.toFixed(2)}</p>
              <p
                className={`text-sm font-medium mb-1 ${
                  stock.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                📉 Change: {stock.change > 0 ? "+" : ""}{stock.change}%
              </p>
              <p className="text-sm text-gray-600 mb-3">📈 Volume: {stock.volume.toLocaleString()}</p>
              <button
                onClick={() => handleToggle(stock)}
                className={`mt-2 ${isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-xl transition`}
              >
                {isAdded ? 'Added' : 'Add'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleDone}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition text-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default StockList;
