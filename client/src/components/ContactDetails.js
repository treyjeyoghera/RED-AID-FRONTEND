import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons
import './ContactDetails.css';

const ContactDetails = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <h3><FaMapMarkerAlt /> Address</h3>
                    <p>123 Nextwave Blvd</p>
                    <p>Poverty City, HC 12345</p>
                </div>
                <div className="contact-item">
                    <h3><FaPhoneAlt /> Phone</h3>
                    <p>(123) 456-7890</p>
                </div>
                <div className="contact-item">
                    <h3><FaEnvelope /> Email</h3>
                    <p>info@nextwave.com</p>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
