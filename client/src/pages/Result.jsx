import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const { generateImage, credit } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (input) {
      const generatedImage = await generateImage(input)
      if (generatedImage) {
        setIsImageLoaded(true)
        setImage(generatedImage)
      }
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Image Generator</h1>
            <div className="flex items-center">
              <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
                <img src={assets.credit_star} alt="" className="w-5 h-5" />
                <span className="text-sm font-medium text-indigo-700">Credits: {credit}</span>
              </div>
              {credit < 5 && (
                <button 
                  onClick={() => navigate('/buy')}
                  className="ml-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm px-4 py-2 rounded-full"
                >
                  Buy Credits
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Tell AI what to create</h2>
              <p className="text-gray-600">Be specific about what you want to see in the image</p>
            </div>

            <form onSubmit={onSubmitHandler} className="space-y-6">
              <div className="w-full">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Describe what you want to generate in detail..." 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all pr-36"
                  />
                  <button 
                    type="submit"
                    disabled={loading || !input.trim()}
                    className={`absolute right-2 top-2 px-6 py-2 rounded-full transition-all ${
                      loading || !input.trim() 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['A mystical forest', 'Futuristic city', 'Underwater kingdom', 'Space adventure'].map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setInput(suggestion)}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {isImageLoaded ? 'Your generated image' : loading ? 'Generating your image...' : 'Result will appear here'}
              </h2>
              <p className="text-gray-600">
                {isImageLoaded 
                  ? 'Download or create another image'
                  : loading 
                    ? 'This might take a few seconds...'
                    : 'Enter a prompt above to generate an image'
                }
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="relative max-w-md w-full">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/10 backdrop-blur-sm rounded-2xl z-10">
                    <div className="flex flex-col items-center">
                      <div className="loader"></div>
                      <p className="text-indigo-600 mt-4 font-medium">Creating your masterpiece...</p>
                    </div>
                  </div>
                )}
                <img 
                  src={image} 
                  alt="Generated image" 
                  className="w-full rounded-2xl shadow-md border-4 border-white"
                />
                <span className={`absolute bottom-0 left-0 h-1 bg-indigo-500 rounded-bl-lg ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
              </div>
            </div>

            {isImageLoaded && (
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsImageLoaded(false)}
                  className="btn-secondary"
                >
                  Generate Another
                </button>
                <a
                  href={image}
                  download="ai-generated-image.png"
                  className="btn-primary flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                  Download
                </a>
              </div>
            )}
          </div>

          <style jsx>{`
            .loader {
              border: 4px solid rgba(255, 255, 255, 0.3);
              border-radius: 50%;
              border-top: 4px solid #6366f1;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </motion.div>
      </div>
    </div>
  )
}

export default Result