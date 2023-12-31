import React from "react";
import "./Feature.scss";

const Feature = ({ title, text }) => {
  return (
    <div className="metal__features-container__feature">
      <div className="metal__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="metal__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
