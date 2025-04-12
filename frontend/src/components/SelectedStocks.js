
// // // // import React, { useEffect, useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import { io } from 'socket.io-client';
// // // // import {
// // // //   LineChart,
// // // //   Line,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   CartesianGrid,
// // // //   ResponsiveContainer
// // // // } from 'recharts';

// // // // const socket = io('http://localhost:5000'); // Update if different backend URL

// // // // const generateMockData = () => {
// // // //   const data = [];
// // // //   for (let i = 6; i >= 0; i--) {
// // // //     data.push({
// // // //       day: `${7 - i}d ago`,
// // // //       price: (Math.random() * 100 + 100).toFixed(2)
// // // //     });
// // // //   }
// // // //   return data;
// // // // };

// // // // const speak = (message) => {
// // // //   const utterance = new SpeechSynthesisUtterance(message);
// // // //   utterance.lang = 'en-IN';
// // // //   window.speechSynthesis.speak(utterance);
// // // // };

// // // // const SelectedStocks = () => {
// // // //   const location = useLocation();
// // // //   const preference = location.state?.preference || 'voice';
// // // //   const initialSelected = location.state?.selectedStocks || [];

// // // //   const [stockData, setStockData] = useState(initialSelected);

// // // //   useEffect(() => {
// // // //     // Greet selected stocks
// // // //     if (preference === 'voice' && stockData.length > 0) {
// // // //       const names = stockData.map((s) => s.name).join(', ');
// // // //       speak(`You have selected the following stocks: ${names}`);
// // // //     }

// // // //     // Socket listener
// // // //     socket.on('stock_update', (update) => {
// // // //       console.log('Received update:', update);
// // // //       setStockData(prev =>
// // // //         prev.map(stock =>
// // // //           stock.symbol === update.symbol
// // // //             ? {
// // // //                 ...stock,
// // // //                 price: update.price,
// // // //                 change: update.change_pct,
// // // //                 volume: stock.volume + Math.floor(Math.random() * 1000),
// // // //               }
// // // //             : stock
// // // //         )
// // // //       );

// // // //       if (preference === 'voice') {
// // // //         speak(`${update.symbol} is now at ₹${update.price}, change ${update.change_pct.toFixed(2)}%`);
// // // //       }
// // // //     });

// // // //     return () => {
// // // //       socket.off('stock_update');
// // // //     };
// // // //   }, [preference]);

// // // //   return (
// // // //     <div className="p-8 bg-blue-50 min-h-screen">
// // // //       <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
// // // //         📊 Selected Stocks Overview
// // // //       </h1>
// // // //       {stockData.length === 0 ? (
// // // //         <p className="text-center text-gray-600">No stocks selected.</p>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
// // // //           {stockData.map((stock, index) => (
// // // //             <div key={index} className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
// // // //               <div className="mb-4">
// // // //                 <h2 className="text-2xl font-semibold text-blue-600">{stock.name} ({stock.symbol})</h2>
// // // //                 <div className="mt-2 space-y-1">
// // // //                   <p className="text-gray-700">Price: <span className="font-medium text-gray-900">₹{stock.price.toFixed(2)}</span></p>
// // // //                   <p className="text-gray-700">Change: <span className="font-medium text-gray-900">{stock.change.toFixed(2)}%</span></p>
// // // //                   <p className="text-gray-700">Volume: <span className="font-medium text-gray-900">{stock.volume.toLocaleString()}</span></p>
// // // //                 </div>
// // // //               </div>
// // // //               <ResponsiveContainer width="100%" height={250}>
// // // //                 <LineChart data={generateMockData()} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
// // // //                   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// // // //                   <XAxis dataKey="day" />
// // // //                   <YAxis />
// // // //                   <Tooltip />
// // // //                   <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} />
// // // //                 </LineChart>
// // // //               </ResponsiveContainer>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SelectedStocks;


// // // // import React, { useEffect, useState } from 'react';
// // // // import { useLocation } from 'react-router-dom';
// // // // import { io } from 'socket.io-client';
// // // // import {
// // // //   LineChart,
// // // //   Line,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   CartesianGrid,
// // // //   ResponsiveContainer
// // // // } from 'recharts';

// // // // const socket = io('http://localhost:5000'); // Update if backend URL is different

// // // // const generateMockData = () => {
// // // //   const data = [];
// // // //   for (let i = 6; i >= 0; i--) {
// // // //     data.push({
// // // //       day: `${7 - i}d ago`,
// // // //       price: parseFloat((Math.random() * 100 + 100).toFixed(2))
// // // //     });
// // // //   }
// // // //   return data;
// // // // };

