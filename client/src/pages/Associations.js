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
    "Company I", "Company J", "Company K", "Company L"
  ];

  return (
    <div className="companies-container">
      <h2>Our Top Partners</h2>
      <div className="grid-container">
        {companyNames.map((name, index) => (
          <div className="company-card" key={index}>
            <h3>{name}</h3>
            {/* Will add logos or additional information here */}
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
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const [joinedAssociations, setJoinedAssociations] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/social_integrations')
      .then(response => response.json())
      .then(data => setAssociations(data))
      .catch(error => console.error('Error fetching associations:', error));
  }, []);

  const showMoreAssociations = () => {
    setVisibleAssociations(prev => prev + 10);
  };

  const handleSelectAssociation = (association) => {
    setSelectedAssociation(association);
  };

  const toggleJoin = () => {
    if (joinedAssociations.includes(selectedAssociation.id)) {
      setJoinedAssociations(joinedAssociations.filter(id => id !== selectedAssociation.id));
    } else {
      setJoinedAssociations([...joinedAssociations, selectedAssociation.id]);
    }
  };

  return (
    <div className="uiux-container">
      <h2>Here are some associations you can join</h2>
      <p>Life is more fun when you live in the moment. Join a network of future shapers today!</p>

      <div className="associations-list">
        {associations.slice(0, visibleAssociations).map((association, index) => (
          <div 
            key={index} 
            className="association-card" 
            onClick={() => handleSelectAssociation(association)}
          >
            <h3>{association.name}</h3>
          </div>
        ))}
      </div>

      {visibleAssociations < associations.length && (
        <button className="browse-more-button" onClick={showMoreAssociations}>
          Browse More
        </button>
      )}

      {selectedAssociation && (
        <div className="association-details">
          <h3>{selectedAssociation.name}</h3>
          <p>Category: {selectedAssociation.category}</p>
          <p>{selectedAssociation.description}</p>
          <button 
            className="join-button" 
            onClick={toggleJoin}
          >
            {joinedAssociations.includes(selectedAssociation.id) ? 'Leave' : 'Join Now'}
          </button>
          <button className="save-button">Save</button>
        </div>
      )}
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
