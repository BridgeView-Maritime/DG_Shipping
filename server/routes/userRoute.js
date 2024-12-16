
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
import { createCompanyProfile , ComapanyuploadMiddleware, getCompanyProfile} from "../controller/companyprofileController.js";
import { createManningAgreement, getAgreement , manninguploadMiddleware} from "../controller/manningAgreementController.js";
import { createshipDetails, uploadMiddleware, getshipDetails} from "../controller/shipdetailsController.js";

const route = express.Router();

// User routes
route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/:id", deleteUser);
route.post("/login", login);
route.post("/signup", signup);

//comapany profile route
route.post("/companyprofile",ComapanyuploadMiddleware, createCompanyProfile); 
route.get("/companyprofile", getCompanyProfile);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details

//manningAgrement Route
route.post("/manningAgreement", manninguploadMiddleware, createManningAgreement);
route.get("/manningAgreement", getAgreement);

//ship route
route.post("/shipDetails", uploadMiddleware, createshipDetails);
route.get("/shipDetails", getshipDetails)

export default route;
