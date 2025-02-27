import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-blue-50 rounded-xl px-6 md:px-12 lg:px-20 py-10 shadow-xl">
      <motion.div
        className="md:w-1/2 relative mr-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <img src={assets.header_img} alt="Doctor Appointment" className="w-full" />
      </motion.div>
      <motion.div
        className="md:w-1/2 flex flex-col gap-6 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-400">Discover Top Doctors In Your Area</h1>
        <p className="text-primary text-sm md:text-lg font-normal">Easily connect with experienced medical professionals and schedule appointments.</p>

        <a href="#speciality" className="inline-block bg-gradient-to-r from-primary to-blue-400 text-white rounded-full px-8 py-3 text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-md max-w-fit">
          Book Appointment
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
