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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="relative w-[60%] h-[60%] max-w-4xl max-h-4xl bg-gray-300 rounded-lg">
        <div
          className="absolute inset-0 m-10 rounded-lg"
          style={{ background: selectedGradient,borderRadius:"48%", backgroundSize: '10% 18%',paddingTop:"10px",paddingBottom:"4%",paddingLeft:"9%", marginLeft:"22%",marginRight:"22%"}}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={src}
              alt="Sample"
              className="w-30 h-25 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {gradients.map((gradient, index) => (
          <div
            key={index}
            onClick={() => handleGradientClick(gradient)}
            className={`w-16 h-16 rounded-lg cursor-pointer transition-transform transform ${gradient === selectedGradient ? 'scale-110' : 'scale-100'}`}
            style={{ background: gradient }}
          />
        ))}
      </div>
      <div className="bg-black text-white mt-4 flex space-x-4">
        <button
          onClick={handleReset}
          className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-transform"
        >
          Reset 
        </button>
        <button 
          onClick={handleRandomGradient}
          className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default ColorPicker;   
