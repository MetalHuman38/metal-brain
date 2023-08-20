import React from "react";
import "./Features.scss";
import { Feature } from "../../components";

const FeaturesData = [
  {
    title: "Empowering Digital Evolution.",
    text: "As a cutting-edge tech startup, we harness the power of innovation to elevate businesses into the digital age. With our expertise, your journey towards a tech-driven future starts today",
  },
  {
    title: "Tomorrow's Solutions Become Today's Reality",
    text: "We bridge the gap between visionary concepts and tangible results. With our cutting-edge expertise, we transform futuristic ideas into present-day triumphs.",
  },
  {
    title: "Code. Disrupt. Transform",
    text: "Code isn't just lines, it's a catalyst for disruption and transformation. As a pioneering tech startup, we're rewriting the rules of technology. Get ready to code your ideas into a new era of innovation.",
  },
  {
    title: "Crafting Future-Proof Code Innovations",
    text: "We transcend the present by engineering solutions that stand the test of time. Our software mastery paves the way for a tech-driven future that's as solid as it is innovative. Your digital evolution starts here.",
  },
];

const Features = () => {
  return (
    <div className="metal__features section__padding" id="Features">
      <div className="metal__features-heading">
        <h1 className="gradient-text">
          Embracing the Future: Where Tomorrow's Solutions Become Today's
          Reality.
        </h1>
        <p>Request Early Access to get started</p>
      </div>
      <div className="metal__features-container">
        {FeaturesData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
