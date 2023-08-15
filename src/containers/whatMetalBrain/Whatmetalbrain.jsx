import React from "react";
import "./Whatmetalbrain.scss";
import { Feature } from "../../components";

const Whatmetalbrain = () => {
  return (
    <div className="metal__whatMetalbrain section__margin" id="Whatmetalbrain">
      <div className="metal__whatMetalbrain-feature">
        <Feature />
      </div>
      <div className="metal__whatMetalbrain-heading">
        <h1 className="gradient__text">
          Catalyzing Innovation, Forging Solutions: MetalBrain's Journey to
          Transforming Ideas into Reality.
        </h1>
        <p>Explore More Now</p>
      </div>
      <div className="metal__whatMetalbrain-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Whatmetalbrain;
