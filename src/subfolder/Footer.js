import React from "react";
import logo from "../Assets/logo.png";
import facebook from "../Assets/facebook.png";
import insta from "../Assets/insta.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Mission */}
        <div className="footer-section logo-mission">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Our mission is to inspire people to connect with nature and
            experience the joys of camping. We aim to provide a comprehensive
            camping experience by offering a wide range of camping gear and
            accessories, along with expert advice and resources to help campers
            plan and prepare for their trips.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <div className="footer-contacts">
          <h3>Contact</h3>
          <p>
            <strong>Address:</strong> Gera Imperim Rise, 328-B, Wipro Circle,
            Hinjawadi Phase II, Pune.
          </p>
          <p>
            <strong>Mobile No:</strong> 91-8080175455
          </p>
          <p>
            <strong>Email:</strong> nirwanastays@gmail.com
          </p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src={insta} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 Nirwana Stays. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
