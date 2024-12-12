import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./manningAggrement.css";
import axios from "axios";
import RpsDashboard from "../RPS DashBoard/RpsDashboard.jsx"

const ManningAgrrement = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    email: "",
    address: "",
    contact: "",
    validityType: "Permanent", // Default value
    validityDate: "",
    agreementType: "",
  });

  const [errors, setErrors] = useState({});
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/manningAgreement")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched agreements:", data);
  //       setAgreements(data.data);
  //       console.log("data", data);
  //     })
  //     .catch((err) => {
  //       toast.error("Failed to fetch agreements:", err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchAgreements = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/manningAgreement");
        // Assuming the API returns { success: true, data: [...] }
        setAgreements(response.data.data || []); 
        console.log("response", response.data.data)
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch agreements:", error);
        setLoading(false);
      }
    };

    fetchAgreements();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddToList = async () => {
    if (!validate()) {
      console.log("Form validation failed.");
      return;
    }

    const dataToSend = {
      ...formData,
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/manningAgreement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();
      console.log("Result from POST:", result);

      if (response.ok) {
        toast.success("Data added to list successfully!");

        // Re-fetch the agreements list to get the updated list
        fetch("http://localhost:8000/api/manningAgreement")
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched agreements after adding:", data);
            setAgreements(data.data);
          })
          .catch((err) => {
            console.error("Failed to fetch agreements:", err);
          });

        // Reset form fields after successfully adding the data
        handleReset();
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error during adding data to list:", error);
      toast.error("Error during data submission");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("Form validation failed.");
      return;
    }

    const dataToSend = {
      ...formData,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/manningAgreement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message || "Data saved successfully!");
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error during data submission:", error);
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
    });
    setErrors({});
    // toast.success("");
  };

  return (
    <>
    <RpsDashboard />
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

            <div className="button-row">
              <button type="button">Back</button>
              <button type="button" onClick={handleAddToList}>
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

      <div className="agreement-table">
        <h3>Agreements List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employer Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Validity Type</th>
              <th>Validity Date</th>
              <th>Agreement Type</th>
            </tr>
          </thead>
          <tbody>
            {console.log("before",agreements)}
            {agreements.map((agreement, index) => (
              <tr key={agreement._id || index}>
                <td>{agreement._id}</td>
                <td>{agreement.employerName}</td>
                <td>{agreement.email}</td>
                <td>{agreement.address}</td>
                <td>{agreement.contact}</td>
                <td>{agreement.validityType}</td>
                <td>{new Date(agreement.validityDate).toLocaleDateString()}</td>
                <td>{agreement.agreementType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ToastContainer is required to render toasts */}
      <ToastContainer 
      position="top-right" 
      autoClose={5000} 
      toastStyle={{ transition: "bounce" }} />
    </>
  );
};

export default ManningAgrrement;
