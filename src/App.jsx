import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import PlaceAppointment from './pages/PlaceAppointment/PlaceAppointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
 
  const[showLogin,setShowLogin] = useState(false)
   console.log("i am in app");
   console.log(showLogin);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/book" element={<PlaceAppointment/>}/>
     </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;




 

