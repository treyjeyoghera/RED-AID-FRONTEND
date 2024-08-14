import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './funding.css'; // Import the CSS file
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


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
    </div>
  );
};
// Grants Component
const FundingComponent = () => {
  const [fundings, setFundings] = useState([]);
  const [selectedFunding, setSelectedFunding] = useState(null);

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

  return (
    <div className="funding-container">
      <div className="funding-list">
        {fundings.map((funding) => (
          <div
            key={funding.id}
            className="funding-card"
            onClick={() => handleFundingClick(funding)}
          >
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
              <button>Apply Now</button>
              <button>Save for Later</button>
            </div>
          </div>
        ) : (
          <p>Please select a grant to see details.</p>
        )}
      </div>
    </div>
  );
};

// Main Funding Component
const Funding = () => {
  return (
    <div>
      <NavBar />
      <CallToAction />
      <FundingComponent />
      <PopularCategory />
      <ProcessSteps />
      <Footer/>
    </div>
  );
};

export default Funding