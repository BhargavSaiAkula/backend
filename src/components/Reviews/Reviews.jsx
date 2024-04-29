import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "./Review.css"; // Import the CSS file
import Card from "./Card";
const Reviews = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper) {
      const newSwiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        },
      });
      setSwiper(newSwiper);
    }
  }, [swiper]);

  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <Card
          imageSrc="images/p7.jpg"
          overlayId="overlay-1"
          name="Web Developer"
          description="Hi there! I'm a passionate web developer with a keen eye for creating visually appealing, digital experiences that blend creativity and user-friendly websites."
          btnId="btn1"
        />
        {/* Repeat for other cards */}
      </div>
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};



export default Reviews;