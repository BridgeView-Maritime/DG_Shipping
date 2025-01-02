import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";

const VesselManagerForm = () => {
  // List of countries (you can replace this with dynamic data or API call)
  const countries = ["USA", "India", "Germany", "Canada"];

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    companyDocument: {
      originalName: "",
      filePath: "",
    },
    companyShortName: "",
    phoneNumber: "",
    title: "MR.",
    personName: "",
    email: "",
    address: "",
    companyPAN: "",
    companyGST: "",
    country: countries[0] || "",
    crewingTitle: "MR.",
    crewingPersonName: "",
    crewingDate: "",
    crewingPhoneNumber: "",
    crewingEmail: "",
    accountsTitle: "MR.",
    accountsPersonName: "",
    accountsPhoneNumber: "",
    accountsEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]); 
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    try {
      const response = await axios.post("http://bridgeviewships.ae:8000/api/vesselManager", formDataToSend, {
         headers: {
          "Content-Type": "multipart/form-data",
         },
      });
  
      if (response.status === 200) {
        console.log(response.data.message || "Data saved successfully!");
      } else {
        console.log(response.data.message || "Something went wrong.");
      }
      navigate("/VesselManagerTable")
    } catch (err) {
      console.error("Request error:", err);
    }
  };  

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Company Information Form</h2>
      <div className="add-back-button">
        <Link to="/VesselManagerTable" className="backbtn">Back</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyDocument">Company Document Upload</label>
          <input
            type="file"
            id="companyDocument"
            name="companyDocument"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyShortName">Company Short Name</label>
          <input
            type="text"
            id="companyShortName"
            name="companyShortName"
            value={formData.companyShortName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Person Name</label>
          <div className="flex-row">
            <select
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            >
              <option value="MR.">MR.</option>
              <option value="MRS.">MRS.</option>
              <option value="MISS">MISS</option>
            </select>
            <input
              type="text"
              name="personName"
              value={formData.personName}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="companyPAN">Company PAN</label>
          <input
            type="text"
            id="companyPAN"
            name="companyPAN"
            value={formData.companyPAN}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyGST">Company GST</label>
          <input
            type="text"
            id="companyGST"
            name="companyGST"
            value={formData.companyGST}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* New Section for Crewing Team Personnel */}
        <h2>Name of Crewing Team Personnel</h2>
        <div className="form-group">
          <label>Name of Crewing Team Personnel</label>
          <div className="flex-row">
            <select
              name="crewingTitle"
              value={formData.crewingTitle}
              onChange={handleInputChange}
            >
              <option value="MR.">MR.</option>
              <option value="MRS.">MRS.</option>
              <option value="MISS">MISS</option>
            </select>
            <input
              type="text"
              name="crewingPersonName"
              value={formData.crewingPersonName}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
            />
            <input
              type="date"
              name="crewingDate"
              value={formData.crewingDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Phone Number/Email of Crewing Department</label>
          <div className="flex-row">
            <input
              type="tel"
              name="crewingPhoneNumber"
              value={formData.crewingPhoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="crewingEmail"
              value={formData.crewingEmail}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
        </div>

        <h2>Name of Accounting Team Personnel</h2>
        <div className="form-group">
          <label>Name of Person in Accounts Department</label>
          <div className="flex-row">
            <select
              name="accountsTitle"
              value={formData.accountsTitle}
              onChange={handleInputChange}
            >
              <option value="MR.">MR.</option>
              <option value="MRS.">MRS.</option>
              <option value="MISS">MISS</option>
            </select>
            <input
              type="text"
              name="accountsPersonName"
              value={formData.accountsPersonName}
              onChange={handleInputChange}
              placeholder="Enter name"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number/Email of Accounts Department</label>
          <div className="flex-row">
            <input
              type="tel"
              name="accountsPhoneNumber"
              value={formData.accountsPhoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
            <input
              type="email"
              name="accountsEmail"
              value={formData.accountsEmail}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
        </div>

        <button type="submit" className="vesselformbtn">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default VesselManagerForm;
