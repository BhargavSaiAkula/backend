import React from 'react'
import './Gallery.css'
import { assets } from '../../assets/assets'

const Gallery = () => {
  return (
    <>
    <div className='title'>
    <p>Photo Gallery</p>
    <hr/>
    <h2>Explore our photo gallery to get a glimpse of the stunning transformations and exquisite beauty creations by our talented salon professionals. Witness the artistry and dedication that goes into making every client look and feel their best.</h2>
    </div>
    <div className='photo-gallery'>
      <div className='gallery'>
      <div>
        <img className='one' src={assets.gallery1} alt=''/>
        <img className='one' src={assets.gallery4} alt=''/>
        </div>
        <img className='two' src={assets.gallery2} alt=''/>
        <div>
        <img className='three' src={assets.gallery3} alt=''/>
        <img className='three' src={assets.gallery5} alt=''/>
        </div>
        </div>
        <div className='gallery'>
        <img className='four' src={assets.gallery6} alt=''/>
        <img className='four' src={assets.gallery7} alt=''/>
      </div>
    </div>
    </>
  )
}

export default Gallery