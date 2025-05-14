import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-indigo-50/30">
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Navbar />
      
      {showLogin && <Login />}
      
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App