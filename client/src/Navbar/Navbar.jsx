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
  const [showDropdown, setShowDropdown] = useState(false);
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

  const isLoginPage = location.pathname === "/login" || location.pathname === "/";

  const getActiveLinkClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  let navLinks;

  if (isLoginPage) {
    navLinks = (
      <>
        <Link to="/" className={getActiveLinkClass("/")}>Home</Link>
        <Link to="#" onClick={() => scrollToSection('about')} className={getActiveLinkClass("#about")}>
          About Us
        </Link>
        <Link to="#" onClick={() => scrollToSection('contact')} className={getActiveLinkClass("#contact")}>
          Contact Us
        </Link>
        <Link to="/login" className={getActiveLinkClass("/login")}>Login</Link>
      </>
    );
  } else {
    if (userType === "admin") {
      navLinks = (
        <>
          <Link to="/vessel_owner_table" className={getActiveLinkClass("/vessel_owner_table")}>Vessel Owner</Link>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/VesselManagerTable" className={getActiveLinkClass("/VesselManagerTable")}>Vessel Manager</Link>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/assign-vessel" className={getActiveLinkClass("/assign-vessel")}>Assign Vessel</Link>
                <Link to="/crewing-agent" className={getActiveLinkClass("/crewing-agent")}>Crewing Agent</Link>
                <Link to="/crew" className={getActiveLinkClass("/crew")}>Crew</Link>
              </div>
            )}
          </div>
          <Link to="/vessel_Table" className={getActiveLinkClass("/vessel_Table")}>Vessels</Link>
          <Link to="/CrewingAgentTable" className={getActiveLinkClass("/CrewingAgentTable")}>Crewing Agent</Link>
          <Link to="/SeafarerProfile" className={getActiveLinkClass("/SeafarerProfile")}>Crew</Link>
        </>
      );
    } else if (userType === "crew") {
      navLinks = <Link to="/SeafarerProfile" className={getActiveLinkClass("/SeafarerProfile")}>Seafarer Profile</Link>;
    } else if (userType === "Vessel_vendor") {
      navLinks = <Link to="/Vesselvendor" className={getActiveLinkClass("/Vesselvendor")}>Vessel Vendor</Link>;
    } else if (userType === "vessel_owner") {
      navLinks = (
        <>
          <Link to="/vessel_owner_table" className={getActiveLinkClass("/vessel_owner_table")}>Vessel Owner</Link>
          <Link to="/vessel_Table" className={getActiveLinkClass("/vessel_Table")}>Vessels</Link>
        </>
      );
    } else if (userType === "crewing_agent") {
      navLinks = <Link to="/CrewingAgentTable" className={getActiveLinkClass("/CrewingAgentTable")}>Crewing Agent</Link>;
    } else {
      navLinks = null; // No additional links for other user types
    }
  }

  return (
    <header className="navbar-homepage">
      <div className="navbar-logo">
        <img src="/assets/bsplLogoRE.png" alt="logo" className="logoImage" />
      </div>
      <nav className={`navbar-links ${userType === "admin" ? "admin-navbar" : ""}`}>
        {navLinks}
        {!isLoginPage && (
          userType ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className={getActiveLinkClass("/login")}>Login</Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
