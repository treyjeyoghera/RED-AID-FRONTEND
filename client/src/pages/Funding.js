import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './funding.css'; // Import the CSS file
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FundingForm from './FundingForm';

// ProcessSteps Component
const ProcessSteps = () => {
  return (
    <div className="process-container">
      <h2>OUR PROCESS</h2>
      <div className="steps-wrapper">
        <div className="step">
          <div className="icon-wrapper">
            <i className="fas fa-user-plus"></i>
          </div>
          <h3>Create account</h3>
          <p>Sign up and create your account to get started.</p>
        </div>
        <div className="step">
          <div className="icon-wrapper">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3>Upload concept note</h3>
          <p>Provide the required documentation for the application.</p>
        </div>
        <div className="step">
          <div className="icon-wrapper">
            <i className="fas fa-search"></i>
          </div>
          <h3>Find suitable grant</h3>
          <p>Search for the most appropriate grant for your needs.</p>
        </div>
        <div className="step">
          <div className="icon-wrapper">
            <i className="fas fa-hand-holding-usd"></i>
          </div>
          <h3>Apply funding</h3>
          <p>Submit your application for funding.</p>
        </div>
      </div>
    </div>
  );
};

// Grants Component
const FundingComponent = () => {
  const [fundings, setFundings] = useState([]);
  const [selectedFunding, setSelectedFunding] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [savedFundings, setSavedFundings] = useState(new Set());

  useEffect(() => {
    const fetchFundings = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/fundings');
        setFundings(response.data);
      } catch (error) {
        console.error('Error fetching fundings:', error);
      }
    };

    fetchFundings();
  }, []);

  const handleFundingClick = (funding) => {
    setSelectedFunding(funding);
  };

  const handleCloseDetails = () => {
    setSelectedFunding(null);
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveToggle = (fundingId) => {
    setSavedFundings(prevSavedFundings => {
      const updatedSavedFundings = new Set(prevSavedFundings);
      if (updatedSavedFundings.has(fundingId)) {
        updatedSavedFundings.delete(fundingId);
      } else {
        updatedSavedFundings.add(fundingId);
      }
      return updatedSavedFundings;
    });
  };

  return (
    <div className="funding-container">
      <div className="funding-list">
        {fundings.map((funding) => (
          <div
            key={funding.id}
            className="funding-card"
            onClick={() => handleFundingClick(funding)}
          >
            <img
            src={"/grant-images/Institutional-strengthening-of-Indigenous-Afro-Descendant-and-Traditional-Peoples-organizations_Social_Share.webp"}
            alt={funding.grant_name}
            className="funding-image"
            />
            <h3>{funding.grant_name}</h3>
            <p><strong>Category ID:</strong> {funding.category_id}</p>
            <p><strong>Amount:</strong> ${funding.amount}</p>
          </div>
        ))}
      </div>

      <div className="funding-details sticky-card">
        {selectedFunding ? (
          <div className="details-card">
            <button className="close-button" onClick={handleCloseDetails}>×</button>
            <h2>{selectedFunding.grant_name}</h2>
            <p><strong>Category ID:</strong> {selectedFunding.category_id}</p>
            <p><strong>Amount:</strong> ${selectedFunding.amount}</p>
            <p><strong>Description:</strong> {selectedFunding.description}</p>
            <p><strong>Eligibility Criteria:</strong> {selectedFunding.eligibility_criteria}</p>
            <div style={{ marginTop: '20px' }}>
              <button onClick={handleOpenForm} className="apply-button">Apply for Funding</button>
              {showForm && <FundingForm onClose={handleCloseForm} />}
              <button
                onClick={() => handleSaveToggle(selectedFunding.id)}
                className={savedFundings.has(selectedFunding.id) ? 'saved' : 'save-for-later'}
              >
                {savedFundings.has(selectedFunding.id) ? 'Saved' : 'Save for Later'}
              </button>
            </div>
          </div>
        ) : (
          <p>Please select a grant to see details.</p>
        )}
      </div>
    </div>
  );
};

// What We Offer component
const WhatWeOffer = ({ onGetStarted }) => {
  return (
    <div className="what-we-offer-container">
      <div className="video-container">
        <video autoPlay loop muted className="offer-video">
          <source src="/partner-images/next wave video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        <h2>APPLY WITH NEXT WAVE</h2>
        <h1>Access and apply for business or social aid grants with Next Wave</h1>
        <div className="offer-options">
          <div className="offer-option">
            <h3>Starting a new business and need to secure funding?</h3>
            <p>Find grants and financial support easily with our app. We connect you to potential funders to help turn your vision into reality.</p>
          </div>
          <div className="offer-option">
            <h3>Discover life-changing support.</h3>
            <p>Facing challenges? Our app connects you to vital social aid funding. Find assistance for housing, healthcare, education, and more. Empower yourself with the support you deserve.</p>
          </div>
        </div>
        <button className="get-started-btn" onClick={onGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

// Main Funding Component
const Funding = () => {
  const fundingRef = useRef(null);

  const handleGetStarted = () => {
    if (fundingRef.current) {
      fundingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="funding-page">
      <NavBar />
      <WhatWeOffer onGetStarted={handleGetStarted} />
      <ProcessSteps />
      <div ref={fundingRef}>
        <FundingComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Funding;