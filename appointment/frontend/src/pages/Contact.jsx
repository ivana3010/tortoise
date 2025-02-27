import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";

const Contact = () => {
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setShowText(false);
  };

  return (
    <div>
      <div className="relative h-[60vh] w-full " onClick={handleClick}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22133.25963487685!2d19.656343597485336!3d46.0978049512231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366c168af38f9%3A0xdf19bd922a3d838e!2z0KHRg9Cx0L7RgtC40YbQsA!5e0!3m2!1ssr!2srs!4v1739379602181!5m2!1ssr!2srs"
          className="absolute w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {showText && (
          <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white text-5xl font-semibold">Contact Us</h1>
              <p className="text-white text-lg mt-4">We'd love to hear from you!</p>
            </div>
          </>
        )}
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0 }} 
        >
          <div className="py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <LocationOnIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    Beogradski put, Subotica
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








