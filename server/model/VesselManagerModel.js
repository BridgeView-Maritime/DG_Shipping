import mongoose from "mongoose";

const vesselManagerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyDocument: { 
    originalName: { type: String, required: false },
    filePath: { type: String, required: false }
  },
  companyShortName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  title: { type: String, required: true },
  personName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  companyPAN: { type: String, required: false },
  companyGST: { type: String, required: false },
  country: { type: String, default: "India", required: true },
  crewingTitle: { type: String, required: false },
  crewingPersonName: { type: String, required: false },
  crewingDate: { type: Date, required: false },
  crewingPhoneNumber: { type: String, required: false },
  crewingEmail: { type: String, required: false },
  accountsTitle: { type: String, required: false },
  accountsPersonName: { type: String, required: false},
  accountsPhoneNumber: { type: String, required: false },
  accountsEmail: { type: String, required: false },
});

const VesselManager = mongoose.model("VesselManager", vesselManagerSchema);

export default VesselManager;
