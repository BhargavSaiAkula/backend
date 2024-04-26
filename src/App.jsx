import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import PlaceAppointment from './pages/PlaceAppointment/PlaceAppointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
   <div className='app'>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/appointment" element={<PlaceAppointment/>}/>
     </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;




 

