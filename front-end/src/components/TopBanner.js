import React from "react";

const TopBanner = () => {
  return (
    <div className="top-banner-container">
      <div className="top-banner-left">
        <i className="top-banner-phone-icon fas fa-phone fa-lg"></i>
        <div className="top-banner-left-text-continer">
          <span className="top-banner-left-text">Call & Order</span>
          <span className="top-banner-phone-number">0 (123) 456 7890</span>
        </div>
      </div>
      <div className="top-banner-center">
        <span className="top-banner-center-text">
          Free delivery for orders over $20!
        </span>
      </div>
      <div className="top-banner-right">
        <span className="top-banner-right-shopping-card">
          <i className="fas fa-shopping-cart fa-lg"></i>
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
