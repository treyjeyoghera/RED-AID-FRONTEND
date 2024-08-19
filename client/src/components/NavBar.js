import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm'; 
import '../App.css';
import { AuthContext } from './AuthContext'; // Import AuthContext
import Logout from '../pages/Logout';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Use AuthContext
    const [showDonationForm, setShowDonationForm] = useState(false);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            // Fetch user_id from server
            const fetchUserId = async () => {
                try {
                    const response = await fetch('http://localhost:5000/get_user_id', {
                        method: 'GET',
                        credentials: 'include',
                    });
                    const result = await response.json();
                    if (result.user_id) {
                        setUserId(result.user_id);
                    }
                } catch (error) {
                    console.error('Error fetching user ID:', error);
                }
            };

            fetchUserId();
        }
    }, [isLoggedIn]);

    const handleLoginClick = () => {
        navigate('/Signup');
    };

    const handleDonateClick = () => {
        setShowDonationForm(true);
    };

    const handleCloseDonationForm = () => {
        setShowDonationForm(false);
    };

    return (
        <header className='header'>
            <nav className='nav'>
                <div className="logo-container">
                    <img src="/logo.png" alt="logo" className='logo-img' />
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'><Link to='/Home' className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to='/' className='nav-link'>About us</Link></li>
                    <li className='nav-item'>
                        <span className='nav-link'>Services</span>
                        <div className="dropdown-content">
                            <Link to='/opportunities' className='dropdown-item'>Opportunities</Link>
                            <Link to='/associations' className='dropdown-item'>Associations</Link>
                            <Link to='/funding' className='dropdown-item'>Funding</Link>
                        </div>
                    </li>
                </ul>
                <div className="button-group">
                    {isLoggedIn ? (
                        <>
                            {userId && (
                                <Link to={`/user-profile/${userId}`} className="user-profile-icon">
                                    <FaUserCircle size={24} color="#333" />
                                </Link>
                            )}
                            <Logout />
                        </>
                    ) : (
                        <button className='login-btn' onClick={handleLoginClick}>Join Us</button>
                    )}
                    <button className="donate-btn" onClick={handleDonateClick}>Donate</button>
                </div>
            </nav>
            {showDonationForm && <DonationForm onClose={handleCloseDonationForm} />}
        </header>
    );
};

export default NavBar;
