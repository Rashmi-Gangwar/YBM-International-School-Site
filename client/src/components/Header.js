import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = () => {

  return (
    <div>
       <header className="header">
        <div className="logo-section">
          <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Northfleet_Technology_College_logo.png" alt="NTC Logo" className="logo" />
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/lifeatYBM" className="nav-link">Life at YBM</Link>
            <Link to="/events" className="nav-link">News & Events</Link>
            <Link to="/register" className="nav-link">Contact Us</Link>
          </nav>
          <div className="social-icons nav-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaEnvelope />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
