import React, { useState, useEffect } from "react";
import "./CompanyProfileDisplay.css";
import RpsDashboard from "../RPS DashBoard/RpsDashboard";

const CompanyProfileDisplay = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/companyprofile")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Profile Data:", data);
        setProfileData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!profileData) return <div>Loading...</div>;

  return (
    <div className="company-profile">
      <RpsDashboard />
      <h1>Company Profile</h1>

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
                  <span className="key">Name Of RPSL:</span> {user.nameOfRPSL}
                </p>
                <p>
                  <span className="key">RPSL Number:</span> {user.rpslNumber}
                </p>
                <p>
                  <span className="key">Issue Date:</span> {user.issueDate}
                </p>
                <p>
                  <span className="key">Expiry Date:</span> {user.expiryDate}
                </p>
                <p>
                  <span className="key">Issue Place:</span> {user.issuePlace}
                </p>
                <p>
                  <span className="key">TIN TAN Number:</span> {user.tinTanNumber}
                </p>
                <p>
                  <span className="key">Bank Name:</span> {user.bankName}
                </p>
                <p>
                  <span className="key">Bank Guarantee Validity Date:</span> {user.bankGuaranteeValidityDate}
                </p>
                <p>
                  <span className="key">Guarantee Amount:</span> {user.guaranteeAmount}
                </p>
                <p>
                  <span className="key">Seafarer Recruited:</span> {user.seafarerRecruited}
                </p>
                <p>
                  <span className="key">Inspection Date:</span> {user.inspectionDate}
                </p>
                <p>
                  <span className="key">PAN Number:</span> {user.panNumber}
                </p>
                <p>
                  <span className="key">Office:</span> {user.office}
                </p>
                <p>
                  <span className="key">Leased Validity Date:</span> {user.easedValidityDate}
                </p>
                <p>
                  <span className="key">Status:</span> {user.status}
                </p>
                <p>
                  <span className="key">Aadhar Number:</span> {user.aadharNumber}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Name of the Inspector:</span> {user.inspectorName}
                </p>
                <p>
                  <span className="key">Name of the Organization:</span> {user.organizationName}
                </p>
                <p>
                  <span className="key">Last Annual Inspection Date:</span> {user.lastAnnualInspectionDate}
                </p>
                <p>
                  <span className="key">Last Renewal Date:</span> {user.lastRenewalDate}
                </p>
                <p>
                  <span className="key">Last Inspection Place:</span> {user.lastInspectionPlace}
                </p>
                <p>
                  <span className="key">Date of Next Renewal:</span> {user.nextRenewalDate}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Address:</span> {user.addressLine1}, {user.addressLine2}, {user.addressLine3}
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
                  <span className="key">Mobile Number:</span> {user.mobileNumber}
                </p>
                <p>
                  <span className="key">Fax:</span> {user.fax}
                </p>
                <p>
                  <span className="key">Web URL:</span> {user.webUrl}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Name:</span> {user.contactPersonName}
                </p>
                <p>
                  <span className="key">Mobile:</span> {user.contactPersonMobile}
                </p>
                <p>
                  <span className="key">Email:</span> {user.contactPersonEmail}
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Criminal Case Pending:</span> {user.criminalCasePending ? "Yes" : "No"}
                </p>
                <p>
                  <span className="key">Complaints Pending:</span> {user.complaintsPending ? "Yes" : "No"}
                </p>
                <p>
                  <span className="key">Shipping Activities:</span> {user.shippingActivitiesCarriedOut ? "Yes" : "No"}
                </p>
                <p>
                  <span className="key">Recruitment Experience:</span> {user.recruitmentExperienceYears} years
                </p>
              </td>

              <td>
                <p>
                  <span className="key">Bank Guarantee:</span> {user.bankGuarantee ? "Available" : "Not Available"}
                </p>
                <p>
                  <span className="key">Income Tax Returns:</span> {user.incomeTaxReturns ? "Available" : "Not Available"}
                </p>
                <p>
                  <span className="key">Audit Report:</span> {user.auditReport ? "Available" : "Not Available"}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyProfileDisplay;
