import VesselOwner from "../model/VesselOwnerFormModel.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Documents/VesselOwnerFormDocuments/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const CreateVesselOwner = async (req, res) => {
  try {
    const {
      companyName,
      companyShortName,
      phoneNumber,
      title,
      personName,
      email,
      address,
      companyPAN,
      companyGST,
      country,
      crewingTitle,
      crewingPersonName,
      crewingDate,
      crewingPhoneNumber,
      crewingEmail,
      personalcrewingTitle,
      personalcrewingPersonName,
      personalcrewingDate,
      personalcrewingPhoneNumber,
      personalcrewingEmail,
      accountsTitle,
      accountsPersonName,
      accountsPhoneNumber,
      accountsEmail,
      anotherAccountsTitle,
      anotherAccountsPersonName,
      anotherAccountsPhoneNumber,
      anotherAccountsEmail,
    } = req.body;

    // Create a new VesselOwner document
    const newVesselOwner = new VesselOwner({
      companyName,
      companyDocument: req.files?.companyDocument
        ? {
            originalName: req.files.companyDocument[0].originalname,
            filePath: req.files.companyDocument[0].path,
          }
        : null,
      companyShortName,
      phoneNumber,
      title,
      personName,
      email,
      address,
      companyPAN,
      companyGST,
      country,
      crewingTitle,
      crewingPersonName,
      crewingDate,
      crewingPhoneNumber,
      crewingEmail,
      personalcrewingTitle,
      personalcrewingPersonName,
      personalcrewingDate,
      personalcrewingPhoneNumber,
      personalcrewingEmail,
      accountsTitle,
      accountsPersonName,
      accountsPhoneNumber,
      accountsEmail,
      anotherAccountsTitle,
      anotherAccountsPersonName,
      anotherAccountsPhoneNumber,
      anotherAccountsEmail,
    });

    await newVesselOwner.save();

    res
      .status(201)
      .json({ message: "Form submitted successfully", data: newVesselOwner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting form", error });
  }
};

export const VesselOwnerFormMiddleware = upload.fields([
  { name: "companyDocument", maxCount: 1 },
]);

export const getVesselOwnerForm = async (req, res) => {
  try {
    // Fetch all vessel owner documents from the database
    const vesselOwners = await VesselOwner.find();  // Use find() to retrieve all records

    // If no data is found, return an appropriate message
    if (!vesselOwners || vesselOwners.length === 0) {
      return res.status(404).json({ message: "No vessel owner data found" });
    }

    // Return the data
    res.status(200).json({ message: "Vessel owner data fetched successfully", data: vesselOwners });
  } catch (error) {
    console.error("Error fetching vessel owner data: ", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};

export const getVesselOwnerFormById = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from the URL parameters
    
    // Use Mongoose's findById() method to fetch the specific document
    const vesselOwner = await VesselOwner.findById(id);

    // If the vessel owner with the given id is not found
    if (!vesselOwner) {
      return res.status(404).json({ message: "Vessel owner not found" });
    }

    // Return the specific vessel owner data
    res.status(200).json({ message: "Vessel owner data fetched successfully", data: vesselOwner });
  } catch (error) {
    console.error("Error fetching vessel owner data by ID:", error);
    res.status(500).json({ message: "Error fetching data", error });
  }
};
