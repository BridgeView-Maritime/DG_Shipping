import React, { useState } from "react";
import "./VesselOwnerForm.css";
import axios from "axios";


const VesselOwnerForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDocument: {
      originalName: "",
      filePath: "",
    },
    companyShortName: "",
    phoneNumber: "",
    title: "Mr.",
    personName: "",
    email: "",
    address: "",
    companyPAN: "",
    companyGST: "",
    country: "India",
    crewingTitle: "Mr.",
    crewingPersonName: "",
    crewingDate: "",
    crewingPhoneNumber: "",
    crewingEmail: "",
    personalcrewingTitle: "Mr.",
    personalcrewingPersonName: "",
    personalcrewingDate: "",
    personalcrewingPhoneNumber: "",
    personalcrewingEmail: "",
    accountsTitle: "Mr.",
    accountsPersonName: "",
    accountsPhoneNumber: "",
    accountsEmail: "",
    anotherAccountsTitle: "Mr.",
    anotherAccountsPersonName: "",
    anotherAccountsPhoneNumber: "",
    anotherAccountsEmail: "",
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

    try{
      const response = await axios.post("http://localhost:8000/api/vesselOwnerform", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", 
        }},)

        if (response.status === 200) {
          console.log(response.data.message || "Data saved successfully!");
        } else {
          console.log(response.data.message || "Something went wrong.");
        }
    }catch(err){
      console.log(err)
    }

  };

  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    // Add more countries as needed
  ];

  return (
    <>
      <div className="container">
        <h2>Company Information Form</h2>
        <div className="add-back-button">
          <button className="backbtn">Back</button>
          <h2>Add/Edit Company</h2>
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

          {/* second time same functionality */}
          <div className="form-group">
            <label>Name of Crewing Team Personnel</label>
            <div className="flex-row">
              <select
                name="personalcrewingTitle"
                value={formData.personalcrewingTitle}
                onChange={handleInputChange}
              >
                <option value="MR.">MR.</option>
                <option value="MRS.">MRS.</option>
                <option value="MISS">MISS</option>
              </select>
              <input
                type="text"
                name="personalcrewingPersonName"
                value={formData.personalcrewingPersonName}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
              />
              <input
                type="date"
                name="personalcrewingDate"
                value={formData.personalcrewingDate}
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
                name="personalcrewingPhoneNumber"
                value={formData.personalcrewingPhoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                name="personalcrewingEmail"
                value={formData.personalcrewingEmail}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
          </div>

          <h2>Name of Accounting Team Personnel</h2>
          {/* Name of Person in Accounts Department */}
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

          {/* Phone Number/Email of Accounts Department */}
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
          {/* Name of Another Person in Accounts Department */}
          <div className="form-group">
            <label>Name of Another Person in Accounts Department</label>
            <div className="flex-row">
              <select
                name="anotherAccountsTitle"
                value={formData.anotherAccountsTitle}
                onChange={handleInputChange}
              >
                <option value="MR.">MR.</option>
                <option value="MRS.">MRS.</option>
                <option value="MISS">MISS</option>
              </select>
              <input
                type="text"
                name="anotherAccountsPersonName"
                value={formData.anotherAccountsPersonName}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
              />
            </div>
          </div>

          {/* Phone Number/Email of Another Accounts Department */}
          <div className="form-group">
            <label>Phone Number/Email of Another Accounts Department</label>
            <div className="flex-row">
              <input
                type="tel"
                name="anotherAccountsPhoneNumber"
                value={formData.anotherAccountsPhoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                name="anotherAccountsEmail"
                value={formData.anotherAccountsEmail}
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

export default VesselOwnerForm;
