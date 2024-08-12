import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AidGallery from './components/AidGallery';
import AboutArticle from './components/AboutArticle';
import axios from 'axios';
import ResponsiveCategories from './components/ResponsiveCategories';
import Footer from './components/Footer';

const AboutUs = () => {
  const [categories, setCategories] = useState([]);  // Initialize categories state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Let's create decent work opportunities for all.</h2>
      <AidGallery />
      <AboutArticle />
      <div>
        
        {categories.length > 0 ? (
          <ResponsiveCategories categories={categories} />
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
