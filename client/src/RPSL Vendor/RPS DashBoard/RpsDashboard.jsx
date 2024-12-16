import React from 'react'
import {Link} from "react-router-dom";
import "./RpsDashboard.css";

const RpsDashboard = () => {
  return (
    <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/companyprofileDisplay">Company Profile</Link>
            </li>
            <li>
              <Link to="/ManningAggrementDisplay">Manning Agreement</Link>
            </li>
            <li>
              <Link to="/ShipDetailsDisplay">Ship</Link>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default RpsDashboard;