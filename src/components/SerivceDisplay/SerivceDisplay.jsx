import React from 'react'
import './SerivceDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const SerivceDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)


  return (
    <div className='serivce-display' id='serivce-display'>
    <h2> Top Services near you</h2>


    </div>
  )
}

export default SerivceDisplay