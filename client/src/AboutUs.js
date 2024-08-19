import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AidGallery from './components/AidGallery';
import AboutArticle from './components/AboutArticle';
import axios from 'axios';
import ResponsiveCategories from './components/ResponsiveCategories';
import Footer from './components/Footer';
import ContactDetails from './components/ContactDetails';
import './AboutUs.css'; // Updated import

const AboutUs = () => {
  const [categories, setCategories] = useState([]);

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
        <div className="intro-section">
          <div className="intro-text">
            <h2 className="centralized-heading">Let's create decent work opportunities for all.</h2>
            <p className="typing-text">
              At NextWave, we are committed to transforming lives through sustainable job opportunities and community support.
            </p>
          </div>
          <div className="intro-image">
            <img src="/aid-images/no-job.jpg" alt="NextWave Mission" />
          </div>
        </div>
        <AidGallery />
        <AboutArticle />
        <ContactDetails />
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
