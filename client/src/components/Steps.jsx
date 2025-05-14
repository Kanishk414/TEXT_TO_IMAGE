import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Transform your ideas into stunning visuals with our simple process</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {stepsData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`flex items-start gap-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 mb-8 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} max-w-xl`}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              
              {index < stepsData.length - 1 && (
                <div className={`absolute h-16 border-l-2 border-dashed border-indigo-200 ${index % 2 === 0 ? 'left-7' : 'right-7'} -bottom-8 z-0`}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;