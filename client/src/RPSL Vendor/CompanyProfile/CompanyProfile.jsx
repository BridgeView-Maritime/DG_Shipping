import React, { useState } from "react";
import axios from "axios";
import "./companyprofile.css";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    // Profile Details
    nameOfRPSL: "",
    rpslNumber: "",
    issueDate: "",
    expiryDate: "",
    issuePlace: "",
    tinTanNumber: "",
    bankName: "",
    bankGuaranteeValidityDate: "",
    guaranteeAmount: "",
    seafarerRecruited: "",
    inspectionDate: "",
    panNumber: "",
    office: "",
    leasedValidityDate: "",
    status: "",
    aadharNumber: "",

    // Last Inspection Details
    inspectorName: "",
    organizationName: "",
    lastAnnualInspectionDate: "",
    lastRenewalDate: "",
    lastInspectionPlace: "",
    nextRenewalDate: "",

    // Registered Address Details
    addressLine1: "",
    city: "",
    addressLine2: "",
    district: "",
    addressLine3: "",
    state: "",
    phoneNumber: "",
    mobileNumber: "",
    pin: "",
    fax: "",
    webUrl: "",

    // Contact Person & Details
    contactPersonName: "",
    contactPersonMobile: "",
    contactPersonEmail: "",

    // Other Details
    criminalCasePending: "",
    criminalCaseDetails: "",
    complaintsPending: "",
    complaintsDetails: "",
    shippingActivitiesCarriedOut: "",
    shippingActivitiesDetails: "",
    seafarerRecruitmentExperience: "",
    yearsOfExperience: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleViewDocument = (documentName) => {
    const file = formData[documentName];
    if (file) {
      // Check if the file is available in the formData state
      const fileURL = URL.createObjectURL(file); // Create a URL for the uploaded file
      window.open(fileURL, "_blank"); // Open the file in a new tab
    } else {
      alert("No document uploaded yet for this field.");
    }
  };
  

  const validate = () => {
    const newErrors = {};

    // Name of RPSL validation
    if (!formData.nameOfRPSL.trim()) {
      newErrors.nameOfRPSL = "Name of RPSL is required.";
    }

    // RPSL Number validation
    if (!formData.rpslNumber.trim()) {
      newErrors.rpslNumber = "RPSL Number is required.";
    }

    // Issue Date validation
    if (!formData.issueDate) {
      newErrors.issueDate = "Issue Date is required.";
    }

    // Expiry Date validation
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry Date is required.";
    }

    // Issue Place validation
    if (!formData.issuePlace.trim()) {
      newErrors.issuePlace = "Issue Place is required.";
    }

    // TIN TAN Number validation
    if (!formData.tinTanNumber.trim()) {
      newErrors.tinTanNumber = "TIN TAN Number is required.";
    }

    // Bank Name validation
    if (!formData.bankName) {
      newErrors.bankName = "Bank Name is required.";
    }

    // Bank Guarantee Validity Date validation
    if (!formData.bankGuaranteeValidityDate) {
      newErrors.bankGuaranteeValidityDate =
        "Bank Guarantee Validity Date is required.";
    }

    // Guarantee Amount validation
    if (!formData.guaranteeAmount) {
      newErrors.guaranteeAmount = "Guarantee Amount is required.";
    }

    // Seafarer Recruited validation
    if (!formData.seafarerRecruited) {
      newErrors.seafarerRecruited = "Seafarer Recruited is required.";
    }

    // Inspection Date validation
    if (!formData.inspectionDate) {
      newErrors.inspectionDate = "Inspection Date is required.";
    }

    // PAN Number validation
    if (!formData.panNumber.trim()) {
      newErrors.panNumber = "PAN Number is required.";
    }

    // Office validation
    if (!formData.office.trim()) {
      newErrors.office = "Office is required.";
    }

    // Leased Validity Date validation
    if (!formData.leasedValidityDate) {
      newErrors.leasedValidityDate = "Leased Validity Date is required.";
    }

    // Status validation
    if (!formData.status.trim()) {
      newErrors.status = "Status is required.";
    }

    // Aadhar Number validation
    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = "Aadhar Number is required.";
    }

    //Last inspection details
    if (!formData.inspectorName.trim()) {
      newErrors.inspectorName = "Inspector Number is Required.";
    }

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization Number is Required.";
    }

    //astAnnualInspectionDate
    if (!formData.lastAnnualInspectionDate.trim()) {
      newErrors.lastAnnualInspectionDate =
        "lastAnnualInspectionDate Number is Required.";
    }

    //lastRenewalDate
    if (!formData.lastRenewalDate.trim()) {
      newErrors.lastRenewalDate = "lastRenewalDate is Required.";
    }

    //lastInspectionPlace
    if (!formData.lastInspectionPlace.trim()) {
      newErrors.lastInspectionPlace = "lastInspectionPlace is Required.";
    }

    //nextRenewalDate
    if (!formData.nextRenewalDate.trim()) {
      newErrors.nextRenewalDate = "nextRenewalDate is Required.";
    }

    //
    // Setting errors state
    setErrors(newErrors);

    // Return true if no errors, false if errors exist
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    // Update formData with the selected file
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // store the first file selected
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/companyprofile",
        formData
      );
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting company profile:", error);
      setErrors({
        submit: error.response
          ? error.response.data.message
          : "An error occurred",
      });
    }

    if (validate()) {
      console.log("Form submitted successfully:", formData);
      setErrors({});
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Company Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Profile Details Section */}
        <section>
          <h3>Profile Details</h3>
          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Name of RPSL</label>
                <input
                  type="text"
                  name="nameOfRPSL"
                  value={formData.nameOfRPSL}
                  onChange={handleChange}
                />
              </div>
              {errors.nameOfRPSL && (
                <p className="error">{errors.nameOfRPSL}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>RPSL Number</label>
                <input
                  type="text"
                  name="rpslNumber"
                  value={formData.rpslNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.rpslNumber && (
                <p className="error">{errors.rpslNumber}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Issue Date</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </div>
              {errors.issueDate && <p className="error">{errors.issueDate}</p>}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>
              {errors.expiryDate && (
                <p className="error">{errors.expiryDate}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Issue Place</label>
                <input
                  type="text"
                  name="issuePlace"
                  value={formData.issuePlace}
                  onChange={handleChange}
                />
              </div>
              {errors.issuePlace && (
                <p className="error">{errors.issuePlace}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>TIN TAN Number</label>
                <input
                  type="text"
                  name="tinTanNumber"
                  value={formData.tinTanNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.tinTanNumber && (
                <p className="error">{errors.tinTanNumber}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Bank Name</label>
                <select
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                >
                  <option value="">Select Bank</option>
                  <option value="Bank A">HDFC BANK</option>
                  <option value="Bank B">ICICI Bank</option>
                  <option value="Bank C">BANK OF INDIA</option>
                </select>
              </div>
              {errors.bankName && <p className="error">{errors.bankName}</p>}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Bank Guarantee Validity Date</label>
                <input
                  type="date"
                  name="bankGuaranteeValidityDate"
                  value={formData.bankGuaranteeValidityDate}
                  onChange={handleChange}
                />
              </div>
              {errors.bankGuaranteeValidityDate && (
                <p className="error">{errors.bankGuaranteeValidityDate}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Guarantee Amount</label>
                <select
                  name="guaranteeAmount"
                  value={formData.guaranteeAmount}
                  onChange={handleChange}
                >
                  <option value="">Select Amount</option>
                  <option value="1 Lakh">1 Lakh</option>
                  <option value="5 Lakh">5 Lakh</option>
                  <option value="10 Lakh">10 Lakh</option>
                  <option value="20 Lakh">20 Lakh</option>
                </select>
              </div>
              {errors.guaranteeAmount && (
                <p className="error">{errors.guaranteeAmount}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Seafarer Recruited</label>
                <input
                  type="number"
                  name="seafarerRecruited"
                  value={formData.seafarerRecruited}
                  onChange={handleChange}
                />
              </div>
              {errors.seafarerRecruited && (
                <p className="error">{errors.seafarerRecruited}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Inspection Date</label>
                <input
                  type="date"
                  name="inspectionDate"
                  value={formData.inspectionDate}
                  onChange={handleChange}
                />
              </div>
              {errors.inspectionDate && (
                <p className="error">{errors.inspectionDate}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>PAN Number</label>
                <input
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.panNumber && <p className="error">{errors.panNumber}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Office</label>
                <input
                  type="text"
                  name="office"
                  value={formData.office}
                  onChange={handleChange}
                />
              </div>
              {errors.office && <p className="error">{errors.office}</p>}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Leased Validity Date</label>
                <input
                  type="date"
                  name="leasedValidityDate"
                  value={formData.leasedValidityDate}
                  onChange={handleChange}
                />
              </div>
              {errors.leasedValidityDate && (
                <p className="error">{errors.leasedValidityDate}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                />
              </div>
              {errors.status && <p className="error">{errors.status}</p>}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Aadhar Number</label>
                <input
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.aadharNumber && (
                <p className="error">{errors.aadharNumber}</p>
              )}
            </div>
          </div>
        </section>

        {/* Last Inspection Details Section */}
        <section>
          <h3>Last Inspection Details</h3>
          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Name of the Inspector</label>
                <input
                  type="text"
                  name="inspectorName"
                  value={formData.inspectorName}
                  onChange={handleChange}
                />
              </div>
              {errors.inspectorName && (
                <p className="error">{errors.inspectorName}</p>
              )}
            </div>
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Name of the Organization</label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                />
              </div>
              {errors.organizationName && (
                <p className="error">{errors.organizationName}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Date of Last Annual Inspection</label>
                <input
                  type="date"
                  name="lastAnnualInspectionDate"
                  value={formData.lastAnnualInspectionDate}
                  onChange={handleChange}
                />
              </div>
              {errors.lastAnnualInspectionDate && (
                <p className="error">{errors.lastAnnualInspectionDate}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Date of Last Renewal</label>
                <input
                  type="date"
                  name="lastRenewalDate"
                  value={formData.lastRenewalDate}
                  onChange={handleChange}
                />
              </div>
              {errors.lastRenewalDate && (
                <p className="error">{errors.lastRenewalDate}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group-row">
              <div className="input-label-row">
                <label>Place of Last Inspection</label>
                <select
                  name="lastInspectionPlace"
                  value={formData.lastInspectionPlace}
                  onChange={handleChange}
                >
                  <option value="">Select Place</option>
                  <option value="Place A">BELAPUR CBD</option>
                  <option value="Place B">THANE</option>
                  <option value="Place C">MUMBAI</option>
                </select>
              </div>
              {errors.lastInspectionPlace && (
                <p className="error">{errors.lastInspectionPlace}</p>
              )}
            </div>

            <div className="form-group-row">
              <div className="input-label-row">
                <label>Date of Next Renewal</label>
                <input
                  type="date"
                  name="nextRenewalDate"
                  value={formData.nextRenewalDate}
                  onChange={handleChange}
                />
              </div>
              {errors.nextRenewalDate && (
                <p className="error">{errors.nextRenewalDate}</p>
              )}
            </div>
          </div>
        </section>

        {/* Registered Address Details Section */}
        <section>
          <h3>Registered Address Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address Line 3</label>
              <input
                type="text"
                name="addressLine3"
                value={formData.addressLine3}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Pin</label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fax</label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Web URL</label>
              <input
                type="url"
                name="webUrl"
                value={formData.webUrl}
                onChange={handleChange}
              />
            </div>
            <div className="form-group"></div>
          </div>
        </section>

        {/* Contact Person & Details Section */}
        <section>
          <h3>Contact Person & Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Name of Person</label>
              <input
                type="text"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="contactPersonMobile"
                value={formData.contactPersonMobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="contactPersonEmail"
                value={formData.contactPersonEmail}
                onChange={handleChange}
              />
            </div>
            <div className="form-group"></div>
          </div>
        </section>

        {/* Other Details Section */}
        <section>
          <h3>Other Details</h3>

          <div className="form-row-otherdetails">
            <div className="form-group-otherdetails">
              <label>
                Is there any criminal or civil case pending in court?
              </label>
              <select
                name="criminalCasePending"
                value={formData.criminalCasePending}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="criminalCaseDetails"
                placeholder="If Yes, provide details."
                value={formData.criminalCaseDetails}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-otherdetails">
            <div className="form-group-otherdetails">
              <label>
                Are there any complaints pending regarding the seafarers
                recruited?
              </label>
              <select
                name="complaintsPending"
                value={formData.complaintsPending}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="complaintsDetails"
                placeholder="If Yes, provide details."
                value={formData.complaintsDetails}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-otherdetails">
            <div className="form-group-otherdetails">
              <label>Any shipping-related activities carried out?</label>
              <select
                name="shippingActivitiesCarriedOut"
                value={formData.shippingActivitiesCarriedOut}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="shippingActivitiesDetails"
                placeholder="If Yes, provide details."
                value={formData.shippingActivitiesDetails}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-otherdetails">
            <div className="form-group-otherdetails">
              <label>
                Experience in recruitment of seafarers (Number of years)
              </label>
              <select
                name="recruitmentExperienceYears"
                value={formData.recruitmentExperienceYears}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1-3">1-3 Years</option>
                <option value="4-6">4-6 Years</option>
                <option value="7+">7+ Years</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="recruitmentExperienceDetails"
                placeholder="If Yes, provide details."
                value={formData.recruitmentExperienceDetails}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Documents */}
        <section>
  <h3>Documents</h3>
  <div className="form-row-document">
    {/* Registration Documents */}
    <div className={`form-group ${formData.registrationDocuments ? 'uploaded' : ''}`}>
      <label htmlFor="registrationDocuments">Registration Documents *</label>
      <input
        id="registrationDocuments"
        type="file"
        name="registrationDocuments"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Registration Documents"
        onClick={() => handleViewDocument("registrationDocuments")}
      >
        View
      </button>
      {/* {!formData.registrationDocuments && <p className="error-message">This document is required.</p>} */}
    </div>

    {/* Scan Copy of RPS License */}
    <div className={`form-group ${formData.rpsLicense ? 'uploaded' : ''}`}>
      <label htmlFor="rpsLicense">Scan Copy of RPS License *</label>
      <input
        id="rpsLicense"
        type="file"
        name="rpsLicense"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded RPS License"
        onClick={() => handleViewDocument("rpsLicense")}
      >
        View
      </button>
      {/* {!formData.rpsLicense && <p className="error-message">This document is required.</p>} */}
    </div>

    {/* Profit and Loss Account */}
    <div className={`form-group ${formData.profitLossBalanceSheet ? 'uploaded' : ''}`}>
      <label htmlFor="profitLossBalanceSheet">
        Profit and Loss Account and Balance Sheet of Last 4 Years
      </label>
      <input
        id="profitLossBalanceSheet"
        type="file"
        name="profitLossBalanceSheet"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Profit and Loss Account"
        onClick={() => handleViewDocument("profitLossBalanceSheet")}
      >
        View
      </button>
    </div>

    {/* Certificate of Assets and Liabilities */}
    <div className={`form-group ${formData.assetsLiabilitiesCertificate ? 'uploaded' : ''}`}>
      <label htmlFor="assetsLiabilitiesCertificate">
        Certificate of Assets and Liabilities of Chartered Accountant
      </label>
      <input
        id="assetsLiabilitiesCertificate"
        type="file"
        name="assetsLiabilitiesCertificate"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Certificate of Assets and Liabilities"
        onClick={() => handleViewDocument("assetsLiabilitiesCertificate")}
      >
        View
      </button>
    </div>

    {/* Income Tax Returns */}
    <div className={`form-group ${formData.incomeTaxReturns ? 'uploaded' : ''}`}>
      <label htmlFor="incomeTaxReturns">Scanned Copy of Income Tax Returns</label>
      <input
        id="incomeTaxReturns"
        type="file"
        name="incomeTaxReturns"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Income Tax Returns"
        onClick={() => handleViewDocument("incomeTaxReturns")}
      >
        View
      </button>
    </div>

    {/* Last One Year Audit Report */}
    <div className={`form-group ${formData.auditReport ? 'uploaded' : ''}`}>
      <label htmlFor="auditReport">Last One Year Audit Report</label>
      <input
        id="auditReport"
        type="file"
        name="auditReport"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Audit Report"
        onClick={() => handleViewDocument("auditReport")}
      >
        View
      </button>
    </div>

    {/* Bank Guarantee Scanned Copy */}
    <div className={`form-group ${formData.bankGuarantee ? 'uploaded' : ''}`}>
      <label htmlFor="bankGuarantee">Bank Guarantee Scanned Copy</label>
      <input
        id="bankGuarantee"
        type="file"
        name="bankGuarantee"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        type="button"
        aria-label="View uploaded Bank Guarantee"
        onClick={() => handleViewDocument("bankGuarantee")}
      >
        View
      </button>
    </div>
  </div>
</section>

        <button
          style={{ backgroundColor: "lightBlue", color: "black" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyProfile;
