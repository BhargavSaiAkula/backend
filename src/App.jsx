// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart';
// import PlaceAppointment from './pages/PlaceAppointment/PlaceAppointment';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <div className='app'>
//     <Navbar/>
//      <Routes>
//       <Route Path="/" element={<Home/>}/>
//       <Route Path="/cart" element={<Cart/>}/>
//       <Route Path="/appointment" element={<PlaceAppointment/>}/>
//      </Routes>
//     </div>
//   )
// }

// export default App;
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart';
import PlaceAppointment from './pages/PlaceAppointment/PlaceAppointment';
import {  Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
     <Routes>
      <Route Path="/" element={<Home/>}/>
      <Route Path="/cart" element={<Cart/>}/>
      <Route Path="/appointment" element={<PlaceAppointment/>}/>
     </Routes>
    </div>
  )
}

export default App;


 

