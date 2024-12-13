// import mongoose from "mongoose";

// const shipDetailsSchema = new mongoose.Schema({
//   employer: {
//     type: String,
//     required: true,
//   },
//   nameOfShip: {
//     type: String,
//     required: true,
//   },
//   imoNumber: {
//     type: String,
//     required: true,
//   },
//   officialNumber: {
//     type: String,
//     required: true,
//   },
//   callSign: {
//     type: String,
//     required: true,
//   },
//   grossTonnage: {
//     type: String,
//     required: true,
//   },
//   kiloWatt: {
//     type: String,
//     required: true,
//   },
//   shipType: {
//     type: String,
//     required: true,
//   },
//   shipFlag: {
//     type: String,
//     required: true,
//   },
//   seaAggrement: {
//     type: String,
//     required: true,
//   },
//   cbaref: {
//     type: String,
//     required: true,
//   },
//   cbaaggrement: {
//     type: String,
//     required: true,
//   },
//   piNumber: {
//     type: String,
//     required: true,
//   },
//   policydate: {
//     type: String,
//     required: true,
//   },
//   piDoc: {
//     type: String,
//     required: true,
//   },
//   mlcCert: {
//     type: String,
//     required: true,
//   },
//   mlcExpiryDate: {
//     type: String,
//     required: true,
//   },
//   mlcIssueDate: {
//     type : String,
//     required:true,
// },
// mlcCertDoc : {
//     type : String,
//     required:true,
// },
// financialDocnum : {
//   type : String,
//   required: true,
// },
// finnancialdocValidity: {
//     type : String,
//     required:true,
// },
// financialDoc: {
//     type : String,
//     required:true,
// },
// dmlcPart1: {
//     type : String,
//     required:true,
// },
// dmlcPart2: {
//     type : String,
//     required:true,
// },
// });

// export default mongoose.model("shipDetails", shipDetailsSchema);


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
