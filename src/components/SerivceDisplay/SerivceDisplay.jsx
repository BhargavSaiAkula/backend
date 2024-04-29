import React from 'react'
import './SerivceDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import SerivceItem from '../SerivceItem/SerivceItem'

const SerivceDisplay = ({category}) => {

  const {serivce_women_list} = useContext(StoreContext)


  return (
    <div className='serivce-display' id='serivce-display'>
    <h2> Top Services near you</h2>
    <div className='serivce-display-list'>
     {serivce_women_list.map((item,index)=>{
      if(category==="All" || category === item.category){
      return <SerivceItem key={index} id={item._id} shop_name={item.shop_name} location={item.location} timing={item.timing} price={item.price} image={item.image}/>
      }
     })}
    </div>

    </div>
  )
}

export default SerivceDisplay