import React, { useState } from 'react';
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import { HiArrowSmallRight,HiArrowSmallLeft } from "react-icons/hi2";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, src: c1, alt: 'Slide 1' },
    { id: 2, src: c2, alt: 'Slide 2' },
    { id: 3, src: c3, alt: 'Slide 3' },
    { id: 4, src: c4, alt: 'Slide 4' },
    { id: 5, src: c5, alt: 'Slide 5' },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel relative container mx-auto" style={{ maxWidth: '700px', maxHeight: '350px' }}>
      <div className="carousel-inner relative overflow-hidden w-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item absolute w-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ height: '400px' }}
          >
            <img src={item.src} alt={item.alt} className="block h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="carousel-control grid grid-cols-2">
        <button onClick={prevSlide} className="prev absolute top-40 left-0 rounded-full bg-darkestblue bg-opacity-50 text-white p-2">
            <HiArrowSmallLeft className='w-6 h-6'/>

        </button>
        <button onClick={nextSlide} className="next absolute top-40 right-0 rounded-full bg-darkestblue bg-opacity-50 text-white p-2">
            <HiArrowSmallRight className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
