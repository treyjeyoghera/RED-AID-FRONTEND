import React from 'react'
import './funding.css'; // Import the CSS file
import NavBar from '../components/NavBar'


//const Funding = () => {
  //return (
    //<div>
      //  <NavBar />
        //Funding
    //</div>
  //)
//}

// ProcessSteps Component
const ProcessSteps = () => {
  return (
    <div className="process-container">
      <h2>Our Process</h2>
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

// PopularCategory Component
const PopularCategory = () => {
  return (
    <div className="category-container">
      <h2>Popular category</h2>
      <a href="#" className="view-all">View All</a>
      <div className="categories-wrapper">
        <div className="category">
          <h3>Graphic & Design</h3>
        </div>
        <div className="category">
          <h3>Code & Programming</h3>
        </div>
        <div className="category">
          <h3>Digital Marketing</h3>
        </div>
        <div className="category">
          <h3>Video & Animation</h3>
        </div>
        <div className="category">
          <h3>Music & Audio</h3>
        </div>
        <div className="category">
          <h3>Account & Finance</h3>
        </div>
        <div className="category">
          <h3>Health & Care</h3>
        </div>
        <div className="category">
          <h3>Data & Science</h3>
        </div>
      </div>
    </div>
  );
};

// CallToAction Component
const CallToAction = () => {
  return (
    <div className="cta-container">
      <h2>Starting a new business and need to secure funding?</h2>
      <p>
        Apply now to kick-start your business and turn your dreams into reality.
      </p>
      <button className="cta-button">Apply</button>
    </div>
  );
};

// Main Funding Component
const Funding = () => {
  return (
    <div>
      <NavBar />
      <CallToAction />
      <PopularCategory />
      <ProcessSteps />
    </div>
  );
};

export default Funding