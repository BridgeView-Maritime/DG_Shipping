
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
import { createManningAgreement, getAgreement , manninguploadMiddleware} from "../controller/manningAgreementController.js";
import { createshipDetails, uploadMiddleware, getshipDetails} from "../controller/shipdetailsController.js";
import { CreateVesselOwner, getVesselOwnerForm, getVesselOwnerFormById, VesselOwnerFormMiddleware } from "../controller/VesselOwnerFormController.js";
import { CreateCrewingAgentDetails, GetAllCrewingAgentDetails } from "../controller/CrewingAgentController.js";
import { createVesselManager } from "../controller/VesselManagerController.js";

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
route.post("/crewingAgentDetails", CreateCrewingAgentDetails);
route.get("/crewingAgentDetails", GetAllCrewingAgentDetails);

// Crew details route
route.post("/crewdetails", createCrewDetails); // Handle the POST request to submit crew details

//manningAgrement Route
route.post("/manningAgreement", manninguploadMiddleware, createManningAgreement);
route.get("/manningAgreement", getAgreement);

//vessel Form route
route.post("/vesselform", uploadMiddleware, createshipDetails);
route.get("/vesselform", getshipDetails)

//VesselOwnerForm Route
route.post("/vesselOwnerform", VesselOwnerFormMiddleware, CreateVesselOwner)
route.get("/vesselOwnerform", getVesselOwnerForm)

// New route to fetch vessel owner data by ID
route.get("/vesselOwnerform/:id", getVesselOwnerFormById);

//Vessel Manager Routes
 route.post("/vesselManager", createVesselManager)

export default route;
