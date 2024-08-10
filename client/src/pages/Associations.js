import React from 'react'
import './associations.css'; // Import the CSS file
import NavBar from '../components/NavBar'


//const Associations = () => {
  //return (
    //<div>
      //  <NavBar />
        //Associations
    //</div>
  //)
//}

// Intro Component
const Intro = () => {
  return (
    <div className="intro-container">
      <h2>Looking to join a global network of game-changers?</h2>
      <p> Next Wave aims to create an international community that enables the building of secure, just, free and harmonious societies.</p>
    </div>
  );
};

// Companies Component
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

// UI/UX Booster Component
const SocialIntegration = () => {
  return (
    <div className="uiux-container">
      <h2>Here are some associations you can join</h2>
      <p>Life is more fun when you live in the moment. Join a network of future shapers today!</p>
      <button className="booster-button">Join Now</button>
    </div>
  );
};

// Main Partners Component
const Associations = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Companies />
      <SocialIntegration />
    </div>
  );
};

export default Associations