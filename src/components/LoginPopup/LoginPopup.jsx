import './LoginPopup.css'
import { assets } from '../../assets/assets'
import React, { useState } from 'react'


const LoginPopup = ({setShowLogin}) => {
 
  const[currstate,setCurrstate] = useState("Login")

  return (
    <div className='login-popup'>
         <form className='login-popup-container'>
         <div className='login-popup-title'>
           <h2>{currstate}</h2>
           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
         </div>
         <div className='login-popup-inputs'>
         {currstate ==="Login"?<></>: <input type='text' placeholder='Your name' required/>}
          <input type='email' placeholder='Your email' required/>
          <input type='password' placeholder='Password' required/>
         </div>
         <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By countinuing, i agree to the terms of use & privacy policy.</p>
           </div>
           <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
           
           {currstate === "Login"
            ?<p> Create a new account?<span onClick={()=>setCurrstate("sign Up")}>Click here</span></p>
            :<p>Alreay have an account?<span onClick={()=>setCurrstate("Login")}>Login</span></p>
           }
         </form>   
    </div>
  )
}

export default LoginPopup
