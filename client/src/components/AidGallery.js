import React from 'react';
import '../AboutUs.css';

const images = [
    { src: "/aid-images/mom-farmer.jpg", alt: "Mother farmer" },
    { src: "/aid-images/melon-girl.jpg", alt: "Girl with melons" },
    { src: "/aid-images/carver.jpg", alt: "Carver working" },
    { src: "/aid-images/aviation.jpg", alt: "Aviation lady" },
    { src: "/aid-images/desert.jpg", alt: "Desert worker" },
    { src: "/aid-images/chess.jpg", alt: "Youth playing chess" },
    { src: "/aid-images/site.jpg", alt: "Youth at construction site" },
    { src: "/aid-images/unemployed.jpg", alt: "Youth smiling" }
];

const AidGallery = () => {
  return (
    <div className="aid-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-image-container">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="gallery-image"
          />
          <div className="caption-overlay">
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AidGallery;
