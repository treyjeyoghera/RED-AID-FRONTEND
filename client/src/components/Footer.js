import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={sectionStyle}>
                    <h4>Nexwave</h4>
                    <p>.</p>
                </div>
                <div style={sectionStyle}>
                    <h4>Quick Links</h4>
                    <ul style={listStyle}>
                        <li><a href="/about-us" style={linkStyle}>About Us</a></li>
                        <li><a href="/contact" style={linkStyle}>Contact</a></li>
                        <li><a href="/terms" style={linkStyle}>Terms of Service</a></li>
                        <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div style={sectionStyle}>
                    <h4>Contact Us</h4>
                    <p>Email: support@nextwave.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div style={copyRightStyle}>
                <p>&copy; {new Date().getFullYear()} Nexwave. All rights reserved.</p>
            </div>
        </footer>
    );
};

// Basic Styles
const footerStyle = {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px 0',
    textAlign: 'center',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
};

const sectionStyle = {
    margin: '10px 0',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const linkStyle = {
    color: '#ecf0f1',
    textDecoration: 'none',
};

const copyRightStyle = {
    marginTop: '20px',
};

export default Footer;
