import React from 'react';
import './ExploreSerivces-men.css';
import { menu_list_men } from '../../assets/assets';

const ExploreSerivcesmen = ({ category, setCategory }) => {
  return (
    <div className='explore-serivces' id='explore-serivces'>
      <div className='explore-serivces-list-men'>
        {menu_list_men.map((item, index) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className='explore-serivces-list-item-men'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p className='service-name'>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreSerivcesmen;
