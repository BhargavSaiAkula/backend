
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
    console.log('Search location:', searchLocation);
    console.log('Search shop name:', searchShopName);
  };

  const filteredServices = serivce_women_list.filter(item => {
      const locationMatch = item.location.toLowerCase().includes(searchLocation.toLowerCase());
      const shopNameMatch = item.shop_name.toLowerCase().includes(searchShopName.toLowerCase());
      const categoryMatch = category === 'All' || category === item.category;
      return locationMatch && shopNameMatch && categoryMatch;
    });
    


  return (
    <div className='serivce-display' id='serivce-display'>
      <h2>Top Services near you</h2>
      <div className='search-inputs'>
        <select
          id="location"
          name="locationlist"
          form="locationform"
          onChange={(e) => setSearchLocation(e.target.value)}
          className='select'
        >
          <option value="Select Area">Select Area</option>
          <option value="BTM Layout">BTM Layout</option>
          <option value="Electronic city ">Electronic city </option>
          <option value="J.P Nagar">J.P Nagar</option>
          <option value="Koramangala">Koramangala</option>
        </select>
        <input
          type='text'
          placeholder='Enter Shop Name'
          value={searchShopName}
          onChange={(e) => setSearchShopName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='serivce-display-list'>
        {filteredServices.map((item, index) => (
          <SerivceItem
            key={index}
            id={item._id}
            shop_name={item.shop_name}
            location={item.location}
            timing={item.timing}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SerivceDisplay;
