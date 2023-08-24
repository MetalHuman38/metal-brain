import React from "react";
import "./Footer.scss";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="metal__footer section__padding">
      <div className="metal__footer-heading">
        <h1 className="gradient-text">
          Do you desire to embrace tomorrow ahead of the crowd.
        </h1>
      </div>
      <div className="metal__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="metal__footer-links">
        <div className="metal__footer-links_logo">
          <a href="#AboutMe" className="metal__footer-anchor">
            MetalBrain
          </a>
          <p>Merton Road, South Wimbledon, London. SW19 1EQ</p>
        </div>
        <div className="metal__footer-links_div">
          <h4>Links</h4>
          <p>social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="metal__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="metal__footer-links_div">
          <h4>Get in touch</h4>
          <p>Merton Road, South Wimbledon, London. SW19 1EQ</p>
          <p>07555204795</p>
          <p>babsdev@metalbrain.net</p>
        </div>
      </div>
      <div className="metal__footer-copyright">
        <p>&copy; {currentYear} MetalBrain Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
