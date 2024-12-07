import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/userController.js";

import { login, signup } from "../controller/loginController.js";
import { createCompanyProfile , getCompanyProfile} from "../controller/companyprofileController.js"


const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/:id", deleteUser);
route.post("/login", login);
route.post("/signup", signup);
route.post("/companyprofile", createCompanyProfile);
route.get("/companyprofile", getCompanyProfile);
route.post("/upload", createCompanyProfile);

export default route;
