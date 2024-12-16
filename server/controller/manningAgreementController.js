import ManningAgreement from "../model/mannningAgreement.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "ManningAggrementDocuments/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export const createManningAgreement = async (req, res) => {
  try {
    // Extract form data from the request body
    const {
      employerName,
      email,
      address,
      contact,
      validityType,
      validityDate,
      agreementType,
      aggrementformvii,
      manningAgree,
    } = req.body;

    // Create a new agreement document
    const newAgreement = new ManningAgreement({
      employerName,
      email,
      address,
      contact,
      validityType,
      validityDate,
      agreementType,
      aggrementformvii: req.files?.aggrementformvii
        ? {
            originalName: req.files.aggrementformvii[0].originalname,
            filePath: req.files.aggrementformvii[0].path,
          }
        : null,
      manningAgree: req.files?.manningAgree
        ? {
            originalName: req.files.manningAgree[0].originalname,
            filePath: req.files.manningAgree[0].path,
          }
        : null,
    });

    // Save to the database
    const savedAgreement = await newAgreement.save();
    res.status(201).json({
      message: "Manning Agreement created successfully",
      data: savedAgreement,
    });
  } catch (error) {
    console.error("Error creating Manning Agreement:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const manninguploadMiddleware = upload.fields([
  { name: "aggrementformvii", maxCount: 1 },
  { name: "manningAgree", maxCount: 1 },
]);

export const getAgreement = async (req, res) => {
  try {
    // Fetch agreements from the database
    const agreements = await ManningAgreement.find();

    // Send a successful response
    return res.status(200).json({
      success: true,
      data: agreements,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching agreements:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch agreements.",
    });
  }
};
