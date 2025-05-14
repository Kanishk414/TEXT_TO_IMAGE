import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          toast.success('Logged in successfully!')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          toast.success('Account created successfully!')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      >
        <motion.div
          className="w-full max-w-md p-8 relative"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              <div className="relative px-8 py-6 text-white">
                <h2 className="text-2xl font-bold">{state}</h2>
                <p className="text-blue-100 text-sm mt-1">
                  {state === 'Login' ? 
                    'Welcome back! Sign in to your account.' :
                    'Create an account to get started.'
                  }
                </p>
              </div>
            </div>

            <form onSubmit={onSubmitHandler} className="p-8">
              {state !== 'Login' && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <img src={assets.user_icon} alt="" className="w-5 h-5 opacity-60" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-60" />
                  </div>
                  <input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  {state === 'Login' && (
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <img src={assets.lock_icon} alt="" className="w-5 h-5 opacity-60" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-full text-white font-medium transition-all duration-300 ${
                  isLoading 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  state === 'Login' ? 'Sign In' : 'Create Account'
                )}
              </button>

              <div className="mt-6 text-center">
                {state === 'Login' ? (
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                      onClick={() => setState('Sign up')}
                    >
                      Sign up
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                      onClick={() => setState('Login')}
                    >
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>

          <button
            onClick={() => setShowLogin(false)}
            className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          >
            <img src={assets.cross_icon} alt="Close" className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Login