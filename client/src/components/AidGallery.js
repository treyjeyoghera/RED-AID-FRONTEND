import React from 'react'
import '../App.css';

const images = [
    { src: ".../public/aid-images/mom-farmer.jpg", alt: "Mother farmer" },
    { src: ".../public/aid-images/melon-girl.jpg", alt: "Girl with melons" },
    { src: ".../public/aid-images/carver.jpg", alt: "Carver working" },
    { src: ".../public/aid-images/aviation.jpg", alt: "Aviation lady" },
    { src: ".../public/aid-images/desert.jpg", alt: "Desert worker" }
  ];

  const AidGallery = () => {
    return (
      <div className="aid-gallery">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            className="gallery-image"
          />
        ))}
      </div>
    );
  };
  

export default AidGallery