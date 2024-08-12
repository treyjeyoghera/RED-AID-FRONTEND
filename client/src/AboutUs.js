import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AidGallery from './components/AidGallery';
import AboutArticle from './components/AboutArticle';
import axios from 'axios';
import ResponsiveCategories from './components/ResponsiveCategories';
import Footer from './components/Footer';
import ContactDetails from './components/ContactDetails';

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
      <div className="content-container">
        <h2 className="centralized-heading">Let's create decent work opportunities for all.</h2>
        <p className="intro-paragraph">
          At NextWave, we are committed to transforming lives through sustainable job opportunities and community support.
        </p>
        <AidGallery />
        <AboutArticle />
        {/* Uncomment and adjust the code if you want to use ResponsiveCategories */}
        {/* <div>
          {categories.length > 0 ? (
            <ResponsiveCategories categories={categories} />
          ) : (
            <p>Loading categories...</p>
          )}
        </div> */}
        <ContactDetails />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
