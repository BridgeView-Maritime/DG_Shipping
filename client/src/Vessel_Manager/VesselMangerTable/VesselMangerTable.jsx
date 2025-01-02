import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

const VesselManagerTable = () => {
  const [vesselManagers, setVesselManagers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/vesselManager")
      .then((response) => {setVesselManagers(response.data)
        console.log(response.data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <Navbar />
    <div className="vesselMangerTable">
      <Link to="/VesselMangerForm"><button>Add Vessel Manager</button></Link>
      <h2>Vessel Manager Data</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Company Details</th>
            <th>Crewing Details</th>
            <th>Accounts Details</th>
          </tr>
        </thead>
        <tbody>
          {vesselManagers.map((manager) => (
            <tr key={manager._id}>
              {/* Company Details Column */}
              <td>
                <strong>Company Name:</strong> {manager.companyName} <br />
                <strong>Short Name:</strong> {manager.companyShortName} <br />
                <strong>Phone Number:</strong> {manager.phoneNumber} <br />
                <strong>Title:</strong> {manager.title} <br />
                <strong>Person Name:</strong> {manager.personName} <br />
                <strong>Email:</strong> {manager.email} <br />
                <strong>Address:</strong> {manager.address} <br />
                <strong>Document:</strong>{" "}
                <a
                  href={manager.companyDocument.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {manager.companyDocument.originalName}
                </a>{" "}
                <br />
                <strong>Country:</strong> {manager.country}
              </td>

              {/* Crewing Details Column */}
              <td>
                <strong>Title:</strong> {manager.crewingTitle} <br />
                <strong>Person Name:</strong> {manager.crewingPersonName} <br />
                <strong>Phone Number:</strong> {manager.crewingPhoneNumber} <br />
                <strong>Email:</strong> {manager.crewingEmail} <br />
                <strong>Date:</strong>{" "}
                {new Date(manager.crewingDate).toLocaleDateString()}
              </td>

              {/* Accounts Details Column */}
              <td>
                <strong>Title:</strong> {manager.accountsTitle} <br />
                <strong>Person Name:</strong> {manager.accountsPersonName} <br />
                <strong>Phone Number:</strong> {manager.accountsPhoneNumber} <br />
                <strong>Email:</strong> {manager.accountsEmail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default VesselManagerTable;
