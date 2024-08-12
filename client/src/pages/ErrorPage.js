import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Import the CSS file for styling

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h3 className="error-title">404 NOT FOUND</h3>
        <p className="error-message">Oops! The page you are looking for does not exist.</p>
        <Link to='/' className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
