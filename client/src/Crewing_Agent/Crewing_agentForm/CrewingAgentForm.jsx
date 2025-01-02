import React, { useState } from "react";
import "./CrewingAgentForm.css";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function CrewingAgentForm() {
  const [formData, setFormData] = useState({
    agentName: "",
    shortName: "",
    address: "",
    contactPersonTitle: "",
    contactPersonName: "",
    country: "",
    contactNumber: "",
    email: "",
  });

  const navigate= useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://bridgeviewships.ae/api/crewingAgentDetails",
      formData
    );

    if (response.status === 200 || response.status === 201) {
      console.log("Form submitted successfully:", response.data);
      alert("Crewing Agent details submitted successfully!");
      setFormData({
        agentName: "",
        shortName: "",
        address: "",
        contactPersonTitle: "",
        contactPersonName: "",
        country: "",
        contactNumber: "",
        email: "",
      });
    } else {
      console.error("Unexpected response:", response);
      alert("Failed to submit form. Please try again.");
    }
    navigate("/CrewingAgentTable")
  } catch (error) {
    console.error("Error submitting form:", error);
    if (error.response) {
      // Server responded with a status other than 200 range
      alert(`Error: ${error.response.data.message || "Submission failed"}`);
    } else {
      // Network or other error
      alert("Network error. Please check your connection and try again.");
    }
  }
};

  return (
    <>
    <Navbar />
    <div className="form-wrapper">
    <Link to="/CrewingAgentTable" className="backbtn">Back</Link>
      <div className="form-container">
        <h2>Crewing Agent Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Crewing Agent Name */}
          <div className="form-field">
            <label htmlFor="agentName">Crewing Agent Name:</label>
            <input
              type="text"
              id="agentName"
              name="agentName"
              placeholder="Enter Crewing Agent Name"
              value={formData.agentName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Crewing Agent Short Name */}
          <div className="form-field">
            <label htmlFor="shortName">Crewing Agent Short Name:</label>
            <input
              type="text"
              id="shortName"
              name="shortName"
              placeholder="Enter Crewing Agent Short Name"
              value={formData.shortName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address (TextArea) */}
          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Person */}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contactPerson">Contact Person:</label>
              <select
                id="contactPersonTitle"
                name="contactPersonTitle"
                value={formData.contactPersonTitle}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
              </select>
            </div>
            <div className="form-field">
              <input
                type="text"
                id="contactPersonName"
                name="contactPersonName"
                placeholder="Enter Contact Person Name"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Country and Contact Number */}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="selectCountry">Country:</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="form-field">
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter Contact Number"
                value={formData.contactNumber}
                maxLength={10}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact Email */}
          <div className="form-field">
            <label htmlFor="email">Contact Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Contact Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default CrewingAgentForm;