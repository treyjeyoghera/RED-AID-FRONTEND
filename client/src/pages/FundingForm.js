// src/pages/FundingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './fundingform.css';

const FundingForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        user_id: '',
        funding_id: '',
        status: 'APPLIED',
        application_type: 'SOCIAL_AID',
        supporting_documents: '',
        household_income: '',
        number_of_dependents: '',
        reason_for_aid: '',
        concept_note: '',
        business_profile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/funding_applications', formData);
            if (response.status === 201) {
                alert('Application submitted successfully!');
                onClose(); // Close the form on successful submission
            } else {
                alert('Unexpected response from server.');
            }
        } catch (error) {
            console.error('Error submitting the application:', error);
            alert('Error submitting the application.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Funding Application</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        ID NUMBER:
                        <input
                            type="number"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        AGE:
                        <input
                            type="number"
                            name="funding_id"
                            value={formData.funding_id}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Application Type:
                        <select
                            name="application_type"
                            value={formData.application_type}
                            onChange={handleChange}
                        >
                            <option value="SOCIAL_AID">Social Aid</option>
                            <option value="BUSINESS">Business</option>
                        </select>
                    </label>
                    {formData.application_type === 'SOCIAL_AID' && (
                        <>
                            <label>
                                Household Income:
                                <input
                                    type="number"
                                    name="household_income"
                                    value={formData.household_income}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Number of Dependents:
                                <input
                                    type="number"
                                    name="number_of_dependents"
                                    value={formData.number_of_dependents}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Reason for Aid:
                                <textarea
                                    name="reason_for_aid"
                                    value={formData.reason_for_aid}
                                    onChange={handleChange}
                                />
                            </label>
                        </>
                    )}
                    {formData.application_type === 'BUSINESS' && (
                        <>
                            <label>
                                Concept Note:
                                <textarea
                                    name="concept_note"
                                    value={formData.concept_note}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Business Profile:
                                <textarea
                                    name="business_profile"
                                    value={formData.business_profile}
                                    onChange={handleChange}
                                />
                            </label>
                        </>
                    )}
                    <label>
                        Supporting Documents:
                        <input
                            type="text"
                            name="supporting_documents"
                            value={formData.supporting_documents}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FundingForm;