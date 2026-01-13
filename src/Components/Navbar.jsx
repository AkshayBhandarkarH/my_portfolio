import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* LOGO */}
        <NavLink className="navbar-brand" to="/">
          MyPortfolio
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Skills" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Technical Skills
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Experience" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Academics" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Academics
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