// // // // const speak = (message) => {
// // // //   const utterance = new SpeechSynthesisUtterance(message);
// // // //   utterance.lang = 'en-IN';
// // // //   window.speechSynthesis.speak(utterance);
// // // // };

// // // // const SelectedStocks = () => {
// // // //   const location = useLocation();
// // // //   const preference = location.state?.preference || 'voice';
// // // //   const initialSelected = location.state?.selectedStocks || [];

// // // //   const [stockData, setStockData] = useState(initialSelected);
// // // //   const [chartData, setChartData] = useState({}); // Hold chart data per stock

// // // //   // Generate chart data only once on initial load
// // // //   useEffect(() => {
// // // //     const generated = {};
// // // //     initialSelected.forEach(stock => {
// // // //       generated[stock.symbol] = generateMockData();
// // // //     });
// // // //     setChartData(generated);
// // // //   }, [initialSelected]);

// // // //   // Greet and handle live updates
// // // //   useEffect(() => {
// // // //     if (preference === 'voice' && stockData.length > 0) {
// // // //       const names = stockData.map((s) => s.name).join(', ');
// // // //       speak(`You have selected the following stocks: ${names}`);
// // // //     }

// // // //     socket.on('stock_update', (update) => {
// // // //       if (!update || typeof update !== 'object') return;

// // // //       setStockData(prev =>
// // // //         prev.map(stock =>
// // // //           update[stock.symbol]
// // // //             ? {
// // // //                 ...stock,
// // // //                 price: update[stock.symbol].latest_price,
// // // //                 change: update[stock.symbol].change_pct,
// // // //                 volume: stock.volume + Math.floor(Math.random() * 1000)
// // // //               }
// // // //             : stock
// // // //         )
// // // //       );

// // // //       if (preference === 'voice') {
// // // //         Object.keys(update).forEach(symbol => {
// // // //           const info = update[symbol];
// // // //           if (info?.alert && typeof info.latest_price === 'number') {
// // // //             speak(`${symbol} is now at ₹${info.latest_price}, change ${info.change_pct.toFixed(2)}%`);
// // // //           }
// // // //         });
// // // //       }
// // // //     });

// // // //     return () => {
// // // //       socket.off('stock_update');
// // // //     };
// // // //   }, [preference]);

// // // //   return (
// // // //     <div className="p-8 bg-blue-50 min-h-screen">
// // // //       <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
// // // //         📊 Selected Stocks Overview
// // // //       </h1>
// // // //       {stockData.length === 0 ? (
// // // //         <p className="text-center text-gray-600">No stocks selected.</p>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
// // // //           {stockData.map((stock, index) => (
// // // //             <div key={index} className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
// // // //               <div className="mb-4">
// // // //                 <h2 className="text-2xl font-semibold text-blue-600">
// // // //                   {stock.name} ({stock.symbol})
// // // //                 </h2>
// // // //                 <div className="mt-2 space-y-1">
// // // //                   <p className="text-gray-700">
// // // //                     Price: <span className="font-medium text-gray-900">
// // // //                       ₹{typeof stock.price === 'number' ? stock.price.toFixed(2) : '—'}
// // // //                     </span>
// // // //                   </p>
// // // //                   <p className="text-gray-700">
// // // //                     Change: <span className="font-medium text-gray-900">
// // // //                       {typeof stock.change === 'number' ? `${stock.change.toFixed(2)}%` : '—'}
// // // //                     </span>
// // // //                   </p>
// // // //                   <p className="text-gray-700">
// // // //                     Volume: <span className="font-medium text-gray-900">
// // // //                       {stock.volume?.toLocaleString() || '—'}
// // // //                     </span>
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               <ResponsiveContainer width="100%" height={250}>
// // // //                 <LineChart data={chartData[stock.symbol] || []} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
// // // //                   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// // // //                   <XAxis dataKey="day" />
// // // //                   <YAxis />
// // // //                   <Tooltip />
// // // //                   <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} />
// // // //                 </LineChart>
// // // //               </ResponsiveContainer>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SelectedStocks;


// // // import React, { useEffect, useState } from 'react';
// // // import { useLocation } from 'react-router-dom';
// // // import { io } from 'socket.io-client';
// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   CartesianGrid,
// // //   ResponsiveContainer
// // // } from 'recharts';

// // // const socket = io('http://localhost:5000');

