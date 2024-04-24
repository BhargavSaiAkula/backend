import React from 'react'
import './ExploreSerivces.css'
import { menu_list } from '../../assets/assets'

const ExploreSerivces = ({category,setCategory}) => {

  return (
    <div className='explore-serivces' id='explore-serivces'>
    <h1>Explore our Services</h1>
    <p className='explore-serivces-text'>Unlock your beauty potential with top-quality salons and beauty services, all at your fingertips. Effortless beauty, anytime, anywhere—just a tap away!</p>   
    <div className='explore-serivces-list'>
     {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-serivces-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p>{item.menu_name}</p>
            </div>
        )
     })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreSerivces