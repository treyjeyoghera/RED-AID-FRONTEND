import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ServiceCardDefault.css";

const ServiceCardDefault = ({
  className = "",
  propBackgroundColor,
  request,
  applyForFunding,
  propPadding,
  button,
  propMinWidth,
}) => {
  const iconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buttonStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`service-carddefault ${className}`}>
      <div className="frame-parent5">
        <div className="icon-wrapper">
          <div className="icon" style={iconStyle}>
            <img className="request-icon" alt="" src= "/aid-images/Grants2 (1).png" />
          </div>
        </div>
        <div className="frame-wrapper8">
          <div className="frame-parent6">
            <div className="apply-for-funding-wrapper">
              <div className="apply-for-funding">{applyForFunding}</div>
            </div>
            <div className="content7">Content</div>
          </div>
        </div>
      </div>
      <div className="apply-for-funding-wrapper">
        <div className="frame-child" />
      </div>
      <div className="button20">
        <b className="button21" style={buttonStyle}>
          {button}
        </b>
        {/* <img className="frame-icon6" alt="" src="" /> */}
      </div>
    </div>
  );
};

ServiceCardDefault.propTypes = {
  className: PropTypes.string,
  request: PropTypes.string,
  applyForFunding: PropTypes.string,
  button: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ServiceCardDefault;
