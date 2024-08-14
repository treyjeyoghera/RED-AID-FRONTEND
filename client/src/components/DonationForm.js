import React, { useState } from 'react';
import './DonationForm.css';

const DonationForm = ({ onClose }) => {
    const url = "http://127.0.0.1:5000";
    const [donationType, setDonationType] = useState('Individual');
    const [name, setName] = useState('');
    const [organisationName, setOrganisationName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const donationData = {
            donation_type: donationType,
            name: donationType === 'Individual' ? name : '',
            organisation_name: donationType === 'Organisation' ? organisationName : '',
            amount: parseFloat(amount),
            payment_method: paymentMethod,
        };

        try {
            const response = await fetch(`${url}/donations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donationData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Donation successful:', data);
                setSuccessMessage('Thank you! Your donation was successful.');

                setTimeout(() => {
                    setSuccessMessage('');
                    onClose();
                }, 3000);
            } else {
                console.error('Error making donation:', response.statusText);
            }
        } catch (error) {
            console.error('Error making donation:', error);
        }
    };

    return (
        <div className="donation-form-overlay">
            <div className="donation-form-container">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Make a Donation</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <form onSubmit={handleSubmit} className="donation-form">
                    <div className="form-group">
                        <label>Donation Type:</label>
                        <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
                            <option value="Individual">Individual</option>
                            <option value="Organisation">Organisation</option>
                        </select>
                    </div>

                    {donationType === 'Individual' ? (
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
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="MPESA">MPESA</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">Donate</button>
                </form>
            </div>
        </div>
    );
};

export default DonationForm;
