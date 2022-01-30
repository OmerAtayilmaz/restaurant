import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <span className="navbar-logo">P</span>
        <span className="navbar-brand">Pizza</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="navbar-menu-item">Home</li>
          <li className="navbar-menu-item">Menu</li>
          <li className="navbar-menu-item">About</li>
          <li className="navbar-menu-item">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