// // // const speak = (message) => {
// // //   const utterance = new SpeechSynthesisUtterance(message);
// // //   utterance.lang = 'en-IN';
// // //   window.speechSynthesis.speak(utterance);
// // // };

// // // const SelectedStocks = () => {
// // //   const location = useLocation();
// // //   const preference = location.state?.preference || 'voice';
// // //   const initialSelected = location.state?.selectedStocks || [];

// // //   const [stockData, setStockData] = useState(
// // //     initialSelected.map((stock) => ({
// // //       ...stock,
// // //       prices: [],
// // //       summary: '',
// // //     }))
// // //   );

// // //   useEffect(() => {
// // //     if (preference === 'voice' && stockData.length > 0) {
// // //       const names = stockData.map((s) => s.name).join(', ');
// // //       speak(`You have selected the following stocks: ${names}`);
// // //     }

// // //     socket.on('stock_update', (update) => {
// // //       console.log('Received update:', update);

// // //       setStockData((prev) =>
// // //         prev.map((stock) => {
// // //           const data = update[stock.symbol];
// // //           if (data) {
// // //             if (preference === 'voice') {
// // //               speak(`${stock.symbol} is now at ₹${data.latest_price}, change ${data.change_pct.toFixed(2)}%`);
// // //               if (data.gemini_summary) speak(data.gemini_summary);
// // //             }

// // //             return {
// // //               ...stock,
// // //               price: data.latest_price ?? stock.price,
// // //               change: typeof data.change_pct === 'number' ? data.change_pct : 0,
// // //               volume: stock.volume + Math.floor(Math.random() * 1000),
// // //               prices: data.prices ?? stock.prices,
// // //               summary: data.gemini_summary ?? stock.summary,
// // //             };
// // //           }
// // //           return stock;
// // //         })
// // //       );
// // //     });

// // //     return () => {
// // //       socket.off('stock_update');
// // //     };
// // //   }, [preference]);

// // //   return (
// // //     <div className="p-8 bg-blue-50 min-h-screen">
// // //       <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
// // //         📊 Selected Stocks Overview
// // //       </h1>
// // //       {stockData.length === 0 ? (
// // //         <p className="text-center text-gray-600">No stocks selected.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
// // //           {stockData.map((stock, index) => (
// // //             <div key={index} className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600">
// // //               <div className="mb-4">
// // //                 <h2 className="text-2xl font-semibold text-blue-600">
// // //                   {stock.name} ({stock.symbol})
// // //                 </h2>
// // //                 <div className="mt-2 space-y-1">
// // //                   <p className="text-gray-700">
// // //                     Price: <span className="font-medium text-gray-900">₹{Number(stock.price).toFixed(2)}</span>
// // //                   </p>
// // //                   <p className="text-gray-700">
// // //                     Change: <span className="font-medium text-gray-900">{Number(stock.change).toFixed(2)}%</span>
// // //                   </p>
// // //                   <p className="text-gray-700">
// // //                     Volume: <span className="font-medium text-gray-900">{stock.volume.toLocaleString()}</span>
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Graph */}
// // //               {stock.prices.length > 0 && (
// // //                 <ResponsiveContainer width="100%" height={250}>
// // //                   <LineChart
// // //                     data={stock.prices.map((p, i) => ({ day: `${i + 1}`, price: p }))}
// // //                     margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
// // //                   >
// // //                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// // //                     <XAxis dataKey="day" />
// // //                     <YAxis />
// // //                     <Tooltip />
// // //                     <Line type="monotone" dataKey="price" stroke="#2563EB" strokeWidth={2} dot={false} />
// // //                   </LineChart>
// // //                 </ResponsiveContainer>
// // //               )}

// // //               {/* Gemini Summary */}
// // //               {stock.summary && (
// // //                 <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-200 text-gray-800 text-sm">
// // //                   <h4 className="font-semibold text-blue-700 mb-1">📢 Gemini Insight:</h4>
// // //                   <p>{stock.summary}</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SelectedStocks;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer
// } from 'recharts';

// const socket = io('http://localhost:5000');

// const speak = (message) => {
//   const utterance = new SpeechSynthesisUtterance(message);
//   utterance.lang = 'en-IN';
//   window.speechSynthesis.speak(utterance);
// };

// const SelectedStocks = () => {
//   const location = useLocation();
//   const preference = location.state?.preference || 'voice';
//   const initialSelected = location.state?.selectedStocks || [];

