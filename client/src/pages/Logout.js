// src/pages/LogoutButton.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext'; // Import AuthContext

const Logout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // Use AuthContext to update login status

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials to handle session
      });
      if (response.ok) {
        alert('Logged out successfully');
        setIsLoggedIn(false); // Update login status
        navigate('/login');  // Redirect to the login page
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
