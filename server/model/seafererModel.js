// seafererModel.js

import mongoose from "mongoose";

// Schema for Personal Details
const personalDetailsSchema = new mongoose.Schema({
  indosNumber: { type: String, required: true, unique: true },
  surname: { type: String, required: true },
  givenName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true }, // Date of birth
  placeOfBirth: { type: String, required: true },
  birthState: { type: String, required: true },
  birthCountry: { type: String, required: true },
  nationality: { type: String, required: true },
  discipline: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
});

// Schema for Address Details
const addressDetailsSchema = new mongoose.Schema({
  present: {
    roomHouseNo: { type: String, required: true },
    streetName: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    pin: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  permanent: {
    roomHouseNo: { type: String, required: true },
    streetName: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    pin: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
});

// Schema for Physical Details
const physicalDetailsSchema = new mongoose.Schema({
  height: { type: Number, required: true }, // Height in cm
  eyeColor: { type: String, required: true },
  identificationMark: { type: String, default: "N/A" }, // Default "N/A" if not provided
  hairColor: { type: String, required: true },
  complexion: { type: String, required: true },
});

// Combined Schema for SeafarerDetails
const seafarerSchema = new mongoose.Schema(
  {
    personalDetails: { type: personalDetailsSchema, required: true },
    addressDetails: { type: addressDetailsSchema, required: true },
    physicalDetails: { type: physicalDetailsSchema, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the Model
const SeafarerDetails = mongoose.model("SeafarerDetails", seafarerSchema);

export default SeafarerDetails;
