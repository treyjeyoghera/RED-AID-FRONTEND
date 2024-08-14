import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EmploymentList.css";
import NavBar from "./NavBar";

const EmploymentList = () => {
  const [employments, setEmployments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployments();
  }, []);

  const fetchEmployments = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/employments");
      const data = await response.json();
      setEmployments(data);
    } catch (error) {
      console.error("Error fetching employments:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationFilter = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  const handleApply = (employmentId) => {
    navigate(`/applications/${employmentId}`);
  };

  const toggleDescription = (index) => {
    setEmployments((prevEmployments) =>
      prevEmployments.map((employment, i) =>
        i === index
          ? { ...employment, expanded: !employment.expanded }
          : employment
      )
    );
  };

  const filteredEmployments = employments.filter(
    (employment) =>
      employment.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      employment.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="employment-list">
        <div className="filters">
            <input
                type="text"
                placeholder="Search by Job title, Position, Keyword..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <input
                type="text"
                placeholder="City, state or zip code"
                value={locationFilter}
                onChange={handleLocationFilter}
            />
            
            <button className="find-job-button">Find Job</button>
        </div>

        <div className="cards-container">
          {filteredEmployments.length > 0 ? (
            filteredEmployments.slice(0, visibleCount).map((employment, index) => (
              <div className="card" key={employment.id}>
                <h3>{employment.title}</h3>
                <p><strong>Location:</strong> {employment.location}</p>
                <p><strong>Salary Range:</strong> ${employment.salary_range}</p>
                <p className="description">
                  {employment.expanded ? employment.description : `${employment.description.substring(0, 100)}...`}
                  <button onClick={() => toggleDescription(index)} className="show">
                    {employment.expanded ? "Show Less" : "Show More"}
                  </button>
                </p>
                <button onClick={() => handleApply(employment.id)} className="apply-button">Apply Now</button>
              </div>
            ))
          ) : (
            <p>No employments found</p>
          )}
        </div>
        {visibleCount < filteredEmployments.length && (
          <div className="show-more-container">
            <button onClick={handleShowMore} className="show-more-button">Show More</button>
          </div>
        )}
      </div>
    </>
  );
};

export default EmploymentList;
