import React from 'react';
import { assets, careInfo } from '../assets/assets';

const Care = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.slika})` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-5">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Tortoise Care</h2>
          <p className="text-primary font-courgette text-lg">
            indoor environment 
          </p>
        </div>

        <div className="space-y-8">
          {careInfo.map((item) => (
            <div
              key={item.label}
              className="bg-yellow-950 bg-opacity-80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <h3 className="text-2xl font-semibold text-white">{item.label}</h3>
              </div>
              <p className="text-white leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Care;
