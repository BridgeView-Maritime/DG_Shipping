
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
import { createManningAgreement, getAgreement } from "../controller/manningAgreementController.js";


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
route.get("/companyprofile", getCompanyProfile);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details
route.post("/manningAgreement", createManningAgreement);
route.get("/manningAgreement", getAgreement);

export default route;
