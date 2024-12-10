import React, { useState } from "react";
import "./manningAggrement.css";

const ManningAgrrement = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    email: "",
    address: "",
    contact: "",
    validityType: "Permanent", // Default value
    validityDate: "",
    agreementType: "",
    agreementFormVII: null,
    supportingAgreement: null,
    chainOfAgreement: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: file,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.employerName) newErrors.employerName = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.contact) newErrors.contact = "Contact is required.";
    if (!formData.validityDate)
      newErrors.validityDate = "Validity date is required.";
    if (!formData.agreementType)
      newErrors.agreementType = "Agreement Type is required.";
    if (!formData.agreementFormVII)
      newErrors.agreementFormVII = "Form VII upload is required.";
    if (!formData.supportingAgreement)
      newErrors.supportingAgreement = "Supporting Agreement upload is required.";
    if (!formData.chainOfAgreement)
      newErrors.chainOfAgreement = "Chain of Agreement upload is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log("Form validation failed.");
      return;
    }
  
    const formDataToSend = new FormData();
  
    // Append all form data (non-file fields)
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    // Append files
    formDataToSend.append("agreementFormVII", formData.agreementFormVII);
    formDataToSend.append("supportingAgreement", formData.supportingAgreement);
    formDataToSend.append("chainOfAgreement", formData.chainOfAgreement);
  
    try {
      const response = await fetch("http://localhost:5000/api/manningAgrrements", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.message); // Show success message
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      employerName: "",
      email: "",
      address: "",
      contact: "",
      validityType: "Permanent",
      validityDate: "",
      agreementType: "",
      agreementFormVII: null,
      supportingAgreement: null,
      chainOfAgreement: null,
    });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div class="agreement-form-body">
    <div className="agreement-form">
      <h2>Agreement or Contract Details</h2>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errors.submit && <div className="error">{errors.submit}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="employerName">
              Name of the Employer/Owner/Manager *
            </label>
            <input
              id="employerName"
              type="text"
              name="employerName"
              value={formData.employerName || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact *</label>
            <input
              id="contact"
              type="text"
              name="contact"
              value={formData.contact || ""}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="validityType">Validity Type *</label>
          <select
            id="validityType"
            name="validityType"
            value={formData.validityType || ""}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="validityDate">Validity Date *</label>
          <input
            id="validityDate"
            type="date"
            name="validityDate"
            value={formData.validityDate || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="agreementType">Agreement Type *</label>
          <input
            id="agreementType"
            type="text"
            name="agreementType"
            value={formData.agreementType || ""}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="agreementFormVII">Agreement (Form VII) Upload *</label>
          <input
            id="agreementFormVII"
            type="file"
            name="agreementFormVII"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "agreementFormVII")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="supportingAgreement">Supported by the Manning Agreement *</label>
          <input
            id="supportingAgreement"
            type="file"
            name="supportingAgreement"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "supportingAgreement")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chainOfAgreement">IT with the Manager Chain of Agreement *</label>
          <input
            id="chainOfAgreement"
            type="file"
            name="chainOfAgreement"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, "chainOfAgreement")}
            required
          />
        </div>

        <div className="button-row">
          <button
            type="button"
            // onClick={handleBack}
          >
            Back
          </button>
          <button
            type="button"
            // onClick={handleAddToList}
          >
            Add to List
          </button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ManningAgrrement;