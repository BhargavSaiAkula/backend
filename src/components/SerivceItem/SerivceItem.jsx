import React, { useContext} from 'react'
import './SerivceItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const SerivceItem = ({id,shop_name,price,location,timing,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='serivce-item'>
    <div className='serivce-item-img-container'>
     <img className='serivce-item-image' src={image} alt=""/> 

       {/* {!cartItems[id]
                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
               :<div className='serivce-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt=""/>
              </div>
            }   */}
    </div>
        <div className='serivce-item-info'>
          <div className="serivce-item-name-rating">
          <p>{shop_name}</p>
            <img src={assets.rating_starts} alt='' />
          </div>
            <p className='serivce-item-desc'>{location}</p>
            <p>{timing}</p>
            <div className='add-to-cart'>
            <p className='serivce-item-price' >₹{price}</p>
            {!cartItems[id]
                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> 
               :<div className='serivce-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt=""/>
              </div>
            }  
            </div>
        </div>
    </div>
  )
}

export default SerivceItem
