import mongoose from "mongoose";

const vesselManagerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyDocument: { type: String, required: true }, // File name or URL
  companyShortName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  title: { type: String, required: true },
  personName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  companyPAN: { type: String, required: true },
  companyGST: { type: String, required: true },
  country: { type: String, required: true },
  crewingTitle: { type: String, required: true },
  crewingPersonName: { type: String, required: true },
  crewingDate: { type: Date, required: true },
  crewingPhoneNumber: { type: String, required: true },
  crewingEmail: { type: String, required: true },
  accountsTitle: { type: String, required: true },
  accountsPersonName: { type: String, required: true },
  accountsPhoneNumber: { type: String, required: true },
  accountsEmail: { type: String, required: true },
});

const VesselManager = mongoose.model("VesselManager", vesselManagerSchema);

export default VesselManager;
