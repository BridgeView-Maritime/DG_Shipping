
import mongoose from "mongoose";

const shipDetailsSchema = new mongoose.Schema({
  employer: { type: String, required: true },
  nameOfShip: { type: String, required: true },
  imoNumber: { type: String, required: true },
  officialNumber: { type: String },
  callSign: { type: String },
  grossTonnage: { type: String },
  kiloWatt: { type: String },
  shipType: { type: String },
  shipFlag: { type: String },
  seaAgreement: {
    originalName: String,
    filePath: String,
  },
  cbaRef: { type: String },
  cbaAgreement: {
    originalName: String,
    filePath: String,
  },
  piNumber: { type: String },
  policyDate: { type: Date },
  piDoc: {
    originalName: String,
    filePath: String,
  },
  mlcCert: { type: String },
  mlcExpiryDate: { type: Date },
  mlcIssueDate: { type: Date },
  mlcCertDoc: {
    originalName: String,
    filePath: String,
  },
  financialDocNum: { type: String },
  financialDocValidity: { type: Date },
  financialDoc: {
    originalName: String,
    filePath: String,
  },
  dmlcPart1: {
    originalName: String,
    filePath: String,
  },
  dmlcPart2: {
    originalName: String,
    filePath: String,
  },
});

const ShipDetails = mongoose.model("ShipDetails", shipDetailsSchema);
export default ShipDetails;
