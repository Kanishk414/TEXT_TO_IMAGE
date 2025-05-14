// import React, { useContext } from 'react'
// import { assets, plans } from '../assets/assets'
// import { AppContext } from '../context/AppContext'
// import {motion} from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import axios from 'axios'


// const BuyCredit = () => {

//   const {user,backendUrl,loadCreditsData,token,setShowLogin} = useContext(AppContext)

//   const navigate = useNavigate()

//   const initPay = async (order) => {
//       const options = {
//         key:import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount : order.amount,
//         currency : order.currency,
//         name:'Credits Payment',
//         description:'Credits Payment',
//         order_id : order.id,
//         receipt:order.receipt,
//         handler: async (response) => {
//           try {
//             const {data} = await axios.post(backendUrl+'/api/user/verify-razor' , response,{headers:{token}})

//             if (data.success) {
//                 loadCreditsData();
//                 navigate('/')
//                 toast.success('Credit Added')
//             }
//           } catch (error) {
//             toast.error(error.message);
//           }
//         }
//       }
//       const rzp = new window.Razorpay(options)
//       rzp.open()
//   }

//   const paymentRazorpay = async (planId)=>{
//       try {
//         if (!user) {
//           setShowLogin(true)
//         }

//         const {data} = await axios.post(backendUrl+'/api/user/pay-razor',{planId},{headers:{token}})

//         if(data.success){
//             initPay(data.order)
//         }

//       } catch (error) {
//         toast.error(error.message)
//       }
//   }

//   return (
//     <motion.div 
//     initial={{opacity:0.2 , y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1,y:0}}
//     viewport={{once:true}}
//     className='min-h-[80vh] text-center pt-14 mb-10'>
//       <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>

//       <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

//       <div className='flex flex-wrap justify-center gap-6 text-left'>
//         {plans.map((item,index)=>(
//             <div key={index} 
//             className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
//               <img src={assets.logo_icon} alt=""  width={40}/>
//               <p className='mt-3 mb-1 font-semibold'>{item.id} </p>
//               <p className='text-sm'>{item.desc}</p>
//               <p className='mt-6 '>{item.price}</p>
//               <p> <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} credits </p>

//               <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' :'Get Started'}</button>
//             </div>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default BuyCredit

import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verify-razor', response, { headers: { token } })

          if (data.success) {
            loadCreditsData();
            navigate('/')
            toast.success('Credits added successfully!')
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
        return
      }

      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, { headers: { token } })

      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6">
            Pricing Plans
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for Your Creative Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a plan that matches your needs. Generate stunning AI images with our affordable credit packages.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="p-8">
                  <div className="h-12 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                      <img src={assets.logo_icon} alt="" width={30} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.id}</h3>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ {plan.credits} credits</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {plan.credits} high-quality images
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {Math.floor(plan.credits / 2)} unique styles
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      HD downloads
                    </li>
                    {plan.id !== 'Basic' && (
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Priority rendering
                      </li>
                    )}
                  </ul>
                  
                  <button
                    onClick={() => paymentRazorpay(plan.id)}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.id === 'Premium' 
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {user ? 'Purchase Now' : 'Get Started'}
                  </button>
                </div>
                
                {plan.id === 'Premium' && (
                  <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-gray-900">
                    <span>How do credits work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    Each credit allows you to generate one AI image. Credits are deducted from your account each time you successfully generate an image. They don't expire, so you can use them at your own pace.
                  </div>
                </details>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-gray-900">
                    <span>Can I download the images I create?</span>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    Yes, all generated images can be downloaded immediately after creation. You retain the rights to use the images you create for personal or commercial purposes.
                  </div>
                </details>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-gray-900">
                    <span>What payment methods do you accept?</span>
                    <span className="transition group-open:rotate-180">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    We accept all major credit cards, debit cards, and various payment methods through our secure payment gateway, Razorpay.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyCredit