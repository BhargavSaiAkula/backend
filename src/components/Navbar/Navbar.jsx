
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo' />
      <ul className='navbar-menu'>
        <li className={menu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
          Home
        </li>
        <li className={menu === 'Book' ? 'active' : ''} onClick={() => handleMenuClick('Book')}>
          Book
        </li>
        <li className={menu === 'Reviews' ? 'active' : ''} onClick={() => handleMenuClick('Reviews')}>
          Reviews
        </li>
        <li className={menu === 'mobile-app' ? 'active' : ''} onClick={() => handleMenuClick('mobile-app')}>
          Mobile App
        </li>
        <li className={menu === 'Contact US' ? 'active' : ''} onClick={() => handleMenuClick('Contact US')}>
          Contact US
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
          <div className='signin-button'>
            <button>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
