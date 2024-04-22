import './Header.css';
import React, { useState } from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Header = () => {
  const slides = [
    {
      id: 1,
      heading: 'Slide 1 Heading',
      description: 'This is the content for slide 1.',
      buttonText: 'Learn More',
      backgroundImage: image1
    },
    {
      id: 2,
      heading: 'Slide 2 Heading',
      description: 'This is the content for slide 2.',
      buttonText: 'Explore',
      backgroundImage: image2
    },
    {
      id: 3,
      heading: 'Slide 3 Heading',
      description: 'This is the content for slide 3.',
      buttonText: 'Get Started',
      backgroundImage: image3
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            transform: `translateX(${(index - currentSlide) * 100}%)`
          }}
        >
          <div className="content">
            <h2>{slide.heading}</h2>
            <p>{slide.description}</p>
            <button>{slide.buttonText}</button>
          </div>
        </div>
      ))}
      <div className="navigation">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Header;
