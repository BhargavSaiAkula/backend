import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='title' id='Contact-us'>
    <p>Contact US</p>
    <hr/>
    <h2>Get in Touch</h2>
    </div>
     <div className='contact'>
       <div className='contact-col'>
       <h3>Send us a message<img src={assets.Msgicon} alt=''/></h3>
       <p>feel free to reach out through contact from or find our contact 
       information below. Your feedback,questions, andsuggestions are 
       important to us as we strive to provide exceptional service to our 
       user community.</p>
        <ul>
            <li><img src={assets.Mailicon}/>Contact@beautyswift.com</li>
            <li><img src={assets.Phoneicon}/>+91-7994266886</li>
            <li><img src={assets.Location_icon}/>Electronic city, Bangalore</li>
        </ul>
        </div>
       <div className='contact-col'>
      <form>
        <label>Your name</label>
        <input type='text' name='name' placeholder='Enter Your name' required/>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
        <label>Email</label>
        <input type='email' name='email' placeholder='Enter Your Email id' required/>
        <label>Write your messages here</label>
        <textarea name='message' rows='6' placeholder='Enter your message' required >
        </textarea>
        <button type='submit' className='btn'>Submit Now<img src={assets.White_arrow}/></button>
      </form>
      <span></span>
       </div>
     </div>
    </div>
  )
}

export default Contact