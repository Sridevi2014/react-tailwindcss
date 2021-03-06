import React from 'react';
function App() {
  return (
      
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img className="w-full" src={require('./profile.jpg')} alt="Display" /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Sridevi 
        </div>
        <p className="text-gray-700 text-base">
          Always learning, Always building <span></span>😜
        </p>
      </div> 
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Front-End Developer</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Tester</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Html, CSS</span>
      </div>
    </div>
  );
}
export default App;