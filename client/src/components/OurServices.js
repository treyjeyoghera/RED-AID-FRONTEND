import React from "react";
import "./OurServices.css";
import PropTypes from "prop-types";
import ServiceCardDefault from "./ServiceCardDefault";

const OurServices = ({ className = "" }) => {
  return (
    <div className={`page-wrapper ${className}`}>
      <div className="our-services">
        <div className="service-carddefault-parent">
          <ServiceCardDefault
            request="/request.svg"
            applyForFunding="Apply for funding"
            button="Request"
          />
          <ServiceCardDefault
            propBackgroundColor="rgba(250, 222, 123, 0.2)"
            request="/request1.svg"
            applyForFunding="Apply for a job opportunity"
            button="Apply"
            propMinWidth="unset"
          />
          <ServiceCardDefault
            propBackgroundColor="rgba(1, 235, 250, 0.2)"
            request="/request2.svg"
            applyForFunding="Join an association"
            button="Consult"
            propMinWidth="unset"
          />
        </div>
        <div className="frame-parent7">
          <div className="our-services-wrapper">
            <div className="our-services1">Our Services</div>
          </div>
          <div className="get-our-free">Get our Free Services</div>
        </div>
      </div>
    </div>
  );
};

OurServices.propTypes = {
  className: PropTypes.string,
};

export default OurServices;
