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

        {userType === "crew" && (
          <Link to="/SeafarerProfile">Seafarer Profile</Link>
        )}
        {userType === "Vessel_vendor" && (
          <Link to="/Vesselvendor">Vessel Vendor</Link>
        )}
        {userType === "vessel_owner" && (
          <>
            <Link to="/vessel_owner_table">Vessel Owner</Link>
            {/* <Link to="/ManningAggrementDisplay">Manning Agreement</Link> */}
            <Link to="/vessel_Table">Vessel</Link>
          </>
        )}
          {userType === "crewing_agent" && (
            <Link to="/CrewingAgentTable">Crewing Agent</Link>
          )}
        {userType ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;


