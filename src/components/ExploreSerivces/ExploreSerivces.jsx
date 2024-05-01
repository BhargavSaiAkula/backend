import React from 'react'
import './ExploreSerivces.css'
import { menu_list_women,menu_list_men} from '../../assets/assets'

const ExploreSerivces = ({category,setCategory}) => {

  return (
    <div className='explore-serivces' id='explore-serivces'>
    <h1>Explore our Services</h1>
    <p className='explore-serivces-text'>Unlock your beauty potential with top-quality salons and beauty services, all at your fingertips. Effortless beauty, anytime, anywhere—just a tap away!</p>  
    <h2 className=' heading'>Women</h2> 
    <div className='explore-serivces-list'>
     {menu_list_women.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-serivces-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p className='serivce-name'>{item.menu_name}</p>
            </div>
        )
     })}
     
    </div>
    <h2 className=' heading'>Men</h2>
    <div className='explore-serivces-list-men'>
   
    {menu_list_men.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-serivces-list-item-men'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p className='serivce-name'>{item.menu_name}</p>
            </div>
        )
     })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreSerivces