import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Create AI Images</h2>
          <p className="text-lg text-gray-600">Turn your creativity into stunning visuals with advanced AI technology</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Introducing the AI-Powered Text to Image Generator
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <img src={assets.star_icon} alt="" className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">
                    Effortlessly turn your thoughts into visuals using our free AI image generator. Whether you're crafting bold concepts, innovative designs, or fresh ideas, our tool converts your words into striking, high-quality images in seconds.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <img src={assets.star_icon} alt="" className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">
                    Simply type in a text prompt, and our cutting-edge AI will instantly generate high-quality, detailed images in seconds. From fantasy scenes to digital art and stunning illustrations, even abstract or imaginative ideas can be brought to life with ease.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <img src={assets.star_icon} alt="" className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700">
                    Powered by advanced AI technology, the creative possibilities are truly limitless! Perfect for designers, content creators, marketers, and anyone looking to visualize their ideas.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-100 rounded-full blur-xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-100 rounded-full blur-xl opacity-70"></div>
                <img 
                  src={assets.sample_img_1} 
                  alt="AI generated image" 
                  className="w-full rounded-2xl shadow-lg relative z-10 border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-indigo-600 z-20">
                  AI Generated
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;