//   // Initialize stockData with each stock's data
//   const [stockData, setStockData] = useState(
//     initialSelected.map(stock => ({
//       ...stock,
//       prices: stock.prices || [],
//       change: Number(stock.change || 0),
//       analysis: "",
//     }))
//   );

//   // This state holds a summary of all analyses to display at the bottom
//   const [analysisSummary, setAnalysisSummary] = useState([]);

//   useEffect(() => {
//     // (Optional) Speak out a greeting for the initially selected stocks
//     if (preference === 'voice' && stockData.length > 0) {
//       const names = stockData.map(s => s.name).join(', ');
//       speak(`You have selected the following stocks: ${names}`);
//     }

//     const handleUpdate = (update) => {
//       console.log('Received update:', update);
//       // Log details for clarity
//       console.log(`Stock Symbol: ${update.symbol}`);
//       console.log(`Stock Price: ₹${update.price}`);
//       console.log(`Change Percentage: ${update.change_pct}%`);
//       console.log(`Raw Gemini Analysis: ${update.analysis}`);

//       // Parse update.analysis if it is a string (Option 2)
//       let parsedAnalysis;
//       if (typeof update.analysis === 'string') {
//         try {
//           // Try parsing as JSON; if it is valid JSON, parsedAnalysis will be an object.
//           parsedAnalysis = JSON.parse(update.analysis);
//         } catch (e) {
//           // If parsing fails, simply wrap it in an object under the key "text"
//           parsedAnalysis = { text: update.analysis };
//         }
//       } else {
//         parsedAnalysis = update.analysis;
//       }

//       // Update the stock data; assign the analysis text from parsedAnalysis.text
//       setStockData(prev =>
//         prev.map(stock =>
//           stock.symbol === update.symbol
//             ? {
//                 ...stock,
//                 price: update.price,
//                 change: Number(update.change_pct || 0),
//                 volume: stock.volume + Math.floor(Math.random() * 1000),
//                 prices: update.prices || stock.prices || [],
//                 analysis: parsedAnalysis.text || "",
//               }
//             : stock
//         )
//       );

//       // Update the aggregated analysis summary (ensuring one per symbol)
//       if (parsedAnalysis.text) {
//         setAnalysisSummary(prev => [
//           ...prev.filter(a => !a.includes(update.symbol)),
//           `[${update.symbol}] Analysis:\n${parsedAnalysis.text}`,
//         ]);
//       }

//       // Speak the Gemini analysis if voice is enabled
//       if (preference === 'voice' && parsedAnalysis.text) {
//         speak(parsedAnalysis.text);
//       }
//     };

//     // Register the socket listener
//     socket.on('stock_update', handleUpdate);

//     return () => {
//       socket.off('stock_update', handleUpdate);
//     };
//   }, [preference]);

//   return (
//     <div className="p-8 bg-blue-50 min-h-screen">
//       <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
//         📊 Selected Stocks Overview
//       </h1>

//       {stockData.length === 0 ? (
//         <p className="text-center text-gray-600">No stocks selected.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//           {stockData.map((stock, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600"
//             >
//               <div className="mb-4">
//                 <h2 className="text-2xl font-semibold text-blue-600">
//                   {stock.name} ({stock.symbol})
//                 </h2>
//                 <div className="mt-2 space-y-1">
//                   <p className="text-gray-700">
//                     Price:{' '}
//                     <span className="font-medium text-gray-900">
//                       ₹{Number(stock.price).toFixed(2)}
//                     </span>
//                   </p>
//                   <p className="text-gray-700">
//                     Change:{' '}
//                     <span
//                       className={`font-medium ${
//                         stock.change >= 0 ? 'text-green-600' : 'text-red-600'
//                       }`}
//                     >
//                       {Number(stock.change).toFixed(2)}%
//                     </span>
//                   </p>
//                   <p className="text-gray-700">
//                     Volume:{' '}
//                     <span className="font-medium text-gray-900">
//                       {stock.volume?.toLocaleString()}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {stock.prices?.length > 0 && (
//                 <ResponsiveContainer width="100%" height={250}>
//                   <LineChart
//                     data={stock.prices.map((p, i) => ({
//                       day: `${stock.prices.length - i}d ago`,
//                       price: p,
//                     }))}
//                     margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
//                   >
//                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                     <XAxis dataKey="day" />
//                     <YAxis domain={['dataMin', 'dataMax']} />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke="#2563EB"
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               )}

