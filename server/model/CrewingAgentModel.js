import mongoose from "mongoose";

const crewingAgentSchema = new mongoose.Schema({
  agentName: { type: String, required: true },
  shortName: { type: String, required: true },
  address: { type: String, required: true },
  contactPerson: {
    title: { type: String, required: true },
    name: { type: String, required: true },
  },
  country: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
});


const CrewingAgent = mongoose.model("CrewingAgent", crewingAgentSchema);
export default CrewingAgent;