import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"; 

const Navbar = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming userType is stored in localStorage, you can change it based on your authentication flow
    const userTypeFromStorage = localStorage.getItem("userType");
    setUserType(userTypeFromStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userType"); // Clear the userType on logout
    setUserType(null); // Reset userType
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="navbar-homepage">
      <div className="navbar-logo">MyLogo</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>

        {/* Conditional Rendering Based on userType */}
        {userType === "crew" && (
          <Link to="/SeafarerProfile">Seafarer Profile</Link>
        )}
        {userType === "Vessel_vendor" && (
          <Link to="/Vesselvendor">Vessel Vendor</Link>
        )}
        {userType === "rpsl_vendor" && (
          <>
            <Link to="/companyprofiledisplay">Company Profile</Link>
            <Link to="/ManningAggrementDisplay">Manning Agreement</Link>
            <Link to="/shipDetailsDisplay">Ship</Link>
          </>
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
