import React from 'react'
import './ExploreSerivces.css'
import { menu_list_women,menu_list_men} from '../../assets/assets'

const ExploreSerivces = ({category,setCategory}) => {

  return (
    <div className='explore-serivces' id='explore-serivces'>
    <div className='explore-serivces-list'>
     {menu_list_women.map((item,index)=>{
        return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-serivces-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p className='serivce-name'>{item.menu_name}</p>
            </div>
        )
     })}
     <hr/>
     
    </div>
    <hr/>
    </div>
  )
}

export default ExploreSerivces