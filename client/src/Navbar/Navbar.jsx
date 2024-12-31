import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css"; 

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem("userType");
    setUserType(userTypeFromStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    setUserType(null);
    navigate("/login");
  };

  // Check if the current page is the login page
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  let navLinks;

  if (isLoginPage) {
    navLinks = (
      <>
        <Link to="/">Home</Link>
        <Link to="#" onClick={() => scrollToSection('about')}>
            About Us
          </Link>
          <Link to="#" onClick={() => scrollToSection('contact')}>
            Contact Us
          </Link>

        <Link to="/login">Login</Link>
      </>
    );
  } else {
    if (userType === "admin") {
      navLinks = (
        <>
          <Link to="/vessel_owner_table">Vessel Owner</Link>
          <Link to="/VesselManagerTable">Vessel Manager</Link>
          <Link to="/vessel_Table">Vessels</Link>
          <Link to="/CrewingAgentTable">Crewing Agent</Link>
          <Link to="/SeafarerProfile">Crew</Link>
        </>
      );
    } else if (userType === "crew") {
      navLinks = <Link to="/SeafarerProfile">Seafarer Profile</Link>;
    } else if (userType === "Vessel_vendor") {
      navLinks = <Link to="/Vesselvendor">Vessel Vendor</Link>;
    } else if (userType === "vessel_owner") {
      navLinks = (
        <>
          <Link to="/vessel_owner_table">Vessel Owner</Link>
          <Link to="/vessel_Table">Vessels</Link>
        </>
      );
    } else if (userType === "crewing_agent") {
      navLinks = <Link to="/CrewingAgentTable">Crewing Agent</Link>;
    } else {
      navLinks = null; // No additional links for other user types
    }
  }

  return (
    <header className="navbar-homepage">
      <div className="navbar-logo">
        <img src="/assets/bsplLogoRE.png" alt="logo" className="logoImage" />
      </div>
      <nav
        className={`navbar-links ${userType === "admin" ? "admin-navbar" : ""}`}
      >
        {navLinks}
        {!isLoginPage && (
          userType ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
