
import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/userController.js";
import { createCrewDetails } from "../controller/crewController.js"; 

import { login, signup } from "../controller/loginController.js";
import { createCrewprofile , ComapanyuploadMiddleware, getCrewingAgent} from "../controller/companyprofileController.js";
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

//Crewing Agent route
route.post("/crewingAgent",ComapanyuploadMiddleware, createCrewprofile); 
route.get("/crewingAgentTable", getCrewingAgent);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details

//manningAgrement Route
route.post("/manningAgreement", manninguploadMiddleware, createManningAgreement);
route.get("/manningAgreement", getAgreement);

//vessel Form route
route.post("/vesselform", uploadMiddleware, createshipDetails);
route.get("/vesselform", getshipDetails)

export default route;
