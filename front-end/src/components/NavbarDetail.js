import React from "react";

const NavbarDetail = () => {
  return (
    <div className="navbar-menu-detail">
      <div className="navbar-menu-detail-content-1">
        <h3 className="navbar-menu-detail-header">Size of Pizza</h3>
        <hr />
        <ul className="navbar-menu-detail-1">
          <li className="navbar-menu-detail-item-1">Mega Large Pizza</li>
          <li className="navbar-menu-detail-item-1">Large Pizza</li>
          <li className="navbar-menu-detail-item-1">Middle Size Pizza</li>
          <li className="navbar-menu-detail-item-1">Small Size Pizza</li>
        </ul>
      </div>
      <div className="navbar-menu-detail-content-2">
        <h3 className="navbar-menu-detail-header">Famous Pizza</h3>
        <hr />
        <ul className="navbar-menu-detail-2">
          <li className="navbar-menu-detail-item-2">Turkish Pizza</li>
          <li className="navbar-menu-detail-item-2">Italy Pizza</li>
          <li className="navbar-menu-detail-item-2">German Pizza</li>
          <li className="navbar-menu-detail-item-2">Chinese Pizza</li>
        </ul>
      </div>
      <div className="navbar-menu-detail-content-3">
        <h3 className="navbar-menu-detail-header">Beverage + Pizza</h3>
        <hr />
        <ul className="navbar-menu-detail-3">
          <li className="navbar-menu-detail-item-3">Cola + Pizza</li>
          <li className="navbar-menu-detail-item-3">Ayran + Pizza </li>
          <li className="navbar-menu-detail-item-3">Salgam + Pizza </li>
          <li className="navbar-menu-detail-item-3">Water + Pizza</li>
        </ul>
      </div>
      <div className="navbar-menu-detail-content-4">
        <i className="navbar-menu-logo fas fa-pizza-slice"></i>
      </div>
    </div>
  );
};
export default NavbarDetail;
