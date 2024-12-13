import React, { useState, useEffect } from "react";
import "./shipdetailsDisplay.css";

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
    <div>
      <h2>Ship Details</h2>
      <table>
        <thead>
          <tr>
            <th>Employer</th>
            <th>Name of Ship</th>
            <th>IMO Number</th>
            <th>Official Number</th>
            <th>Call Sign</th>
            <th>Gross Tonnage</th>
            <th>Kilo Watt</th>
            <th>Ship Type</th>
            <th>Ship Flag</th>
            <th>CBA Ref</th>
            <th>Pi Number</th>
            <th>Policy Date</th>
            <th>MLC Certificate Number</th>
            <th>MLC expiry Date</th>
            <th>MLC Issue Date</th>
            <th>Financial Document Number</th>
            <th>Financial Document Validity</th>
            <th>View</th> {/* This column will contain the action links */}
          </tr>
        </thead>
        <tbody>
          {shipDetails.map((ship, index) => (
            <tr key={index}>
              <td>{ship.employer}</td>
              <td>{ship.nameOfShip}</td>
              <td>{ship.imoNumber}</td>
              <td>{ship.officialNumber}</td>
              <td>{ship.callSign}</td>
              <td>{ship.grossTonnage}</td>
              <td>{ship.kiloWatt}</td>
              <td>{ship.shipType}</td>
              <td>{ship.shipFlag}</td>
              {/* <td>{ship.seaAggrement}</td> */}
              <td>{ship.cbaRef}</td>
              <td>{ship.piNumber}</td>
                <td>{ship.policyDate}</td>
                <td>{ship.mlcCert}</td>
                <td>{ship.mlcExpiryDate}</td>
                <td>{ship.mlcIssueDate}</td>
                <td>{ship.financialDocNum}</td>
                <td>{ship.financialDocValidity}</td>
              {/* <td>{ship.cbaaggrement}</td> */}
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
              </td>
              <td>
                {ship.cbaAgreement && (
                  <a
                    href={`http://localhost:8000/${ship.cbaAgreement.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CBA Agreement
                  </a>
                )}</td>
                <td>
                {ship.piDoc && (
                  <a
                    href={`http://localhost:8000/${ship.piDoc.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PI Document
                  </a>
                )}
                </td>
                <td>
                {ship.mlcCertDoc && (
                  <a
                    href={`http://localhost:8000/${ship.mlcCertDoc.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View MLC Certificate
                  </a>
                )}</td>
                <td>
                {ship.financialDoc && (
                  <a
                    href={`http://localhost:8000/${ship.financialDoc.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Financial Document
                  </a>
                )}
                </td>
                <td>
                {ship.dmlcPart1 && (
                  <a
                    href={`http://localhost:8000/${ship.dmlcPart1.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View DMLC Part 1
                  </a>
                )}
                </td>
                <td>
                {ship.dmlcPart2 && (
                  <a
                    href={`http://localhost:8000/${ship.dmlcPart2.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View DMLC Part 2
                  </a>
                )}
              </td>{" "}
              {/* Actions column with all the file links */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipDetailsDisplay;
