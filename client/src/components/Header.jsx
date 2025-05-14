

import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-indigo-100/40 blur-3xl -z-10"></div>
      <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
      
      <motion.div 
        className="container mx-auto px-4 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center text-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-indigo-600 font-medium">AI-powered text to stunning visuals</p>
          <img src={assets.star_icon} alt="" className="w-4 h-4" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mt-8 max-w-4xl bg-gradient-to-r from-indigo-700 via-blue-500 to-indigo-800 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Transform Text into Beautiful Images in Seconds
        </motion.h1>

        <motion.p 
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Unleash your creativity with AI. Turn your imagination into stunning visuals with just a few words – watch your descriptions transform into beautiful images instantly.
        </motion.p>

        <motion.button
          onClick={onClickHandler}
          className="mt-10 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg shadow-indigo-200 flex items-center gap-3 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Generate Images
          <img className="h-6" src={assets.star_group} alt="" />
        </motion.button>

        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {Array(6).fill('').map((item, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
                alt=""
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 text-gray-500 text-sm"
        >
          Examples of AI-generated images from text descriptions
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Header;