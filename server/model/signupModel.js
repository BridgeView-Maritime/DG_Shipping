import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Make username required
  },
  email: {
    type: String,
    required: true, // Make email required
    unique: true,   // Ensure email is unique
  },
  password: {
    type: String,
    required: true, // Make password required
  },
});

// You can specify the collection name here if needed
export default mongoose.model("Signup", signupSchema, "Signups");
