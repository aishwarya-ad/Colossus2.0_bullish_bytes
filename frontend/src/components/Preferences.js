// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Preferences = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedStocks = location.state?.selectedStocks || [];

//   const [preference, setPreference] = useState('voice');

//   const handleSubmit = () => {
//     console.log('User preference:', preference);
//     console.log('Selected stocks:', selectedStocks);
//     // Here you can handle API integration or store preferences
//     navigate('/selected', { state: { selectedStocks, preference } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10 text-center">
//       <h2 className="text-4xl font-bold text-blue-700 mb-8">🔔 Notification Preferences</h2>

//       <p className="text-lg text-gray-700 mb-6">How would you like to receive real-time trading alerts?</p>

//       <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
//         <button
//           onClick={() => setPreference('voice')}
//           className={`px-6 py-3 rounded-xl text-white transition font-semibold ${
//             preference === 'voice' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
//           }`}
//         >
//           🔊 Voice Notifications
//         </button>

//         <button
//           onClick={() => setPreference('push')}
//           className={`px-6 py-3 rounded-xl text-white transition font-semibold ${
//             preference === 'push' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
//           }`}
//         >
//           📲 Push Notifications
//         </button>
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg"
//       >
//         Confirm & Continue
//       </button>
//     </div>
//   );
// };

// export default Preferences;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Preferences = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedStocks = location.state?.selectedStocks || [];

  const [preference, setPreference] = useState('voice');

  const handleSubmit = () => {
    console.log('User preference:', preference);
    console.log('Selected stocks:', selectedStocks);
    navigate('/selected', { state: { selectedStocks, preference } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">🔔 Notification Preferences</h2>

      <p className="text-lg text-gray-700 mb-6">How would you like to receive real-time trading alerts?</p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
        <button
          onClick={() => setPreference('voice')}
          className={`px-6 py-3 rounded-xl text-white transition font-semibold ${
            preference === 'voice' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
          }`}
        >
          🔊 Voice Notifications
        </button>

        <button
          onClick={() => setPreference('push')}
          className={`px-6 py-3 rounded-xl text-white transition font-semibold ${
            preference === 'push' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
          }`}
        >
          📲 Push Notifications
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg"
      >
        Confirm & Continue
      </button>
    </div>
  );
};

export default Preferences;
