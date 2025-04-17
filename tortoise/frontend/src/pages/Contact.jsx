import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <h1 className='font-courgette text-primary text-3xl my-10 flex flex-row justify-center'>About me & Contact</h1>
      <div className='flex flex-col md:flex-row md:items-start gap-10 mx-auto max-w-4xl'>
        <p className='text-orange-950 leading-8 text-justify'>My name is Ivana. I’m from Subotica and I’m a master’s student at the Faculty of Technical Sciences in Novi Sad. This website is part of my personal portfolio, but more importantly — it's a heartfelt tribute to something I truly love - tortoises. As a proud owner of a little tortoise Kornelija, in his honor, I created this website. I wanted to create a space where I could express that love in a meaningful way. While building this site, I learned a lot about different tortoise species, their lives, and their habits.
          Hope you learned something new too and maybe even fallen in love with tortoises just a little more! <span className='text-primary font-courgette flex justify-end text-xl font-thin'>Ivana Gabric</span> </p>
          
        <img className='w-80 h-auto shadow-md object-cover' src={assets.me} alt="" />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0 }}
        >
          <div className="py-10">
            <div className="max-w-4xl mx-auto border border-primary rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-center text-primary mb-8">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <LocationOnIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    Serbia
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <LocalPhoneIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    +381 65 527 2109
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <EmailIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    ivanagabricm@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  );
};

export default Contact;








