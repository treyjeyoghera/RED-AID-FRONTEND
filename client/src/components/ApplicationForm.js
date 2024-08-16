import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        user_id: '',  // You'll need to get this from your authentication logic or context
        employment_id: '',  // This might come from the job listing the user is applying to
        name: '',
        email: '',
        phone_number: '',
        cover_letter: '',
        resume: '',
        linkedin: '',
        portfolio: '',
        status: 'PENDING',  // Default status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Application submitted successfully!');
                // You can reset the form here if needed
                setFormData({
                    user_id: '',
                    employment_id: '',
                    name: '',
                    email: '',
                    phone_number: '',
                    cover_letter: '',
                    resume: '',
                    linkedin: '',
                    portfolio: '',
                    status: 'Pending',
                });
            } else {
                const error = await response.json();
                alert(`Failed to submit application: ${error.message}`);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('An error occurred while submitting the application.');
        }
    };

    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <h2>Apply for Employment</h2>
            <label>
                ID Number:
                <input
                type="number"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Work Experience:
                <input
                type="number"
                name="employment_id"
                value={formData.employment_id}
                onChange={handleChange}
                required
                />
            </label>

            <label htmlFor="name">Full Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="phone_number">Phone Number</label>
            <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
            />

            <label htmlFor="cover_letter">Cover Letter</label>
            <textarea
                id="cover_letter"
                name="cover_letter"
                value={formData.cover_letter}
                onChange={handleChange}
                required
            />

            <label htmlFor="resume">Resume</label>
            <input
                type="text"
                id="resume"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                required
            />

            <label htmlFor="linkedin">LinkedIn Profile</label>
            <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
            />

            <label htmlFor="portfolio">Portfolio</label>
            <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
            />

            <button type="submit">Submit Application</button>
        </form>
    );
};

export default ApplicationForm;



