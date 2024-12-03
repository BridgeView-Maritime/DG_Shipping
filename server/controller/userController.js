// userController.js

// Create new user
export const create = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Logic for creating a user (you would typically save this to a database)
    const newUser = { name, email, phone };

    // Simulating saving to DB (this should be replaced with actual DB code)
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    // Simulating fetching users from DB
    const users = [{ name: "John", email: "john@example.com" }, { name: "Jane", email: "jane@example.com" }];
    
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Simulate fetching a user by ID
    const user = { id, name: "John", email: "john@example.com" }; // Replace with actual DB lookup
    
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// Update user
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    // Simulate updating a user in the DB
    const updatedUser = { id, name, email, phone };

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Simulate deleting a user from DB
    res.status(200).json({ message: `User with id ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};
