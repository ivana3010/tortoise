import React from 'react'
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { name: 'Users', value: 12000 },
    { name: 'Appointments', value: 8500 },
    { name: 'Certifications', value: 50 },
    { name: 'Years of Experience', value: 20 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-10 my-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-8">About us</h2>
          <p className="text-gray-600 leading-8 text-justify w-full">
            At Althea, we are committed to providing high-quality services tailored to meet the diverse needs of our customers. With years of experience in the industry, we have become a trusted partner for those looking for reliable solutions. Our team of experts is dedicated to ensuring that every client receives the best possible service, whether it's in health care, technology, or customer support.Since our establishment, we have consistently worked to enhance the value we provide, focusing on innovation, efficiency, and customer satisfaction. Our goal is to create lasting relationships with our clients by providing exceptional service that goes beyond expectations. We understand the unique challenges each individual or business faces, and we are here to help them navigate these challenges with confidence.
            At the heart of our success is a passion for excellence and a commitment to improving the lives of those we serve. We believe that every client deserves personalized attention.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={assets.about_image} alt="About Us" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center my-20">
        {stats.map((stat, index) => (
          <motion.div key={index} className="bg-primary text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}>
            <p className="text-4xl font-bold">{stat.value}+</p>
            <p className="text-lg">{stat.name}</p>

          </motion.div>
        ))}
      </div>


    </div>
  );
};

export default About