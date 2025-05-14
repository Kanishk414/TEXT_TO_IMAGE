import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md px-4 md:px-6 lg:px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-36" />
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3 md:gap-5">
              <button 
                onClick={() => navigate('/buy')} 
                className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 px-4 sm:px-6 py-2 rounded-full transition-all duration-300"
              >
                <img className="w-5" src={assets.credit_star} alt="" />
                <p className="text-sm font-medium text-indigo-700">Credits: {credit}</p>
              </button>
              
              <p className="text-gray-700 max-md:hidden">
                Hi, <span className="font-medium">{user.name}</span>
              </p>
              
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center cursor-pointer border-2 border-white shadow-sm">
                  <span className="text-indigo-700 font-medium">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <div className="absolute hidden group-hover:block top-0 right-0 z-30 pt-12">
                  <ul className="list-none m-0 p-3 bg-white rounded-xl shadow-lg border border-gray-100 text-sm min-w-[150px]">
                    <li 
                      onClick={logout} 
                      className="py-2 px-3 cursor-pointer text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 sm:gap-5">
              <Link 
                to="/buy" 
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Pricing
              </Link>
              
              <button 
                className="btn-primary text-sm"
                onClick={() => setShowLogin(true)}
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar