import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="logo.png" alt="School Logo" />
          <p>YBM International Schools</p>
        </div>
        <div className="footer-column">
          <h4>Visit Us</h4>
          <p>Colyer Rd, Northfleet</p>
          <p>Gravesend, Kent DA11 8BG</p>
        </div>
        <div className="footer-column">
          <h4>Call Us</h4>
          <p>+91 941 2928 625</p>
          <p>+91 817 1189 746</p>
        </div>
        <div className="footer-column">
          <h4>Email Us</h4>
          <p>info@ntc.kent.sch.uk</p>
          <p>support@ntc.kent.sch.uk</p>
        </div>
      </footer>
      <div className="footer-bottom">
        © 2025 YBM International Schools. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;
