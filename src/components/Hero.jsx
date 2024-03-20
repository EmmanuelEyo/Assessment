import React from 'react';
import hero_img_working from '../data/hero_img_working.png';
import { motion } from 'framer-motion';
import '../App.css'

const Hero = () => {
  return (
    <motion.div className="hero relative justify-start shadow-lg mt-32 p-4 sm:p-8 py-6 rounded-lg items-center" 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
      <motion.div  
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
        <p className="text-purple-800 hero-text text-lg sm:text-2xl font-semibold">
          Congratulations John! 🎉
        </p>
        <p className="text-gray-500 text-sm hero-p sm:text-md mt-6">
          You have done more than 72% 😍 more sales today. <br /> Check your new
          raising badge in your profile
        </p>
        <motion.button className="hero-btn text-purple-500 border border-t-2 border-b-2 border-l-2 border-r-2 border-purple-500 font-semibold px-4 py-2 bg-transparent rounded mt-5 text-sm">
          VIEW BADGES
        </motion.button>
      </motion.div>
      <motion.div className="sm:block absolute right-10 bottom-10"      
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
        <img
          src={hero_img_working}
          alt="Illustration of a person working"
          className="w-44 h-44 image"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;





