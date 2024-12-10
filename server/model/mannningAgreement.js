import mongoose from "mongoose";

const ManningAgreementSchema = new mongoose.Schema({
  employerName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  validityType: { type: String, required: true },
  validityDate: { type: Date, required: true },
  agreementType: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("ManningAgreement", ManningAgreementSchema);
