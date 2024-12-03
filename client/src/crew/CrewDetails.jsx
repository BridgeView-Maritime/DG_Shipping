import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./CrewDetails.css";

const CrewDetails = () => {
  // State to hold the form data
  const [crewDetails, setCrewDetails] = useState({
    name: "",
    phone: "",
    email: "",
    passportNumber: "",
    cdcNumber: "",
    indosNumber: "",
    address: "",
  });

  // Handle form input changes
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCrewDetails({
      ...crewDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/crewdetails", crewDetails);
      toast.success("Crew details submitted successfully", { position: "top-right" });
      setCrewDetails({ name: "", phone: "", email: "", passportNumber: "", cdcNumber: "", indosNumber: "", address: "" });
    } catch (error) {
      toast.error("Failed to submit crew details", { position: "top-right" });
    }
  };

  return (
    <div className="crewDetailsForm">
      <h2>Submit Crew Details</h2>
      <form onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={crewDetails.name}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={crewDetails.phone}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={crewDetails.email}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>Passport Number:</label>
          <input
            type="text"
            name="passportNumber"
            placeholder="Enter your passport number"
            value={crewDetails.passportNumber}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>CDC Number:</label>
          <input
            type="text"
            name="cdcNumber"
            placeholder="Enter your CDC number"
            value={crewDetails.cdcNumber}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>INDOS Number:</label>
          <input
            type="text"
            name="indosNumber"
            placeholder="Enter your INDOS number"
            value={crewDetails.indosNumber}
            onChange={inputHandler}
            required
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={crewDetails.address}
            onChange={inputHandler}
            required
          />
        </div>

        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default CrewDetails;
