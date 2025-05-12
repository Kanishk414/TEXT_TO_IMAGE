import React, { useContext } from "react";

// routes and route
import {Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";


const App = ()=> {

  const {showLogin} = useContext(AppContext);
  return (
    // these is padding for all the types of screens  on x-axis
    // and also these all are tailwind classes
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-blue-50 to-violet-50'>
        <ToastContainer position='bottom-right'/>
    <Navbar/>
    { showLogin && <Login/>}
      {/* for mounting the files in the pages */}
      <Routes>
        // '/' means that will be Home page 
        // These are various paths 
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>

    <Footer/>
    </div>
  )
}

export default App 