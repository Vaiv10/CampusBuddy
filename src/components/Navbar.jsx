import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span>Campus</span>
          <br />
          <span className="highlight">Buddy</span>
        </Link>

        {/* Links */}
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Marketplace">MarketPlace</NavLink></li>
          <li><NavLink to="/Events">Events</NavLink></li>
          <li><NavLink to="/Study">Study</NavLink></li>
          <li><NavLink to="/Discussion">Discussion</NavLink></li>
        </ul>

        {/* Login/Signup */}
        <div className="login-section">
          <Link to="/Login" className="login-btn">
            <FaUserCircle className="user-icon" /> Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
