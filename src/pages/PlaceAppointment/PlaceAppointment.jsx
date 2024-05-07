// import React, { useContext } from 'react'
// import './PlaceAppointment.css'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceAppointment = () => {

//  const {getTotalCartAmount}=useContext(StoreContext)

//   return (
//     <form className='place-order'> 
//      <div className='place-order-left'>
//      <p className='title'>Booking Information</p>
//      <div className='multi-fields'>
//          <input type='text' placeholder='First Name'/>
//          <input type='text' placeholder='Last name'/>
//      </div>
//      <input type='email' placeholder='Email address'/>
//       <input type='text' placeholder='street'/> 
//      <div className='multi-fields'>
//          <input type='text' placeholder='City'/>
//          <input type='text' placeholder='State'/>
//      </div>
//      <div className='multi-fields'>
//          <input type='text' placeholder='Zip code'/>
//          <input type='text' placeholder='Country'/>
//      </div>
//      <input type='text' placeholder='phone'/>
//      </div>
//      <div className='place-order-right'>
//      <div className='cart-total'>
//        <h2>Cart Totals</h2>
//        <div>
//           <div className='cart-total-details'>
//             <p>Subtotal</p>
//             <p>₹{getTotalCartAmount()}</p>
//           </div>
//           <hr/>
//           <div className='cart-total-details'>
//             <p>platform fee</p>
//             <p>₹{20}</p>
//           </div>
//           <hr/>
//           <div className='cart-total-details'>
//             <b>Total</b>
//             <b>₹ {getTotalCartAmount()+20}</b>
//           </div>
//           </div>
//           <button >PROCEED TO PAYMENT</button>     
//        </div>
//      </div>
//     </form>
//   )
// }

// export default PlaceAppointment

import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PlaceAppointment.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceAppointment = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  const timeSlots = [];
  for (let hour = 11; hour <= 18; hour++) {
    if (hour === 11) {
      timeSlots.push(`${hour}:30 AM`);
    } else if (hour === 12) {
      timeSlots.push(`${hour}:00 PM`);
      timeSlots.push(`${hour}:30 PM`);
    } else {
      timeSlots.push(`${hour - 12}:00 PM`);
      timeSlots.push(`${hour - 12}:30 PM`);
    }
  }
  timeSlots.unshift('11:00 AM'); // Add 11:30 AM as the first slot

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Booking Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        
        <input type='text' placeholder='Phone' />
        <div className='date-time-picker'>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              placeholderText='Select date'
            />
            <select className='time' onChange={e => handleTimeChange(e.target.value)} value={selectedTime}>
              <option value=''>Select time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Platform fee</p>
              <p>₹{20}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹ {getTotalCartAmount() + 20}</b>
            </div>
          </div>
          
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceAppointment;
