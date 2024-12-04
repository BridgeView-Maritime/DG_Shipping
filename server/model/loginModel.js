import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate usernames
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Login", loginSchema, "Login");
