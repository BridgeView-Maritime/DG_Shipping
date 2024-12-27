import VesselManager from "../model/VesselManagerModel.js";
import multer from "multer";
 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Documents/VesselManagerDocuments/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const createVesselManager = async (req, res) => {
  try {
    const {
      companyName,
      companyDocument,
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
      accountsTitle,
      accountsPersonName,
      accountsPhoneNumber,
      accountsEmail,
    } = req.body;

    const newVesselManager = new VesselManager({
      companyName,
      companyDocument, // For simplicity, assume we are storing the file name or URL
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
      accountsTitle,
      accountsPersonName,
      accountsPhoneNumber,
      accountsEmail,
    });

    await newVesselManager.save();
    res.status(201).json({ message: "Vessel Manager created successfully", data: newVesselManager });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};


