import shipDetails from "../model/shipDetailsModel.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});

const upload = multer({ storage: storage });

// export const createshipDetails = (req, res) => {
//   console.log("req.body", req.body); // Form data except file
//   console.log("req.files:", req.files); // Uploaded file details
//   res.status(200).json({ message: "Ship details received successfully!" });
// };

import ShipDetails from "../model/shipDetailsModel.js";

export const createshipDetails = async (req, res) => {
  try {
    const {
      employer,
      nameOfShip,
      imoNumber,
      officialNumber,
      callSign,
      grossTonnage,
      kiloWatt,
      shipType,
      shipFlag,
      cbaRef,
      piNumber,
      policydate,
      mlcCert,
      mlcExpiryDate,
      mlcIssueDate,
      financialDocnum,
      finnancialdocValidity,
    } = req.body;

    const newShipDetails = new ShipDetails({
      employer,
      nameOfShip,
      imoNumber,
      officialNumber,
      callSign,
      grossTonnage,
      kiloWatt,
      shipType,
      shipFlag,
      cbaRef,
      piNumber,
      policyDate: policydate,
      mlcCert,
      mlcExpiryDate,
      mlcIssueDate,
      financialDocNum: financialDocnum,
      financialDocValidity: finnancialdocValidity,
      seaAgreement: req.files.seaAggrement
        ? {
            originalName: req.files.seaAggrement[0].originalname,
            filePath: req.files.seaAggrement[0].path,
          }
        : null,
      cbaAgreement: req.files.cbaaggrement
        ? {
            originalName: req.files.cbaaggrement[0].originalname,
            filePath: req.files.cbaaggrement[0].path,
          }
        : null,
      piDoc: req.files.piDoc
        ? {
            originalName: req.files.piDoc[0].originalname,
            filePath: req.files.piDoc[0].path,
          }
        : null,
      mlcCertDoc: req.files.mlcCertDoc
        ? {
            originalName: req.files.mlcCertDoc[0].originalname,
            filePath: req.files.mlcCertDoc[0].path,
          }
        : null,
      financialDoc: req.files.financialDoc
        ? {
            originalName: req.files.financialDoc[0].originalname,
            filePath: req.files.financialDoc[0].path,
          }
        : null,
      dmlcPart1: req.files.dmlcPart1
        ? {
            originalName: req.files.dmlcPart1[0].originalname,
            filePath: req.files.dmlcPart1[0].path,
          }
        : null,
      dmlcPart2: req.files.dmlcPart2
        ? {
            originalName: req.files.dmlcPart2[0].originalname,
            filePath: req.files.dmlcPart2[0].path,
          }
        : null,
    });

    const savedDetails = await newShipDetails.save();
    res.status(201).json({
      message: "Ship details saved successfully!",
      data: savedDetails,
    });
  } catch (error) {
    console.error("Error saving ship details:", error);
    res.status(500).json({ error: "Failed to save ship details" });
  }
};


export const uploadMiddleware = upload.fields([
  { name: "seaAggrement", maxCount: 1 },
  { name: "cbaaggrement", maxCount: 1 },
  { name: "piDoc", maxCount: 1 },
  { name: "mlcCertDoc", maxCount: 1 },
  { name: "financialDoc", maxCount: 1 },
  { name: "dmlcPart1", maxCount: 1 },
  { name: "dmlcPart2", maxCount: 1 },
]);
