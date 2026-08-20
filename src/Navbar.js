import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUserAlt, FaTimes, FaBars, FaArrowLeft } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the back button when on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* UI Back Button & Brand Logo */}
        <div className="navbar-brand-group">
          {!isHomePage && (
            <button
              className="back-btn"
              onClick={() => navigate(-1)}
              aria-label="Go back to previous page"
            >
              <FaArrowLeft />
            </button>
          )}

          <NavLink to="/" className="logo">
            Baeol Sanz
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/advisory">Crop Advisory</NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/about">About</NavLink>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Get Started Action Button */}
        <div className="header-action">
          <button className="get-started-btn">
            <FaUserAlt className="btn-icon" /> Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;