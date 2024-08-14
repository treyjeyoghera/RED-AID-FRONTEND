import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm'; 
import '../App.css';

const NavBar = () => {
    const [showDonationForm, setShowDonationForm] = useState(false);
    const navigate = useNavigate();

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
                <div className="logo">Nextwave</div>
                <ul className='nav-list'>
                    <li className='nav-item'><Link to='/Home' className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to='/partners' className='nav-link'>Partners</Link></li>
                    <li className='nav-item'><Link to='/' className='nav-link'>About us</Link></li>
                    <li className='nav-item'>
                        <Link className='nav-link'>Services</Link>
                        <div className="dropdown-content">
                            <Link to='/opportunities' className='dropdown-item'>Opportunities</Link>
                            <Link to='/associations' className='dropdown-item'>Associations</Link>
                            <Link to='/funding' className='dropdown-item'>Funding</Link>
                        </div>
                    </li>
                    <li className='nav-item'><Link to='/Signup' className='nav-link'>Signup</Link></li>
                </ul>
                <div className="button-group">
                    <button className='login-btn' onClick={handleLoginClick}>Log in</button>
                    <button className="donate-btn" onClick={handleDonateClick}>Donate</button>
                </div>
            </nav>
            {showDonationForm && <DonationForm onClose={handleCloseDonationForm} />}
        </header>
    );
};

export default NavBar;
