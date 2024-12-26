import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
// import "./VesselOwnerTable.css";

const VesselOwnerTable = () => {
  const [vesselData, setVesselData] = useState([]);

  useEffect(() => {
    // Fetch data from the API to populate the table
    const fetchVesselData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/vesselOwnerform"
        );
        setVesselData(response.data.data); // Assuming data is in `response.data.data`
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchVesselData();
  }, []);

  console.log("vesselData", vesselData);

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Vessel Owner Information</h2>
      <Link to="/vesselownerform">
        <button>Add Vessel Owner</button>
      </Link>
      <div className="vessel-container">
        {/* Company Details Column */}
        <div className="vessel-column">
          <h3>Company Details</h3>
          <table className="vessel-table">
            <thead>
              <tr>
                <th>Company Info</th>
                <th>Crewing Team Personnel</th>
                <th>Accounting Team Personnel</th>
              </tr>
            </thead>
            <tbody>
              {vesselData.map((vessel, index) => (
                <tr key={index}>
                  {/* Company Info */}
                  <td>
                    <div>
                      <strong>Company Name:</strong> {vessel.companyName}
                    </div>
                    <div>
                      <strong>Company Short Name:</strong>{" "}
                      {vessel.companyShortName}
                    </div>
                    <div>
                      <strong>Phone Number:</strong> {vessel.phoneNumber}
                    </div>
                    <div>
                      <strong>Contact Person Name:</strong>{" "}
                      {`${vessel.title} ${vessel.personName}`}
                    </div>
                    <div>
                      <strong>Email:</strong> {vessel.email}
                    </div>
                    <div>
                      <strong>Address:</strong> {vessel.address}
                    </div>
                    <div>
                      <strong>Company PAN:</strong> {vessel.companyPAN}
                    </div>
                    <div>
                      <strong>Company GST:</strong> {vessel.companyGST}
                    </div>
                    <div>
                      <strong>Country:</strong> {vessel.country}
                    </div>
                    <div>
                      <strong>Company Document:</strong>
                      {vessel.companyDocument ? (
                        <a
                          href={`http://localhost:8000/${vessel.companyDocument.filePath}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Document
                        </a>
                      ) : (
                        "No Document Available"
                      )}
                    </div>
                  </td>

                  {/* Crewing Team Personnel */}
                  <td>
                    <div>
                      <strong>Person Name:</strong> {vessel.crewingTitle}{" "}
                      {vessel.crewingPersonName}
                    </div>
                    <div>
                      <strong>Date:</strong> {vessel.crewingDate}
                    </div>
                    <div>
                      <strong>Phone Number:</strong> {vessel.crewingPhoneNumber}
                    </div>
                    <div>
                      <strong>Email:</strong> {vessel.crewingEmail}
                    </div>
                    <br />
                    <div>
                      <strong>Second Person Name:</strong>{" "}
                      {vessel.personalcrewingTitle}{" "}
                      {vessel.personalcrewingPersonName}
                    </div>
                    <div>
                      <strong>Date:</strong> {vessel.personalcrewingDate}
                    </div>
                    <div>
                      <strong>Phone Number:</strong>{" "}
                      {vessel.personalcrewingPhoneNumber}
                    </div>
                    <div>
                      <strong>Email:</strong> {vessel.personalcrewingEmail}
                    </div>
                  </td>

                  {/* Accounting Team Personnel */}
                  <td>
                    <div>
                      <strong>Person Name:</strong> {vessel.accountsTitle}{" "}
                      {vessel.accountsPersonName}
                    </div>
                    <div>
                      <strong>Phone Number:</strong>{" "}
                      {vessel.accountsPhoneNumber}
                    </div>
                    <div>
                      <strong>Email:</strong> {vessel.accountsEmail}
                    </div>
                    <br />
                    <div>
                      <strong>Another Person Name:</strong>{" "}
                      {vessel.anotherAccountsTitle}{" "}
                      {vessel.anotherAccountsPersonName}
                    </div>
                    <div>
                      <strong>Another Phone Number:</strong>{" "}
                      {vessel.anotherAccountsPhoneNumber}
                    </div>
                    <div>
                      <strong>Another Email:</strong>{" "}
                      {vessel.anotherAccountsEmail}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default VesselOwnerTable;
