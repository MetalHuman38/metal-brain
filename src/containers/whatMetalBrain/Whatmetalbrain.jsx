import React from "react";
import { Feature } from "../../components";
import "./Whatmetalbrain.scss";

const Whatmetalbrain = () => {
  return (
    <div className="metal__whatMetalbrain section__margin" id="Whatmetalbrain">
      <div className="metal__whatMetalbrain-feature">
        <Feature
          title="What is MetalBrain"
          text="MetalBrain is your gateway to unparalleled software engineering excellence. With a dedication to crafting elegant solutions,We pride ourselves on delivering efficient, reliable, and scalable solutions that propel your business forward. At Metal-Brain, we don't just code; we architect solutions that stand the test of time."
        />
      </div>
      <div className="metal__whatMetalbrain-heading">
        <h1 className="gradient-text">
          Catalyzing Innovation, Forging Solutions: MetalBrain's Journey to
          transforming ideas into Reality.
        </h1>
        <p>Explore More Now</p>
      </div>
      <div className="metal__whatMetalbrain-container ">
        <Feature
          title="Ambition"
          text="Our team of adept software engineers seamlessly integrates with your projects, whether you're aiming to develop cutting-edge applications, enhance existing software systems, or conquer complex technical obstacles, Metal-Brain is your trusted partner."
        />
        <Feature
          title="Collaboration"
          text="We understand that every technical challenge is unique, which is why our approach is built on collaboration."
        />
        <Feature
          title="What to expect"
          text="Experience the power of a synergy between your vision and our technical prowess. Choose Metal-Brain for software engineering services that transcend expectations and lead to transformative outcomes. Together, we forge a path to success in the digital realm."
        />
      </div>
    </div>
  );
};

export default Whatmetalbrain;
