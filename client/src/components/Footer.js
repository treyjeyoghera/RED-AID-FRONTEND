import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <img src="/logo.png" alt="NextWave Logo" style={logoStyle} /> {/* Add Logo */}
                    <h4 style={headingStyle}>NextWave</h4>
                    <div style={socialIconsStyle}>
                        <a href="https://www.facebook.com/nextwave" style={iconLinkStyle}><FaFacebook /></a>
                        <a href="https://www.linkedin.com/company/nextwave" style={iconLinkStyle}><FaLinkedin /></a>
                        <a href="https://twitter.com/nextwave" style={iconLinkStyle}><FaTwitter /></a>
                    </div>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Quick Links</h4>
                    <ul style={listStyle}>
                        <li><a href="/about-us" style={linkStyle}>About Us</a></li>
                        <li><a href="/contact" style={linkStyle}>Contact</a></li>
                        <li><a href="/terms" style={linkStyle}>Terms of Service</a></li>
                        <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Contact Us</h4>
                    <p>Email: <a href="mailto:support@nextwave.com" style={linkStyle}>support@nextwave.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" style={linkStyle}>+123 456 7890</a></p>
                </div>
            </div>
            <div style={copyRightStyle}>
                <p>&copy; {new Date().getFullYear()} NextWave. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Basic Styles
const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '0px',
    textAlign: 'center',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 15px', // Padding for better spacing on smaller screens
};

const sectionStyle = {
    margin: '10px 0',
    flex: '1 1 250px', // Ensures sections take up equal width, with a minimum width of 250px
    textAlign: 'center', // Center content in smaller screens
};

const headingStyle = {
    fontSize: '18px',
    marginBottom: '10px',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
};

const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
    display: 'block',
    margin: '5px 0',
};

const logoStyle = {
    maxWidth: '100px',
    marginBottom: '10px',
};

const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
};

const iconLinkStyle = {
    color: '#ecf0f1',
    fontSize: '24px',
    margin: '0 10px',
};

const copyRightStyle = {
    marginTop: '20px',
};

export default Footer;
