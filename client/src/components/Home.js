import PropTypes from "prop-types";
import "./Home.css";
import React from "react";
import SuccessStories from "./SuccessStories"
import OurServices from "./OurServices";
import Categories from "./Categories";
import Article from "./Article"
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation

const HeroSection = ({ className = "" }) => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleApplyForJobClick = () => {
    navigate("/Opportunities");  // Navigate to the EmploymentList page
  };

  return (
    <div className="content-wrapper">
      <div className="seeking-financial-aid-or-a-job-parent">
        <div className="seeking-financial-aid">
          Seeking Financial aid or a job opportunity to improve your living standards?
        </div>
        <div className="button-parent">
          <button className="button1" onClick={handleApplyForJobClick}>
            <b className="apply-for-a">APPLY FOR A JOB</b>
            {/* <img className="heart-icon" alt="Heart Icon" src="/heart.svg" /> */}
          </button>
          <button className="button2">
            <b className="request-for-funding">REQUEST FOR FUNDING</b>
          </button>
        </div>
      </div>
      <SuccessStories/>
      <OurServices />
      <Categories />
      <Article/>
    </div>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
