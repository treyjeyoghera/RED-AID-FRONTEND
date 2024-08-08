import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import './profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate a user data fetch
        // Replace this with actual data fetching logic if needed
        setLoading(false);
      } catch (error) {
        setError('Failed to load user data.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <h2>Loading user profile...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!user) {
    return <h2>Please log in to view your profile.</h2>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <img 
          src={user.profile_picture} 
          alt="Profile"
          className="profile-picture" 
        />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <button onClick={logout} className="btn logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
