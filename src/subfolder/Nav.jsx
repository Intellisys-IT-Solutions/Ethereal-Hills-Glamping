import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../subfolder/Nav.css";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" id="logo" />

      {/* Desktop Menu */}
      <div className="desktopmenu">
        <button className="book-now-btn">
          <NavLink to="/login" className="book-now-link">
            Book Now
          </NavLink>
        </button>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
        >
          ContactUs
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
        >
          AboutUs
        </NavLink>
        <NavLink
          to="/glam"
          className={({ isActive }) => (isActive ? "desktopmenuListitem active" : "desktopmenuListitem")}
        >
          Gallery
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="navMenu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => setShowMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/create-account"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => setShowMenu(false)}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "mobilemenuListitem active" : "mobilemenuListitem")}
            onClick={() => setShowMenu(false)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}
