import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/formCommon.css"
import Navbar from "../../Navbar/Navbar";

const CrewingAgentTable = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    fetch("http://3.110.185.220:8000/api/crewingAgentTable")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Profile Data:", data);
        setProfileData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!profileData) return <div>Loading...</div>;

  return (
    <>
      {/* <RpsDashboard /> */}
      <Navbar />
      <div className="ship-details-table company-profile-container">
      <h1>Crewing Agent</h1>
      <Link to="/Crewing_Agent" className="add-companyprofile">
        Add Crewing Agent
      </Link>
      <table className="profile-table">
        <thead>
          <tr>
            <th>Profile No.</th>
            <th>Profile Details</th>
            <th>Inspection Details</th>
            <th>Registered Address</th>
            <th>Contact Person</th>
            <th>Other Details</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              <td>
                <p>
                  <span className="key">Name Of RPSL:</span> {user.nameofCrewingAgent}
                </p>
                <p>
                  <span className="key">RPSL Number:</span> {user.rpslNumber}
                </p>
                <p>
                  <span className="key">Issue Date:</span> {new Date(user.issueDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Expiry Date:</span> {new Date(user.expiryDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Issue Place:</span> {user.issuePlace}
                </p>
                <p>
                  <span className="key">TIN TAN Number:</span>{" "}
                  {user.tinTanNumber}
                </p>
                <p>
                  <span className="key">Bank Name:</span> {user.bankName}
                </p>
                <p>
                  <span className="key">Bank Guarantee Validity Date:</span>{" "}
                  {new Date(user.bankGuaranteeValidityDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Guarantee Amount:</span>{" "}
                  {user.guaranteeAmount}
                </p>
                <p>
                  <span className="key">Seafarer Recruited:</span>{" "}
                  {user.seafarerRecruited}
                </p>
                <p>
                  <span className="key">Inspection Date:</span>{" "}
                  {new Date(user.inspectionDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">PAN Number:</span> {user.panNumber}
                </p>
                <p>
                  <span className="key">Office:</span> {user.office}
                </p>
                <p>
                  <span className="key">Leased Validity Date:</span>{" "}
                  {new Date(user.leasedValidityDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Status:</span> {user.status}
                </p>
                <p>
                  <span className="key">Aadhar Number:</span>{" "}
                  {user.aadharNumber}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Name of the Inspector:</span>{" "}
                  {user.inspectorName}
                </p>
                <p>
                  <span className="key">Organization Name:</span>{" "}
                  {user.organizationName}
                </p>
                <p>
                  <span className="key">Last Annual Inspection Date:</span>{" "}
                  {new Date(user.lastAnnualInspectionDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Last Renewal Date:</span>{" "}
                  {new Date(user.lastRenewalDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="key">Last Inspection Place:</span>{" "}
                  {user.lastInspectionPlace}
                </p>
                <p>
                  <span className="key">Next Renewal Date:</span>{" "}
                  {new Date(user.nextRenewalDate).toLocaleDateString()}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Address:</span> {user.addressLine1},{" "}
                  {user.addressLine2}, {user.addressLine3}
                </p>
                <p>
                  <span className="key">City:</span> {user.city}
                </p>
                <p>
                  <span className="key">District:</span> {user.district}
                </p>
                <p>
                  <span className="key">State:</span> {user.state}
                </p>
                <p>
                  <span className="key">Pin:</span> {user.pin}
                </p>
                <p>
                  <span className="key">Phone Number:</span> {user.phoneNumber}
                </p>
                <p>
                  <span className="key">Mobile Number:</span>{" "}
                  {user.mobileNumber}
                </p>
                <p>
                  <span className="key">Fax:</span> {user.fax}
                </p>
                <p>
                  <span className="key">Website:</span> {user.webUrl}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Name:</span> {user.contactPersonName}
                </p>
                <p>
                  <span className="key">Mobile:</span>{" "}
                  {user.contactPersonMobile}
                </p>
                <p>
                  <span className="key">Email:</span> {user.contactPersonEmail}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Criminal Case Pending:</span>{" "}
                  {user.criminalCasePending ? "Yes" : "No"}
                </p>
                {user.criminalCasePending && user.criminalCaseDetails && (
                  <p>
                    <span className="key">Criminal Case Details:</span>{" "}
                    {user.criminalCaseDetails}
                  </p>
                )}
                <p>
                  <span className="key">Complaints Pending:</span>{" "}
                  {user.complaintsPending ? "Yes" : "No"}
                </p>
                {user.complaintsPending && user.complaintsDetails && (
                  <p>
                    <span className="key">Complaints Details:</span>{" "}
                    {user.complaintsDetails}
                  </p>
                )}
                <p>
                  <span className="key">Shipping Activities Carried Out:</span>{" "}
                  {user.shippingActivitiesCarriedOut ? "Yes" : "No"}
                </p>
                {user.shippingActivitiesCarriedOut &&
                  user.shippingActivitiesDetails && (
                    <p>
                      <span className="key">Shipping Activities Details:</span>{" "}
                      {user.shippingActivitiesDetails}
                    </p>
                  )}
              </td>

              <td>
                <ul>
                  {user.registrationDocuments?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.registrationDocuments.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Registration Documents
                      </a>
                    </li>
                  )}
                  {user.rpsLicense?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.rpsLicense.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RPS License
                      </a>
                    </li>
                  )}
                  {user.profitLossBalanceSheet?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.profitLossBalanceSheet.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Profit/Loss Balance Sheet
                      </a>
                    </li>
                  )}
                  {user.bankGuarantee?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.bankGuarantee.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bank Guarantee
                      </a>
                    </li>
                  )}
                  {user.assetsLiabilitiesCertificate?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.assetsLiabilitiesCertificate.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Assets/Liabilities Certificate
                      </a>
                    </li>
                  )}
                  {user.incomeTaxReturns?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.incomeTaxReturns.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Income Tax Returns
                      </a>
                    </li>
                  )}
                  {user.auditReport?.filePath && (
                    <li>
                      <a
                        href={`http://3.110.185.220:8000/${user.auditReport.filePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Audit Report
                      </a>
                    </li>
                  )}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default CrewingAgentTable ;
