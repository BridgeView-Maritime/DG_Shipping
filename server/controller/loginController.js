import Signup from "../model/signupModel.js";
import Login from "../model/loginModel.js"

export const login = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required!" });
  }

  try {
    // Find user by username in the Signup model
    const user = await Signup.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }

    // Compare password (plain-text comparison)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }

    // Send success response and redirect URL
    return res.status(200).json({ message: "Login successful!", redirectUrl: "/Dashboard" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "An error occurred during login" });
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
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create the user, excluding confirmpassword from being saved
    const { confirmpassword, ...userData } = req.body;
    const newUser = new Signup({ ...userData });
    console.log("newuser", newUser)
    await newUser.save();

    console.log("User signed up successfully!");
    res.status(201).json({ message: "User data signed up successfully!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: error.message });
  }
};



