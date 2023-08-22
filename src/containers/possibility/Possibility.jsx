import React from "react";
import "./Possibility.scss";

import possibility from "../img/possibility.png";

const Possibility = () => {
  return (
    <div className="metal__possibility section__padding" id="Possibility">
      <div className="metal__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="metal__possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className="gradient-text">
          The Possibilities are beyond our imagination.
        </h1>
        <p>
          Embrace a World of Endless Potential: By Joining Us, You Enter a Realm
          Where Unlimited Possibilities Await Your Exploration and Creativity to
          Flourish.
        </p>
        <h4>Request Early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
