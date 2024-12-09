// server/routes/userRoute.js
import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/userController.js";
import { createSeafarerDetails } from "../controller/seafererController.js"; // Updated import for Seafarer Controller

const route = express.Router();

// User routes
route.post("/user", create); // Add a new user
route.get("/users", getAllUsers); // Fetch all users
route.get("/user/:id", getUserById); // Fetch a user by ID
route.put("/update/user/:id", update); // Update a user by ID
route.delete("/delete/:id", deleteUser); // Delete a user by ID

// Seafarer details route
route.post("/seafarerdetails", createSeafarerDetails); // Handle the POST request to submit seafarer details

export default route;
