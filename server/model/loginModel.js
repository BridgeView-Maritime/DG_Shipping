import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate emails
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", loginSchema);
export default User;
