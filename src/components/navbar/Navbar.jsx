import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.scss";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#Home">What is Metal-Brain</a>
    </p>
    <p>
      <a href="#Home">Services</a>
    </p>
    <p>
      <a href="#Home">Projects</a>
    </p>
    <p>
      <a href="#Home">Blog</a>
    </p>
    <p>
      <a href="#Home">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="metal">
      <div className="metal__navbar-links">
        <div className="metal__navbar-links_logo">
          <a href="#AboutMe" className="metal__navbar-anchor">
            MetalBrain
          </a>
        </div>
        <div className="metal__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="metal__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="metal__navbar-menu_container scale-up-center">
            <div className="metal__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
