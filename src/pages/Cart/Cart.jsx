import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const{cartItems,serivce_women_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

 const navigate = useNavigate();

  return (
    <div className='cart'>
     <div className='cart-items'>
       <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       </div>
       <br/>
       <hr/>
       {serivce_women_list.map((item,index)=>{
        if(cartItems[item._id]>0)
        {
          return(
            <div>
            <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt=""/>
              <p>{item.shop_name}</p>
              <p>₹{item.price}</p>
              <p >{cartItems[item._id]}</p>
              <p>₹{item.price*cartItems[item._id]}</p>
              <p onClick = {()=>removeFromCart(item._id)} className='cross'>X</p>
            </div>
            <hr/>
            </div>
          )
        }
       })}
     </div>
       <div className='cart-bottom'>
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
          <button onClick={()=>navigate('/book')}>PROCEED TO CHECKOUT</button>     
       </div>
       <div className='cart-promocode'>
       <div>
        <p>if you have a promo code, Enter it here</p>
        <div className='cart-promocode-input'>
          <input type='text' placeholder='promo code'/>
          <button>Submit</button>
        </div>
       </div>

       </div>
       </div>
     </div>
  )
}

export default Cart