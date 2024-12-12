import React from 'react'
import {Link} from "react-router-dom";
import "./RpsDashboard.css";

const RpsDashboard = () => {
  return (
    <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/companyprofile">Company Profile</Link>
            </li>
            <li>
              <Link to="/manningAggrement">Manning Agreement</Link>
            </li>
            <li>
              <Link to="/ship">Ship</Link>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default RpsDashboard;