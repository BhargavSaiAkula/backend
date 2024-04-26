
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home');

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo' />
      <ul className='navbar-menu'>
        <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
          Home
        </Link>
        <a href='#explore-serivces' className={menu === 'Services' ? 'active' : ''} onClick={() => handleMenuClick('Services')}>
          Services
        </a>
        {/* <a className={menu === 'Reviews' ? 'active' : ''} onClick={() => handleMenuClick('Reviews')}>
          Reviews
        </a> */}
        <a href='#app-download' className={menu === 'mobile-app' ? 'active' : ''} onClick={() => handleMenuClick('mobile-app')}>
          Mobile App
        </a>
        <a href='#footer' className={menu === 'Contact US' ? 'active' : ''} onClick={() => handleMenuClick('Contact US')}>
          Contact US
        </a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
          <div className='signin-button'>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



