/* import React, { useState } from 'react';
//import './ResponsiveCategories.css';

const ResponsiveCategories = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="responsive-categories-container">
      <h2>Categories</h2>
      <div className="category-card">
        <h3>{categories[currentIndex].name}</h3>
        <p>{categories[currentIndex].description}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={prevCategory}>Previous</button>
        <button onClick={nextCategory}>Next</button>
      </div>
    </div>
  );
};

export default ResponsiveCategories;
 */