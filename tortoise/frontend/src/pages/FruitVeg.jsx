import React, { useState } from 'react';
import { fruitvegetables } from '../assets/food/food';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CancelIcon from '@mui/icons-material/Cancel';

const FruitVeg = () => {
  const [sFilter,setSFilter] = useState (null);
  const filtered = sFilter 
  ? fruitvegetables.filter((item) => item.frequency === sFilter)
  :fruitvegetables;
  
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
        <div className="flex flex-col md:flex-row justify-center gap-6 md:mb-6 mb-2">
          {["Safe to feed", "Occasionally", "Do not feed"].map((label) => (
            <button
              key={label}
              onClick={() => setSFilter(label === sFilter ? null : label)}
              className={`md:min-w-[140px] text-primary font-normal text-lg rounded-full border border-primary px-6 py-2 transition duration-300 md:hover:bg-primary md:hover:text-white
              ${sFilter === label ? 'bg-primary text-white' : 'opacity-90'}`}>
                {label}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-14 p-6 flex flex-col gap-7">
            {filtered.map((item) => (
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
