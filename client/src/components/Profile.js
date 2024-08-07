import React from 'react';
import { useAuth } from './AuthProvider';

const Profile = () => {
  const { user, logout } = useAuth();

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
