import React from 'react';
import './Dashboard.css'; // Make sure to import the CSS file

function DashBoard() {
  return (
    <div className="dashboardContainer">
      <nav className="navbar">
        <button className="navButton">Crew</button>
        <button className="navButton">Versel vendor</button>
        <button className="navButton">RPSL Vendor</button>
      </nav>
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  );
}

export default DashBoard;
