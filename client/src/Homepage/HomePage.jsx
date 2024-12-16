// src/pages/HomePage.js
import React from "react";
import Navbar from "../Navbar/Navbar.jsx"
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Import Navbar component here */}
      <div className="mainConatainer">
        <h1>Bridgeviewship</h1>
      </div>
    </div>
  );
};

export default HomePage;
