
import React, { useState } from 'react';
import { Carousel } from '@material-tailwind/react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.png';

export function ManualSlideshow() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[600px] w-screen">
      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image} 
            alt={`image ${index + 1}`}
            className={`absolute top-0 left-0 h-full w-full object-cover ${
              index === currentImageIndex ? '' : 'hidden'
            }`}
          />
        ))}
      </Carousel>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
        onClick={prevImage}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
}
export default ManualSlideshow;
