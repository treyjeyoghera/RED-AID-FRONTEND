import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const { employmentId } = useParams();
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationData = {
      user_id: 1,  // Static user ID for now; replace with dynamic ID if needed
      employment_id: employmentId,
      status: "Pending",
      resume,
      cover_letter: coverLetter,
      email,
      linkedIn
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationData)
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        navigate("/employments");
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="application-form">
      <h2>Apply for Employment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Resume:
          <input
            type="text"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Enter your resume link"
            required
          />
        </label>
        <label>
          Cover Letter:
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Enter your cover letter"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          LinkedIn Profile:
          <input
            type="url"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            placeholder="Enter your LinkedIn profile URL"
            required
          />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
