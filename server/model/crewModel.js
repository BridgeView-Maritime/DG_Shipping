// crewModel.js
import mongoose from "mongoose";

const crewDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  passportNumber: { type: String, required: true },
  cdcNumber: { type: String, required: true },
  indosNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const CrewDetails = mongoose.model("CrewDetails", crewDetailsSchema);

export default CrewDetails;
