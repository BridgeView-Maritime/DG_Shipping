import React from "react";
import "./ship.css";
import RpsDashboard from "../RPS DashBoard/RpsDashboard.jsx"

const Ship = () => {
  return (
    <>
    <RpsDashboard />
    <div className="ship-form-container">
      <h2>Ship Details</h2>
      <form className="shipContainer">
        {/* Ship Details Section */}
        <div className="form-section">
        <div className="form-row">
            <div className="form-col">
              <label htmlFor="employer">Employer *</label>
              <input type="text" id="employer" />
            </div>
            </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="nameOfShip">Name of Ship *</label>
              <input type="text" id="nameOfShip" />
            </div>
            <div className="form-col">
              <label htmlFor="imoNumber">IMO Number *</label>
              <input type="text" id="imoNumber" />
            </div>
          </div>

          <div className="form-row">
          <div className="form-col">
              <label htmlFor="officialNumber">Official Number(if any) *</label>
              <input type="number" id="officialNumber" />
            </div>          
            <div className="form-col">
              <label htmlFor="callSign">Call Sign *</label>
              <input type="text" id="callSign" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label htmlFor="grossTonnage">Gross Tonnage *</label>
              <input type="text" id="grossTonnage" />
            </div>
            <div className="form-col">
              <label htmlFor="kiloWatt">Kilo Watt *</label>
              <input type="text" id="kiloWatt" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label htmlFor="shipType">Ship Type *</label>
              <input type="text" id="shipType" />
            </div>
            <div className="form-col">
              <label htmlFor="shipFlag">Ship Flag *</label>
              <input type="text" id="shipFlag" />
            </div>
          </div>

          <div className="form-row sea-row">
            <div className="form-col">
              <label htmlFor="sea" className="seaAggrement">Seafarer Employment Agreement (SEA) *</label>
              <input type="file" id="sea" className="seaAggrementinput"/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label htmlFor="cbaRef" className="cbaref">Does SEA refer to Collective Bargaining Agreement (CBA)? *</label>
              <select id="cbaRef">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            </div>
            <div className="form-row cba-row">
            <div className="form-col">
              <label htmlFor="cba" className="cbaaggrement">Collective Bargaining Agreement (CBA) *</label>
              <input type="file" id="cba" />
            </div>
          </div>
        </div>

        {/* P&I Details Section */}
        <h3>P&I Details</h3>
        <div className="form-section">
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="piNumber">P&I Policy Number *</label>
              <input type="text" id="piNumber" />
            </div>
            <div className="form-col">
                <label>Policy Date Of Validity</label>
                <input type="number" id="policydate"/>
            </div>
            </div>
            <div className="form-row">
            <div className="form-col file-input">
              <label htmlFor="piDoc">P&I Policy Document *</label>
              <input type="file" id="piDoc" />
            </div>
          </div>
        </div>

        {/* MLC Details Section */}
        <h3>MLC Details</h3>
        <div className="form-section">
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="mlcCert">MLC Certificate No. *</label>
              <input type="text" id="mlcCert" />
            </div>
            <div className="form-col">
              <label htmlFor="mlcExpiryDate">Date of Expiry *</label>
              <input type="date" id="mlcExpiryDate" />
            </div>
          </div>
          <div className="form-col">
              <label htmlFor="mlcIssueDate">Date of Issue of MLC Certificate*</label>
              <input type="date" id="mlcIssueDate" />
            </div>
            
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="mlcCertDoc">MLC(Maritime Labour Convention) Certificate*</label>
              <input type="file" id="mlcCertDoc" />
            </div>
           
          </div>

          <div className="form-row">
            <div className="form-col">
              <label htmlFor="financialDocnum">Financial Security Document Number*</label>
              <input type="number" id="financialDocnum" />
            </div>
            <div className="form-col">
                <label htmlFor="finnancialdocValidity">Financial Security Document Validity*</label>
                <input type="date" id="finnancialdocValidity"/>
            </div>
          </div>
          <div className="form-row">
          <div className="form-col">
              <label htmlFor="financialDoc">Financial Security Document *</label>
              <input type="file" id="financialDoc" />
            </div>
            </div>
            <div className="form-row">
          <div className="form-col">
              <label htmlFor="dmlcPart1">DMLC Part 1 *</label>
              <input type="file" id="dmlcPart1" />
            </div>
            </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="dmlcPart2">DMLC Part 2 *</label>
              <input type="file" id="dmlcPart2" />
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

export default Ship;
