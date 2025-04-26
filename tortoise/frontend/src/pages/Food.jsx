import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Food = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center my-10 space-y-9">
      <h1 className="text-4xl font-semibold text-primary text-center">What Do Tortoises Eat?</h1>
      <p className="text-lg  max-w-2xl md:text-center text-justify">
        Tortoises have a plant-based diet, but different species prefer different types of food.
        Some enjoy fruits and vegetables, while others prefer grass and flowers. Click to learn more!
      </p>
      <div className="md:grid md:grid-cols-2 md:gap-16 flex flex-col gap-9">
        <div className="relative w-60 h-60 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={assets.fruitveg}
            alt=""
            className="absolute w-full h-full object-cover opacity-50"
          />
          <button
            onClick={() => {navigate('/fruitveg');scrollTo(0,0)}}
            className="relative bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Fruits & Vegetables
          </button>
        </div>
        <div className="relative w-60 h-60 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={assets.grassflow}
            alt=""
            className="absolute w-full h-full object-cover opacity-50"
          />
          <button
            onClick={() => {navigate('/grassflower');scrollTo(0,0)}}
            className="relative bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Grass & Flowers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
