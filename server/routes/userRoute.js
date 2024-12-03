// server/routes/userRoute.js
import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/userController.js";
import { createCrewDetails } from "../controller/crewController.js"; // Importing from updated path

const route = express.Router();

// User routes
route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/:id", deleteUser);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details

export default route;
