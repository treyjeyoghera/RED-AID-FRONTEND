import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 Nextwave Blvd</p>
                    <p>Poverty City, HC 12345</p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>
                </div>
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>info@nextwave.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
