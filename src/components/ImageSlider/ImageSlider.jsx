import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ImageSlider.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { assets } from '../../assets/assets';

export default function ImageSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={assets.image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.image3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}