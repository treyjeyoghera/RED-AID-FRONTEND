import React, { useState } from 'react';
import './DonationForm.css'; 

const DonationForm = ({ onSubmit, onClose }) => {
    const [donationType, setDonationType] = useState('INDIVIDUAL');
    const [name, setName] = useState('');
    const [organisationName, setOrganisationName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('CREDIT_CARD');

    const handleSubmit = (e) => {
        e.preventDefault();

        const donationData = {
            donation_type: donationType,
            name,
            organisation_name: organisationName,
            amount: parseFloat(amount),
            payment_method: paymentMethod,
        };

        onSubmit(donationData);
    };

    return (
        <div className="donation-form-overlay">
            <div className="donation-form-container">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Make a Donation</h2>
                <form onSubmit={handleSubmit} className="donation-form">
                    <div className="form-group">
                        <label>Donation Type:</label>
                        <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
                            <option value="INDIVIDUAL">Individual</option>
                            <option value="ORGANISATION">Organisation</option>
                        </select>
                    </div>

                    {donationType === 'INDIVIDUAL' ? (
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label>Organisation Name:</label>
                            <input
                                type="text"
                                value={organisationName}
                                onChange={(e) => setOrganisationName(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Payment Method:</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="CREDIT_CARD">Credit Card</option>
                            <option value="BANK_TRANSFER">Bank Transfer</option>
                            <option value="PAYPAL">PayPal</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">Donate</button>
                </form>
            </div>
        </div>
    );
};

export default DonationForm;