//               {stock.analysis && (
//                 <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-4 py-3 rounded-xl text-sm shadow-inner whitespace-pre-wrap">
//                   <strong>Gemini Insight:</strong> {stock.analysis}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {analysisSummary.length > 0 && (
//         <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
//           <h3 className="text-xl font-bold text-blue-600 mb-4">📌 Gemini Summary</h3>
//           <pre className="whitespace-pre-wrap text-gray-800 text-sm">
//             {analysisSummary.join('\n\n')}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectedStocks;






// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { io } from 'socket.io-client';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer
// } from 'recharts';

// const socket = io('http://localhost:5000');

// const speak = (message) => {
//   const utterance = new SpeechSynthesisUtterance(message);
//   utterance.lang = 'en-IN';
//   window.speechSynthesis.speak(utterance);
// };

// const SelectedStocks = () => {
//   const location = useLocation();
//   const preference = location.state?.preference || 'voice';  // Default to 'voice' if not defined
//   const initialSelected = location.state?.selectedStocks || [];

//   // Initialize stockData with each stock's data
//   const [stockData, setStockData] = useState(
//     initialSelected.map(stock => ({
//       ...stock,
//       prices: stock.prices || [],
//       change: Number(stock.change || 0),
//       analysis: "",
//     }))
//   );

//   // This state holds a summary of all analyses to display at the bottom
//   const [analysisSummary, setAnalysisSummary] = useState([]);

//   useEffect(() => {
//     // (Optional) Speak out a greeting for the initially selected stocks
//     if (preference === 'voice' && stockData.length > 0) {
//       const names = stockData.map(s => s.name).join(', ');
//       speak(`You have selected the following stocks: ${names}`);
//     }

//     const handleUpdate = (update) => {
//       console.log('Received update:', update);

//       // Directly use the analysis string from the backend
//       const { analysis } = update;

//       // Update the stock data with the analysis text directly
//       setStockData(prev =>
//         prev.map(stock =>
//           stock.symbol === update.symbol
//             ? {
//                 ...stock,
//                 price: update.latest_price,
//                 change: Number(update.change_pct || 0),
//                 volume: stock.volume + Math.floor(Math.random() * 1000),
//                 prices: update.prices || stock.prices || [],
//                 analysis: update.nlp.analysis || "",  // Use the string directly
//               }
//             : stock
//         )
//       );

//       // Update the aggregated analysis summary (ensuring one per symbol)
//       if (update.nlp.analysis) {
//         setAnalysisSummary(prev => [
//           ...prev.filter(a => !a.includes(update.symbol)),
//           `[${update.symbol}] Analysis:\n${analysis}`,
//         ]);
//       }

//       // Speak the Gemini analysis if voice is enabled
//       if (preference === 'voice' && analysis) {
//         speak(update.nlp.analysis);
//       }
//     };

//     // Register the socket listener
//     socket.on('stock_update', handleUpdate);

//     return () => {
//       socket.off('stock_update', handleUpdate);
//     };
//   }, [preference]);

//   return (
//     <div className="p-8 bg-blue-50 min-h-screen">
//       <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
//         📊 Selected Stocks Overview
//       </h1>

//       {stockData.length === 0 ? (
//         <p className="text-center text-gray-600">No stocks selected.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//           {stockData.map((stock, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600"
//             >
//               <div className="mb-4">
//                 <h2 className="text-2xl font-semibold text-blue-600">
//                   {stock.name} ({stock.symbol})
//                 </h2>
//                 <div className="mt-2 space-y-1">
//                   <p className="text-gray-700">
//                     Price:{' '}
//                     <span className="font-medium text-gray-900">
//                       ₹{Number(stock.price).toFixed(2)}
//                     </span>
//                   </p>
//                   <p className="text-gray-700">
//                     Change:{' '}
//                     <span
//                       className={`font-medium ${
//                         stock.change >= 0 ? 'text-green-600' : 'text-red-600'
//                       }`}
//                     >
//                       {Number(stock.change).toFixed(2)}%
//                     </span>
//                   </p>
//                   <p className="text-gray-700">
//                     Volume:{' '}
//                     <span className="font-medium text-gray-900">
//                       {stock.volume?.toLocaleString()}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {stock.prices?.length > 0 && (
//                 <ResponsiveContainer width="100%" height={250}>
//                   <LineChart
//                     data={stock.prices.map((p, i) => ({
//                       day: `${stock.prices.length - i}d ago`,
//                       price: p,
//                     }))}
//                     margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
//                   >
//                     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//                     <XAxis dataKey="day" />
//                     <YAxis domain={['dataMin', 'dataMax']} />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke="#2563EB"
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               )}
//               console.log('Stock analysis:', stock.analysis);
//               {stock.analysis && (
//                 <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-4 py-3 rounded-xl text-sm shadow-inner whitespace-pre-wrap">
//                   <strong>Gemini Insight:</strong> {stock.analysis}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       {analysisSummary.length > 0 && (
//         <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
//           <h3 className="text-xl font-bold text-blue-600 mb-4">📌 Gemini Summary</h3>
//           <pre className="whitespace-pre-wrap text-gray-800 text-sm">
//             {analysisSummary.join('\n\n')}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectedStocks;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const socket = io('http://localhost:5000');

