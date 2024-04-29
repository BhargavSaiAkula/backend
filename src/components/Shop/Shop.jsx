import React from 'react'
import './Shop.css'
import { assets } from '../../assets/assets'

const Shop = () => {
  return (
    <>
    <div className='title'>
    <p>Find Near By Services Shop</p>
    <h2>Book Your Appiontment</h2>

    </div>
    <div className='shops'>
     <div className='shop'>
       <img src={assets.shop1} alt=''/>
       <div className='caption'>
        <img src={assets.icon1} alt=''/>
        <p>Salon Shop</p>
       </div>
     </div>
     <div className='shop'>
       <img src={assets.shop2} alt=''/>
       <div className='caption'>
        <img src={assets.icon2} alt=''/>
        <p>SPA Shop</p>
       </div>
     </div>
     <div className='shop'>
       <img src={assets.shop3} alt=''/>
       <div className='caption'>
        <img src={assets.icon3} alt=''/>
        <p>Parlours </p>
       </div>
     </div>
    </div>
    </>
  )
}

export default Shop