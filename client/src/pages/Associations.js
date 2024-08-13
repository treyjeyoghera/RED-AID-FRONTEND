import Footer from '../components/Footer'

import React, { useState, useEffect } from 'react';
import './associations.css'; // Import the CSS file
import NavBar from '../components/NavBar';

const Intro = () => {
  return (
    <div className="intro-container">
      <h2>Looking to join a global network of game-changers?</h2>
      <p>Next Wave aims to create an international community that enables the building of secure, just, free, and harmonious societies.</p>
    </div>
  );
};

const Companies = () => {
  const companyNames = [
    "Company A", "Company B", "Company C", "Company D",
    "Company E", "Company F", "Company G", "Company H",
    "Company I", "Company J", "Company K", "Company L",
    "Company I", "Company J", "Company K", "Company L"
  ];

  const imagePaths = [
    "partner-images/deloitte.jpg", "partner-images/EY.png", "partner-images/KPMG.jpg", "partner-images/PwC.png",
    "partner-images/microsoft-company.png", "partner-images/cisco-company.png", "partner-images/oracle-company.jpg", "partner-images/google-company.png",
    "partner-images/GoK.png", "partner-images/assek.jpeg", "partner-images/kncci.png", "partner-images/NiW.jpeg",
    "partner-images/MercyCorps.png", "partner-images/oxfam.png", "partner-images/redcross.png", "partner-images/pngegg.png"
  ];

  return (
    <div className="companies-container">
      <h2>Our Top Partners</h2>
      <div className="grid-container">
        {companyNames.map((name, index) => (
          <div className="company-card" key={index}>
            <img src={imagePaths[index]} alt={`${name} Logo`} />
          </div>
        ))}
      </div>
    </div>
  );
};

// SocialIntegration Component
const SocialIntegration = () => {
  const [associations, setAssociations] = useState([]);
  const [visibleAssociations, setVisibleAssociations] = useState(10);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [joinedAssociations, setJoinedAssociations] = useState(new Set());

  useEffect(() => {
    fetchAssociations();
  }, []);

  const fetchAssociations = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/social_integrations');
      const data = await response.json();
      setAssociations(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching associations:', error);
      setLoading(false);
    }
  };

  const loadMoreAssociations = () => {
    if (visibleAssociations < associations.length) {
      setVisibleAssociations(prev => prev + 10);
    } else {
      setEndReached(true);
    }
  };

  const handleSave = async (id) => {
    // Handle save logic here
    console.log('Saved association with ID:', id);
  };

  const handleNotInterested = (id) => {
    // Handle not interested logic here
    console.log('Not interested in association with ID:', id);
  };

  const handleJoinNow = (id) => {
    // Handle join logic here
    console.log('Joined association with ID:', id);
  };

  return (
    <div className="social-integration-container">
      <h2>Join an Association</h2>
      <p>Explore and join associations that match your interests.</p>

      <div className="associations-list">
        {associations.slice(0, visibleAssociations).map(association => (
          <div className="association-card" key={association.id}>
            <div className="card-image">
            <img src="/partner-images/game changer..png" alt={association.association_name} />
            </div>
            <div className="card-content">
              <h3>{association.association_name}</h3>
              <p>Category: {association.category_id}</p>
              <p>{association.description}</p>
              <div className="card-actions">
                <button onClick={() => handleSave(association.id)}>Save</button>
                <button onClick={() => handleNotInterested(association.id)}>Not Interested</button>
                <button onClick={() => handleJoinNow(association.id)}>Join Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!endReached && (
        <button onClick={loadMoreAssociations} className="load-more-button">
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}

      {endReached && <p>No more associations available.</p>}
    </div>
  );
};

// Main Associations Component
const Associations = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Companies />
      <SocialIntegration />
        <Footer/>
    </div>
  );
};

export default Associations;
