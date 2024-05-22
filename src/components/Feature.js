import React from "react";
import "../styles/Feature.css";

const Feature = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="feature-item">
      <div className="circle">
        <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      </div>
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
