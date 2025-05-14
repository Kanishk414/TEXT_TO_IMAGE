

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  
  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  
  return (
    <div className="py-20 bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Ideas into Images?
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are bringing their imagination to life with our AI image generator.
          </p>
          
          <motion.button
            onClick={onClickHandler}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg shadow-indigo-200 flex items-center gap-3 mx-auto transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Generate Images
            <img className="h-6" src={assets.star_group} alt="" />
          </motion.button>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10M+</div>
              <p className="text-gray-600 text-sm">Images Created</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">150k+</div>
              <p className="text-gray-600 text-sm">Happy Users</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <p className="text-gray-600 text-sm">User Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <p className="text-gray-600 text-sm">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GenerateBtn