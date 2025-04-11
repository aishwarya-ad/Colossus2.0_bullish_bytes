import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const generateMockData = () => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    data.push({
      day: `${7 - i}d ago`,
      price: (Math.random() * 100 + 100).toFixed(2)
    });
  }
  return data;
};

const speak = (message) => {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'en-IN';
  window.speechSynthesis.speak(utterance);
};

const SelectedStocks = () => {
  const location = useLocation();
  const selectedStocks = location.state?.selectedStocks || [];

  useEffect(() => {
    if (selectedStocks.length > 0) {
      const names = selectedStocks.map((s) => s.name).join(', ');
      speak(`You have selected the following stocks: ${names}`);
    }
  }, [selectedStocks]);

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
        📊 Selected Stocks Overview
      </h1>
      {selectedStocks.length === 0 ? (
        <p className="text-center text-gray-600">No stocks selected.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {selectedStocks.map((stock, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-blue-600">{stock.name} ({stock.symbol})</h2>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-700">Price: <span className="font-medium text-gray-900">₹{stock.price}</span></p>
                  <p className="text-gray-700">Change: <span className="font-medium text-gray-900">{stock.change}%</span></p>
                  <p className="text-gray-700">Volume: <span className="font-medium text-gray-900">{stock.volume}</span></p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={generateMockData()} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedStocks;
