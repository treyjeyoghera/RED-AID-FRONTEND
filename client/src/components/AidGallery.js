import React from 'react'
import '../App.css';

const images = [
    { src: "/aid-images/mom-farmer.jpg", alt: "Mother farmer" },
    { src: "/aid-images/melon-girl.jpg", alt: "Girl with melons" },
    { src: "/aid-images/carver.jpg", alt: "Carver working" },
    { src: "/aid-images/aviation.jpg", alt: "Aviation lady" },
    { src: "/aid-images/desert.jpg", alt: "Desert worker" },
    { src: "/aid-images/unemployed.jpg", alt: "youths smiling" }

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