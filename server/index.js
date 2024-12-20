import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";
import shipRoutes from "./routes/userRoute.js"
import path from 'path'; 
// const path = require("path");
import { fileURLToPath } from 'url';

const app = express();
// app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use(express.json()); //if ship form not working please uncomment
app.use(express.urlencoded({ extended: true }));

// Use ship routes
app.use(shipRoutes);
// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Get the directory path

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/ManningAggrementDocuments', express.static(path.join(__dirname, 'ManningAggrementDocuments')));
app.use('/CompanyProfileDocuments', express.static(path.join(__dirname, 'CompanyProfileDocuments')));

const PORT = process.env.PORT || 8001;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB Connected Successfully.");
    app.listen(PORT,() => {
      console.log(`Server is running on port :${PORT}`);
      // console.log(`Server is running on URL :${MONGOURL}`);
    });
  }) 
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", route);

