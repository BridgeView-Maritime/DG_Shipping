import React, { useEffect, useState } from "react";
import "./VesselForm.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.jsx";

const VesselForm = () => {
  const [formData, setFormData] = useState({
    employer: "",
    nameOfShip: "",
    imoNumber: "",
    officialNumber: "",
    callSign: "",
    grossTonnage: "",
    kiloWatt: "",
    shipType: "",
    shipFlag: "",
    seaAggrement: "",
    cbaRef: "",
    cbaaggrement: "",
    piNumber: "",
    policydate: "",
    piDoc: "",
    mlcCert: "",
    mlcExpiryDate: "",
    mlcIssueDate: "",
    mlcCertDoc: "",
    financialDocnum: "",
    finnancialdocValidity: "",
    financialDoc: "",
    dmlcPart1: "",
    dmlcPart2: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch the company data based on the id
      axios   
        .get(`http://65.2.6.57:8000/api/vesselOwnerform/${id}`) // Adjust the endpoint to match your API
        .then((response) => {
          const companyData = response.data;
          setFormData((prevData) => ({
            ...prevData,
            employer: companyData.data.companyName || "", // Set the employer field to companyName
          }));
        })
        .catch((error) => {
          console.error("Error fetching company data:", error);
        });
    }
  }, [id]);

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

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");
    const FormDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        if (formData[key] instanceof File) {
          FormDataToSend.append(key, formData[key]);
        } else {
          FormDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      const response = await axios.post(
        "http://65.2.6.57:8000/api/vesselform",
        FormDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response", response.data);
      navigate("/vessel_Table");
    } catch (error) {
      console.error("Error uploading form data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="ship-form-container">
        <h2>Ship Details</h2>
       <Link to="/vessel_Table" className="Vesselbackbtn">Back</Link>
        <form className="shipContainer" onSubmit={handlesubmit}>
          {/* Ship Details Section */}
          <div className="form-section">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="employer">Employer *</label>
                <input
                  type="text"
                  id="employer"
                  name="employer"
                  value={formData.employer}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="nameOfShip">Name of Ship *</label>
                <input
                  type="text"
                  id="nameOfShip"
                  name="nameOfShip"
                  value={formData.nameOfShip}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="imoNumber">IMO Number *</label>
                <input
                  type="text"
                  id="imoNumber"
                  name="imoNumber"
                  value={formData.imoNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="officialNumber">
                  Official Number(if any) *
                </label>
                <input
                  type="number"
                  id="officialNumber"
                  name="officialNumber"
                  value={formData.officialNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="callSign">Call Sign *</label>
                <input
                  type="text"
                  id="callSign"
                  name="callSign"
                  value={formData.callSign}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="grossTonnage">Gross Tonnage *</label>
                <input
                  type="text"
                  id="grossTonnage"
                  name="grossTonnage"
                  value={formData.grossTonnage}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="kiloWatt">Kilo Watt *</label>
                <input
                  type="text"
                  id="kiloWatt"
                  name="kiloWatt"
                  value={formData.kiloWatt}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="shipType">Ship Type *</label>
                <input
                  type="text"
                  id="shipType"
                  name="shipType"
                  value={formData.shipType}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="shipFlag">Ship Flag *</label>
                <input
                  type="text"
                  id="shipFlag"
                  name="shipFlag"
                  value={formData.shipFlag}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row sea-row">
              <div className="form-col">
                <label htmlFor="sea" className="seaAggrement">
                  Seafarer Employment Agreement (SEA) *
                </label>
                <input
                  type="file"
                  id="seaAggrement"
                  name="seaAggrement"
                  className="seaAggrementinput"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="cbaRef" className="cbaref">
                  Does SEA refer to Collective Bargaining Agreement (CBA)? *
                </label>
                <select
                  id="cbaRef"
                  name="cbaRef"
                  value={formData.cbaRef}
                  onChange={handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="form-row cba-row">
              <div className="form-col">
                <label htmlFor="cba" className="cbaaggrement">
                  Collective Bargaining Agreement (CBA) *
                </label>
                <input
                  type="file"
                  id="cbaaggrement"
                  name="cbaaggrement"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          {/* P&I Details Section */}
          <h3>P&I Details</h3>
          <div className="form-section">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="piNumber">P&I Policy Number *</label>
                <input
                  type="text"
                  id="piNumber"
                  name="piNumber"
                  value={formData.piNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label>Policy Date Of Validity</label>
                <input
                  type="date"
                  id="policydate"
                  name="policydate"
                  value={formData.policydate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col file-input">
                <label htmlFor="piDoc">P&I Policy Document *</label>
                <input
                  type="file"
                  id="piDoc"
                  name="piDoc"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          {/* MLC Details Section */}
          <h3>MLC Details</h3>
          <div className="form-section">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="mlcCert">MLC Certificate No. *</label>
                <input
                  type="text"
                  id="mlcCert"
                  name="mlcCert"
                  value={formData.mlcCert}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="mlcExpiryDate">Date of Expiry *</label>
                <input
                  type="date"
                  id="mlcExpiryDate"
                  name="mlcExpiryDate"
                  value={formData.mlcExpiryDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-col">
              <label htmlFor="mlcIssueDate">
                Date of Issue of MLC Certificate*
              </label>
              <input
                type="date"
                id="mlcIssueDate"
                name="mlcIssueDate"
                value={formData.mlcIssueDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="mlcCertDoc">
                  MLC(Maritime Labour Convention) Certificate*
                </label>
                <input
                  type="file"
                  id="mlcCertDoc"
                  name="mlcCertDoc"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="financialDocnum">
                  Financial Security Document Number*
                </label>
                <input
                  type="number"
                  id="financialDocnum"
                  name="financialDocnum"
                  value={formData.financialDocnum}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-col">
                <label htmlFor="finnancialdocValidity">
                  Financial Security Document Validity*
                </label>
                <input
                  type="date"
                  id="finnancialdocValidity"
                  name="finnancialdocValidity"
                  value={formData.finnancialdocValidity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="financialDoc">
                  Financial Security Document *
                </label>
                <input
                  type="file"
                  id="financialDoc"
                  name="financialDoc"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="dmlcPart1">DMLC Part 1 *</label>
                <input
                  type="file"
                  id="dmlcPart1"
                  name="dmlcPart1"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="dmlcPart2">DMLC Part 2 *</label>
                <input
                  type="file"
                  id="dmlcPart2"
                  name="dmlcPart2"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default VesselForm;
