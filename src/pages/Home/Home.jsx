import React, { useState } from 'react'
import './Home.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import ExploreSerivces from '../../components/ExploreSerivces/ExploreSerivces'
import SerivceDisplay from '../../components/SerivceDisplay/SerivceDisplay'
import Shop from '../../components/Shop/Shop'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

   const [category,setCategory] = useState("All");

  return (
    <div>
      <ImageSlider/>
      <Shop/>
      <ExploreSerivces category={category} setCategory={setCategory}/>
      <SerivceDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home