const speak = (message) => {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'en-IN';
  window.speechSynthesis.speak(utterance);
};

const SelectedStocks = () => {
  const location = useLocation();
  const preference = location.state?.preference || 'voice';
  const initialSelected = location.state?.selectedStocks || [];

  const [stockData, setStockData] = useState(
    initialSelected.map(stock => ({
      ...stock,
      prices: stock.prices || [],
      change: Number(stock.change || 0),
      analysis: "",
    }))
  );

  const [analysisSummary, setAnalysisSummary] = useState([]);
  const [latestAnalysis, setLatestAnalysis] = useState(''); // ✅ new global variable

  useEffect(() => {
    if (preference === 'voice' && stockData.length > 0) {
      const names = stockData.map(s => s.name).join(', ');
      speak(`You have selected the following stocks: ${names}`);
    }

    const handleUpdate = (update) => {
      console.log('Received update:', update);

      const analysis = update?.nlp?.analysis || '';
      setLatestAnalysis(analysis);

      setStockData(prev =>
        prev.map(stock =>
          stock.symbol === update.symbol
            ? {
                ...stock,
                price: update.latest_price,
                change: Number(update.change_pct || 0),
                volume: stock.volume + Math.floor(Math.random() * 1000),
                prices: update.prices || stock.prices || [],
                analysis: analysis,
              }
            : stock
        )
      );

      if (analysis) {
        setAnalysisSummary(prev => [
          ...prev.filter(a => !a.includes(update.symbol)),
          `[${update.symbol}] Analysis:\n${analysis}`,
        ]);
      }

      if (preference === 'voice' && analysis) {
        speak(analysis);
      }
    };

    socket.on('stock_update', handleUpdate);

    return () => {
      socket.off('stock_update', handleUpdate);
    };
  }, [preference]);// change
  console.log('Analysis Summary:', analysisSummary);

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-blue-700 text-center">
        📊 Selected Stocks Overview
      </h1>

      {stockData.length === 0 ? (
        <p className="text-center text-gray-600">No stocks selected.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {stockData.map((stock, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow border-t-4 border-blue-600"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-blue-600">
                  {stock.name} ({stock.symbol})
                </h2>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-700">
                    Price:{' '}
                    <span className="font-medium text-gray-900">
                      ₹{Number(stock.price).toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Change:{' '}
                    <span
                      className={`font-medium ${
                        stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {Number(stock.change).toFixed(2)}%
                    </span>
                  </p>
                  <p className="text-gray-700">
                    Volume:{' '}
                    <span className="font-medium text-gray-900">
                      {stock.volume?.toLocaleString()}
                    </span>
                  </p>
                  
                </div>
              </div>

              {stock.prices?.length > 0 && (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart
                    data={stock.prices.map((p, i) => ({
                      day: `${stock.prices.length - i}d ago`,
                      price: p,
                    }))}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="day" />
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#2563EB"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
              

              {stock.analysis && (
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 px-4 py-3 rounded-xl text-sm shadow-inner whitespace-pre-wrap">
                  <strong>Gemini Insight:</strong> {stock.analysis}
                </div>
              )}
              <p> hey  </p>
            </div>
          ))}
        </div>
      )}

      {analysisSummary.length > 0 && (
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-600 mb-4">📌 Gemini Summary</h3>
          <pre className="whitespace-pre-wrap text-gray-800 text-sm">
            {analysisSummary.join('\n\n')}
          </pre>
        </div>
      )}
      {latestAnalysis && (
        <p className="mt-10 text-center text-lg text-gray-800 font-medium">
          🧠 Latest Gemini Insight: {latestAnalysis}
        </p>
      )}
    </div>
  
  );
};

export default SelectedStocks;
