// import React from 'react'
// import './SerivceDisplay.css'
// import { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import SerivceItem from '../SerivceItem/SerivceItem'

// const SerivceDisplay = ({category}) => {

//   const {serivce_women_list} = useContext(StoreContext)


//   return (
//     <div className='serivce-display' id='serivce-display'>
//     <h2> Top Services near you</h2>
//     <div className='serivce-display-list'>
//      {serivce_women_list.map((item,index)=>{
//       if(category==="All" || category === item.category){
//       return <SerivceItem key={index} id={item._id} shop_name={item.shop_name} location={item.location} timing={item.timing} price={item.price} image={item.image}/>
//       }
//      })}
//     </div>

//     </div>
//   )
// }

// export default SerivceDisplay
import React, { useState } from 'react';
import './SerivceDisplay.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import SerivceItem from '../SerivceItem/SerivceItem';

const SerivceDisplay = ({ category }) => {
  const { serivce_women_list } = useContext(StoreContext);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchShopName, setSearchShopName] = useState('');

  const handleSearch = () => {
    // Implement your search logic here using searchLocation and searchShopName
    console.log('Search location:', searchLocation);
    console.log('Search shop name:', searchShopName);
  };

  return (
    <div className='serivce-display' id='serivce-display'>
      <h2>Top Services near you</h2>
      <div className='search-inputs'>
        <input
          type='text'
          placeholder='Enter Location'
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Shop Name'
          value={searchShopName}
          onChange={(e) => setSearchShopName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='serivce-display-list'>
        {serivce_women_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <SerivceItem
                key={index}
                id={item._id}
                shop_name={item.shop_name}
                location={item.location}
                timing={item.timing}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SerivceDisplay;
