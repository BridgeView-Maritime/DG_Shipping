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
  console.log("managerform", req.body);
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

export const VesselManagerMiddleware = upload.fields([
  { name: "companyDocument", maxCount: 1 },
]);

export const getVesselManagerDetails = async (req, res) => {
  try {
    // Fetch all documents from the VesselManager collection
    const vesselManagers = await VesselManager.find();
    res.status(200).json(vesselManagers); // Respond with the data
  } catch (error) {
    console.error("Error fetching Vessel Manager details:", error);
    res.status(500).json({ message: "Server error while fetching Vessel Manager details." });
  }
};