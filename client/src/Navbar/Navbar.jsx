import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"; 

const Navbar = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem("userType");
    setUserType(userTypeFromStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    setUserType(null);
    navigate("/login");
  };

  // Smooth scrolling handler
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  let navLinks;

  // Conditional rendering of navigation links
  if (userType === "admin") {
    navLinks = (
      <>
        <Link to="/SeafarerProfile">Seafarer Profile</Link>
        <Link to="/VesselManagerTable">Vessel Manager</Link>
        <Link to="/vessel_owner_table">Vessel Owner</Link>
        <Link to="/vessel_Table">Vessel</Link>
        <Link to="/CrewingAgentTable">Crewing Agent</Link>
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
        <Link to="/vessel_Table">Vessel</Link>
      </>
    );
  } else if (userType === "crewing_agent") {
    navLinks = <Link to="/CrewingAgentTable">Crewing Agent</Link>;
  } else {
    navLinks = null; // No additional links for other user types
  }

  return (
    <header className="navbar-homepage">
      <div className="navbar-logo">MyLogo</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About Us
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
        {navLinks}
        {userType ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
