import React, { useState, useEffect } from "react";
import "./shipdetailsDisplay.css";
import RpsDashboard from "../RPS DashBoard/RpsDashboard.jsx"
import { Link } from "react-router-dom";

const ShipDetailsDisplay = () => {
  const [shipDetails, setShipDetails] = useState([]); // State to store ship details

  useEffect(() => {
    // Fetch ship details from the backend API
    const fetchShipDetails = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/shipDetails");
        const data = await response.json();
        setShipDetails(data); // Store the data in state
      } catch (error) {
        console.error("Error fetching ship details:", error);
      }
    };

    fetchShipDetails(); // Call the fetch function on component mount
  }, []);

  return (
    <>
      <RpsDashboard />
    <div className="ship-details-table">   
      <h2>Ship Details</h2>
      <Link to="/Ship" className="add-Ship">Add Ship </Link>
      <table>
          <thead>
            <tr>
              <th>Ship Information</th>
              <th>Insurance Details</th>
              <th>Certificates</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody>
            {shipDetails.map((ship, index) => (
              <tr key={index}>
                {/* Group 1: Ship Information */}
                <td>
                  <p><strong>Employer:</strong> {ship.employer}</p>
                  <p><strong>Name of Ship:</strong> {ship.nameOfShip}</p>
                  <p><strong>IMO Number:</strong> {ship.imoNumber}</p>
                  <p><strong>Official Number:</strong> {ship.officialNumber}</p>
                  <p><strong>Call Sign:</strong> {ship.callSign}</p>
                  <p><strong>Gross Tonnage:</strong> {ship.grossTonnage}</p>
                  <p><strong>Kilo Watt:</strong> {ship.kiloWatt}</p>
                  <p><strong>Ship Type:</strong> {ship.shipType}</p>
                  <p><strong>Ship Flag:</strong> {ship.shipFlag}</p>
                </td>

                {/* Group 2: Insurance Details */}
                <td>
                  <p><strong>Pi Number:</strong> {ship.piNumber}</p>
                  <p><strong>Policy Date:</strong> {new Date(ship.policyDate).toLocaleDateString()}</p>
                </td>

                {/* Group 3: Certificates */}
                <td>
                  <p><strong>MLC Certificate Number:</strong> {ship.mlcCert}</p>
                  <p><strong>MLC Expiry Date:</strong> {new Date(ship.mlcExpiryDate).toLocaleDateString()}</p>
                  <p><strong>MLC Issue Date:</strong> {new Date(ship.mlcIssueDate).toLocaleDateString()}</p>
                  <p><strong>Financial Document Number:</strong> {ship.financialDocNum}</p>
                  <p><strong>Financial Document Validity:</strong> {new Date(ship.financialDocValidity).toLocaleDateString()}</p>
                </td>

                {/* Group 4: Documents */}
                <td>
                  {ship.seaAgreement && (
                    <a
                      href={`http://localhost:8000/${ship.seaAgreement.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sea Agreement
                    </a>
                  )}
                  <hr />
                  {ship.cbaAgreement && (
                    <a
                      href={`http://localhost:8000/${ship.cbaAgreement.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CBA Agreement
                    </a>
                  )}
                  <hr />
                  {ship.piDoc && (
                    <a
                      href={`http://localhost:8000/${ship.piDoc.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PI Document
                    </a>
                  )}
                  <hr />
                  {ship.mlcCertDoc && (
                    <a
                      href={`http://localhost:8000/${ship.mlcCertDoc.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MLC Certificate
                    </a>
                  )}
                  <hr />
                  {ship.financialDoc && (
                    <a
                      href={`http://localhost:8000/${ship.financialDoc.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Financial Document
                    </a>
                  )}
                  <hr />
                  {ship.dmlcPart1 && (
                    <a
                      href={`http://localhost:8000/${ship.dmlcPart1.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DMLC Part 1
                    </a>
                  )}
                  <hr />
                  {ship.dmlcPart2 && (
                    <a
                      href={`http://localhost:8000/${ship.dmlcPart2.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DMLC Part 2
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  );
};

export default ShipDetailsDisplay;
