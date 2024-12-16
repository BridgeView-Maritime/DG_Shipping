
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // If you want to create a separate CSS for navbar

const Navbar = () => {
  return (
    <header className="navbar-homepage">
      <div className="navbar-logo">MyLogo</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
