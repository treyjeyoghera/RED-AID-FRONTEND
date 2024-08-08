import React, { useState, useEffect } from "react";
import "./EmploymentList.css";

const EmploymentList = () => {
  const [employments, setEmployments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

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

  const filteredEmployments = employments.filter(
    (employment) =>
      employment.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      employment.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <div className="employment-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={handleLocationFilter}
        />
      </div>
      <div className="cards-container">
        {filteredEmployments.length > 0 ? (
          filteredEmployments.slice(0, visibleCount).map((employment) => (
            <div className="card" key={employment.id}>
              <h3>{employment.title}</h3>
              <p>{employment.description}</p>
              <p><strong>Location:</strong> {employment.location}</p>
              <p><strong>Salary Range:</strong> ${employment.salary_range}</p>
              <button>Apply Now</button>
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
  );
};

export default EmploymentList;
