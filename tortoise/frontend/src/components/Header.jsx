import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-primary p-6 sm:p-8 lg:p-12 rounded-xl shadow-lg mt-8 max-w-screen-xl mx-auto">
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7e4bb]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to the Fascinating World of Tortoises
        </motion.h2>
        <p className="text-base sm:text-lg text-[#f7e4bb] max-w-2xl mx-auto lg:mx-0">
          Tortoises have been living on Earth for millions of years, and they have adapted to a variety of environments. Known for their slow pace and hard shells, they are resilient creatures that teach us about patience and survival.
        </p>
        <a href="#introduction" className="inline-block">
        <motion.button
          className="bg-[#f7e4bb] text-primary font-medium py-2 px-6 rounded-full transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
        </a>
      </div>

      <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center">
        <motion.img
          src={assets.header}
          alt="Hermann Tortoise"
          className="w-64 sm:w-80 lg:max-w-[400px] h-auto rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default Introduction;