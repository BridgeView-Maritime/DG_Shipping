import bcrypt from "bcryptjs"; // To securely hash passwords
import User from "../model/signupModel.js"; // Import your User model
// import Login from "../model/loginModel.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required!" });
  }

  try {
    // Check if user exists by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Compare the provided password with the stored password in the database
    if (password !== user.password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // Login successful - Redirect to /dashboard
    res.status(200).json({ message: "Login successful!", redirectUrl: "/add" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Controller to handle user signup
export const signup = async (req, res) => {
  const { email, username, password, confirmpassword } = req.body;
  console.log("Request body:", req.body);

  // Validate if all fields are provided
  if (!email || !username || !password || !confirmpassword) {
    console.log("Missing fields:", { email, username, password, confirmpassword });
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Validate that password and confirmpassword match
  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Passwords do not match!" });
  }

  try {
    // Check if user already exists
    console.log("Checking if user exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create the user, excluding confirmpassword from being saved
    const { confirmpassword, ...userData } = req.body;
    const newUser = new User({ ...userData });
    await newUser.save();

    console.log("User signed up successfully!");
    res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: error.message });
  }
};



