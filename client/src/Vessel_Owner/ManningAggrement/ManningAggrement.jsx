import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./manningAggrement.css";
import axios from "axios";
// import RpsDashboard from "../RPS DashBoard/RpsDashboard.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.jsx";


const ManningAgrrement = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    email: "",
    address: "",
    contact: "",
    validityType: "Permanent", // Default value
    validityDate: "",
    agreementType: "",
    aggrementformvii: "",
    manningAgree: "",
  });

  const navigate =useNavigate();

  const [errors, setErrors] = useState({});
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);


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

  const validate = () => {
    const newErrors = {};
    if (!formData.employerName) newErrors.employerName = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.contact) newErrors.contact = "Contact is required.";
    if (!formData.validityDate) newErrors.validityDate = "Validity date is required.";
    if (!formData.agreementType) newErrors.agreementType = "Agreement Type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddToList = async () => {
    if (!validate()) {
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      const response = await fetch("http://3.110.185.220:8000/api/manningAgreement", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Data added to list successfully!");

        fetch("http://3.110.185.220:8000/api/manningAgreement")
          .then((res) => res.json())
          .then((data) => {
            setAgreements(data.data);
            navigate("/ManningAggrementDisplay");
          })
          .catch((err) => {
            console.error("Failed to fetch agreements:", err);
          });

        handleReset();
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      toast.error("Error during data submission");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      const response = await fetch("http://localhost:5000/api/manningAgreement", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message || "Data saved successfully!");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Error during data submission");
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
      aggrementformvii: "",
      manningAgree: "",
    });
    setErrors({});
  };

  return (
    <>
      {/* <RpsDashboard /> */}
      <Navbar />
      <div className="agreement-form-body">
        <div className="agreement-form">
          <h2>Manning Agreement with the employer</h2>

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
                {errors.employerName && <p className="error">{errors.employerName}</p>}
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
                {errors.email && <p className="error">{errors.email}</p>}
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
                {errors.address && <p className="error">{errors.address}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact *</label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  maxLength={10}
                  value={formData.contact || ""}
                  onChange={handleInputChange}
                  required
                />
                {errors.contact && <p className="error">{errors.contact}</p>}
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
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
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
              {errors.validityDate && <p className="error">{errors.validityDate}</p>}
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
              {errors.agreementType && <p className="error">{errors.agreementType}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="aggrementformvii">Agreement (Form VII) upload</label>
              <input
                id="aggrementformvii"
                type="file"
                name="aggrementformvii"
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="manningAgree">
                Supported By Manning Agreement (if with manager chain of Agreement)
              </label>
              <input
                id="manningAgree"
                type="file"
                name="manningAgree"
                onChange={handleFileChange}
              />
            </div>

            <div className="button-row">
              {/* <button type="button">Back</button> */}
              <button type="button" onClick={handleAddToList}>
                Add to List
              </button>
              <button type="reset" onClick={handleReset}>
                Reset
              </button>
              {/* <button type="submit">Next</button> */}
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default ManningAgrrement;
