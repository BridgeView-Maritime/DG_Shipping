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

import { login, signup } from "../controller/loginController.js";
import { createCompanyProfile , getCompanyProfile} from "../controller/companyprofileController.js";


const route = express.Router();

// User routes
route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/:id", deleteUser);
route.post("/login", login);
route.post("/signup", signup);
route.post("/companyprofile", createCompanyProfile);
// route.post("/companyprofile", upload.single("file"), createCompanyProfile); 
route.get("/companyprofile", getCompanyProfile);
// route.post("/upload", createCompanyProfile);

// File upload route
// route.post("/upload", upload.single("file"), uploadFile);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details

export default route;
