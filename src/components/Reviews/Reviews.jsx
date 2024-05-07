
import React, { useRef } from 'react';
import './Review.css';
import { assets } from '../../assets/assets';

const Reviews = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className='title' id='Reviews'>
        <p>Testimonials</p>
        <hr />
        <h2>What Our Clients Say!</h2>
      </div>
      <div className='testimonials'>
        <img src={assets.nextIcon} alt='' className='next-btn' onClick={slideForward} />
        <img src={assets.backIcon} alt='' className='back-btn' onClick={slideBackward} />
        <div className='slider'>
          <ul ref={slider}>
          <li>
        <div className='slide'>
          <div className='user-info'>
                  <img src={assets.user1} alt=""/>
                  <div>
                    <h3>Michael Rodriguez</h3>
                    <span>Software Developer</span>
                  </div>
          </div>
<p>"I'm impressed with eSalon's intuitive booking process. It's incredibly easy to use, and I appreciate the flexibility to pay online. The service quality is always top-notch. I wouldn't book my salon appointments anywhere else!"</p>
        </div>
      </li>
      <li>
        <div className='slide'>
          <div className='user-info'>
                  <img src={assets.user2} alt=""/>
                  <div>
                    <h3>Emily Clark</h3>
                    <span>Student</span>
                  </div>
          </div>
          <p>"eSalon is a game-changer! I can quickly find the services I need, select a salon nearby, and book my appointment at my convenience. Plus, the payment options are super convenient. It's become an essential part of my beauty routine."
</p>
        </div>
      </li>
      <li>
        <div className='slide'>
          <div className='user-info'>
                  <img src={assets.user3} alt=""/>
                  <div>
                    <h3>Sarah Johnson</h3>
                    <span>Marketing Executive</span>
                  </div>
          </div>
          <p>"eSalon has made booking salon appointments a breeze! The variety of services and the convenience of choosing a salon branch that suits me best is fantastic. I've never had a bad experience. Highly recommended!"
</p>
        </div>
      </li>
      <li>
        <div className='slide'>
          <div className='user-info'>
                  <img src={assets.user4} alt=""/>
                  <div>
                    <h3>Emily Clark</h3>
                    <span>Student</span>
                  </div>
          </div>
          <p>"eSalon is a game-changer! I can quickly find the services I need, select a salon nearby, and book my appointment at my convenience. Plus, the payment options are super convenient. It's become an essential part of my beauty routine."
</p>
        </div>
      </li>
      <li>
        <div className='slide'>
          <div className='user-info'>
                  <img src={assets.user2} alt=""/>
                  <div>
                    <h3>Emily Clark5</h3>
                    <span>Student</span>
                  </div>
          </div>
          <p>"eSalon is a game-changer! I can quickly find the services I need, select a salon nearby, and book my appointment at my convenience. Plus, the payment options are super convenient. It's become an essential part of my beauty routine."
</p>
        </div>
      </li>
     
     
     </ul>

     </div>
    </div>
    </>
  );
};

export default Reviews;
