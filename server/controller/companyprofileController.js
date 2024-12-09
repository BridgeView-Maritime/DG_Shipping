
import fs from 'fs';
import path from 'path';
import CompanyProfile from '../model/companyprofileModel.js';


// const createCompanyProfile = async (req, res) => {
//   try {
//     const companyProfileData = req.body;
//     console.log("req.body", req.body)
//     const companyProfile = new CompanyProfile(companyProfileData);
//     await companyProfile.save();
//     res.status(201).json({ message: 'Company profile created successfully!', data: companyProfile });
//   } catch (error) {
//     console.error('Error creating company profile:', error);
//     res.status(500).json({ message: 'Failed to create company profile', error: error.message });
//   }
// };

// const createCompanyProfile = async (req, res) => {
//   try {
//     // Use multer to handle the file upload and get the file as base64 string
//     upload(req, res, async (err) => {
//       if (err) {
//         return res.status(400).json({ message: err.message });
//       }

//       const { nameOfRPSL, rpslNumber, issueDate, expiryDate, registrationDocuments, rpsLicense, profitLossBalanceSheet, assetsLiabilitiesCertificate, incomeTaxReturns, bankGuarantee } = req.body;

//       // Prepare the formData to be saved in the database
//       const formData = {
//         nameOfRPSL,
//         rpslNumber,
//         issueDate,
//         expiryDate,
//         registrationDocuments: req.file ? req.file.buffer.toString('base64') : registrationDocuments, // Store file as base64
//         rpsLicense: req.file ? req.file.buffer.toString('base64') : rpsLicense, // For file fields, we check if they exist
//         profitLossBalanceSheet: req.file ? req.file.buffer.toString('base64') : profitLossBalanceSheet,
//         assetsLiabilitiesCertificate: req.file ? req.file.buffer.toString('base64') : assetsLiabilitiesCertificate,
//         incomeTaxReturns: req.file ? req.file.buffer.toString('base64') : incomeTaxReturns,
//         bankGuarantee: req.file ? req.file.buffer.toString('base64') : bankGuarantee,
//       };

//       // Create the company profile document
//       const companyProfile = new CompanyProfile(formData);
//       await companyProfile.save();

//       res.status(201).json({ message: 'Company profile created successfully!', data: companyProfile });
//     });
//   } catch (error) {
//     console.error('Error creating company profile:', error);
//     res.status(500).json({ message: 'Failed to create company profile', error: error.message });
//   }
// };

//  const createCompanyProfile = (req, res) => {
//   const form = new formidable.IncomingForm();
  
//   // Directory where files will be uploaded
//   form.uploadDir = path.join(__dirname, '../assets');
//   form.keepExtensions = true;  // Keep the file's original extension

//   // Ensure the 'assets' directory exists
//   const assetsFolder = path.join(__dirname, '../assets');
//   if (!fs.existsSync(assetsFolder)) {
//     fs.mkdirSync(assetsFolder);
//   }

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error('Error parsing the form:', err);
//       return res.status(500).json({ message: 'Failed to parse form', error: err.message });
//     }

//     try {
//       // Process the form data and the uploaded file
//       const companyProfileData = {
//         ...fields,
//         registrationDocuments: files.registrationDocuments ? files.registrationDocuments[0].newFilename : null,
//         // If you need more files, you can add them here in a similar way
//       };

//       // Create the company profile document with file paths
//       const companyProfile = new CompanyProfile(companyProfileData);
//       console.log(companyProfile);
//       await companyProfile.save();

//       res.status(201).json({ message: 'Company profile created successfully!', data: companyProfile });
//     } catch (error) {
//       console.error('Error creating company profile:', error);
//       res.status(500).json({ message: 'Failed to create company profile', error: error.message });
//     }
//   });
// };

export const createCompanyProfile = async (req, res) => {
  try {
    const companyProfileData = req.body;

    // Create the company profile document with the provided form data
    const companyProfile = new CompanyProfile(companyProfileData);
    await companyProfile.save();

    res.status(201).json({ message: 'Company profile created successfully!', data: companyProfile });
  } catch (error) {
    console.error('Error creating company profile:', error);
    res.status(500).json({ message: 'Failed to create company profile', error: error.message });
  }
};

export const getCompanyProfile = async (req, res) => {
  try {
    const companyProfiles = await CompanyProfile.find(); // Assuming you are using mongoose
    res.status(200).json(companyProfiles); // Send all profiles as response
  } catch (error) {
    console.error("Error fetching company profiles:", error); // Log the error
    res.status(500).json({ message: "Error fetching company profiles", error: error.message });
  }

};



