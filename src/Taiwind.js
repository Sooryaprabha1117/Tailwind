import React, { useState } from 'react';
import src from "./Asset/woman.png";

// Define gradient color options
const gradients = [
  'linear-gradient(to right, #FF5733, #FFC300)',
  'linear-gradient(to right, #33FF57, #00FF9F)',
  'linear-gradient(to right, #3357FF, #9F00FF)',
  'linear-gradient(to right, #FF0, #F0F)',
  'linear-gradient(to right, #0FF, #FF007F)',
  'linear-gradient(to right, #FF9F00, #7FFF00)',
  'linear-gradient(to right, #FF007F, #FF9F00)',
  'linear-gradient(to right, #00FF7F, #33FF57)',
  'linear-gradient(to right, #FF5733, #33FF57)',
  'linear-gradient(to right, #3357FF, #FF0F0F)',
  'linear-gradient(to right, #FF0, #00FF9F)',
  'linear-gradient(to right, #FFB6C1, #FF69B4)',
  'linear-gradient(to right, #009E49, #2A7F62)',
  'linear-gradient(to right, #2BC0E4, #EAECC6)',
  'linear-gradient(to right, #FFB300, #FF8C00)',
  'linear-gradient(to right, #FF6F61, #DE8B7F)',
  'linear-gradient(to right, #FF9F00, #00FF7F)'
];

function ColorPicker() {
  const [selectedGradient, setSelectedGradient] = useState(gradients[0]);

  const handleGradientClick = (gradient) => {
    setSelectedGradient(gradient);
  };

  const handleReset = () => {
    setSelectedGradient(gradients[0]);
  };

  const handleRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    setSelectedGradient(gradients[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="relative w-full max-w-xl h-auto bg-gray-300 rounded-lg p-4 sm:w-[80%] sm:h-[50%] lg:w-[60%] lg:h-[60%]">
        <div
          className="absolute inset-0 m-6 rounded-lg"
          style={{ 
            background: selectedGradient,
            borderRadius: "48%", 
            padding: "5%", 
            marginLeft: "22%", 
            marginRight: "22%" 
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={src}
              alt="Sample"
              className="w-24 h-24 object-cover rounded-full sm:w-28 sm:h-28 lg:w-36 lg:h-36"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 sm:grid-cols-4 lg:grid-cols-5">
        {gradients.map((gradient, index) => (
          <div
            key={index}
            onClick={() => handleGradientClick(gradient)}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg cursor-pointer transition-transform transform ${gradient === selectedGradient ? 'scale-110' : 'scale-100'}`}
            style={{ background: gradient }}
          />
        ))}
      </div>
      <div className="bg-black text-white mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleReset}
          className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-transform"
        >
          Reset 
        </button>
        <button 
          onClick={handleRandomGradient}
          className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-gray-800"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;
