import React, { useContext } from 'react'
import './PlaceAppointment.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceAppointment = () => {

 const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='place-order'> 
     <div className='place-order-left'>
     <p className='title'>Booking Information</p>
     <div className='multi-fields'>
         <input type='text' placeholder='First Name'/>
         <input type='text' placeholder='Last name'/>
     </div>
     <input type='email' placeholder='Email address'/>
      <input type='text' placeholder='street'/> 
     <div className='multi-fields'>
         <input type='text' placeholder='City'/>
         <input type='text' placeholder='State'/>
     </div>
     <div className='multi-fields'>
         <input type='text' placeholder='Zip code'/>
         <input type='text' placeholder='Country'/>
     </div>
     <input type='text' placeholder='phone'/>
     </div>
     <div className='place-order-right'>
     <div className='cart-total'>
       <h2>Cart Totals</h2>
       <div>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <p>platform fee</p>
            <p>₹{20}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
            <b>Total</b>
            <b>₹ {getTotalCartAmount()+20}</b>
          </div>
          </div>
          <button >PROCEED TO PAYMENT</button>     
       </div>
     </div>
    </form>
  )
}

export default PlaceAppointment