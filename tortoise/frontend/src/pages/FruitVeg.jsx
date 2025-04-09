import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { fruitvegetables } from '../assets/food/food';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const FruitVeg = () => {

  const getIcon = (status) => {
    switch (status) {
      case 'Safe to feed':
        return <CheckCircleIcon className="text-green-500" />;
      case 'Occasionally':
        return <WarningIcon className="text-orange-500" />;
      case 'Do not feed':
        return <CancelIcon className="text-red-600" />;
    }
  };
  return (
    <div>
      <h1 className='text-center font-courgette font-semibold text-[28px] text-primary mb-5 tracking-wide'>Fruits & Vegetables</h1>
        <div className="flex justify-center gap-6 mb-6">
          <button className="min-w-[140px] text-primary font-normal opacity-90 text-lg rounded-full border border-primary px-6 py-2 transition duration-300 hover:bg-primary hover:text-white">
          Safe to feed 
          </button>
          <button className="min-w-[140px] text-primary font-normal opacity-90 text-lg rounded-full border border-primary px-6 py-2 transition duration-300 hover:bg-primary hover:text-white">
          Occasionally
          </button>
          <button className="min-w-[140px] text-primary font-normal opacity-90 text-lg rounded-full border border-primary px-6 py-2 transition duration-300 hover:bg-primary hover:text-white">
          Do Not Feed
          </button>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-6">
            {fruitvegetables.map((item) => (
              <div className="relative w-[280px] h-[200px] overflow-hidden rounded-xl shadow-md group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                <div className="flex items-center gap-2 text-base">
                  {getIcon(item.frequency)}
                  <span>{item.frequency}</span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    
        );
      
};

export default FruitVeg;
