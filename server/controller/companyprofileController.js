import CompanyProfile from '../model/companyprofileModel.js';
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "CompanyProfileDocuments/"); 
    console.log("Received files:", req.files);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});

const upload = multer({ storage: storage });

export const createCompanyProfile = async (req, res) => {
  console.log('Received files:', req.files); // Debugging line

  try {
    const {
      nameOfRPSL,
      rpslNumber,
      issueDate,
      expiryDate,
      issuePlace,
      tinTanNumber,
      bankName,
      bankGuaranteeValidityDate,
      guaranteeAmount,
      seafarerRecruited,
      inspectionDate,
      panNumber,
      office,
      leasedValidityDate,
      status,
      aadharNumber,
  
      // Last Inspection Details
      inspectorName,
      organizationName,
      lastAnnualInspectionDate,
      lastRenewalDate,
      lastInspectionPlace,
      nextRenewalDate,
  
      // Registered Address Details
      addressLine1,
      city,
      addressLine2,
      district,
      addressLine3,
      state,
      phoneNumber,
      mobileNumber,
      pin,
      fax,
      webUrl,
  
      // Contact Person & Details
      contactPersonName,
      contactPersonMobile,
      contactPersonEmail,
  
      // Other Details
      criminalCasePending,
      criminalCaseDetails,
      complaintsPending,
      complaintsDetails,
      shippingActivitiesCarriedOut,
      shippingActivitiesDetails,
    }=req.body

    const newProfileCompany = new CompanyProfile({
      nameOfRPSL,
      rpslNumber,
      issueDate,
      expiryDate,
      issuePlace,
      tinTanNumber,
      bankName,
      bankGuaranteeValidityDate,
      guaranteeAmount,
      seafarerRecruited,
      inspectionDate,
      panNumber,
      office,
      leasedValidityDate,
      status,
      aadharNumber,
  
      // Last Inspection Details
      inspectorName,
      organizationName,
      lastAnnualInspectionDate,
      lastRenewalDate,
      lastInspectionPlace,
      nextRenewalDate,
  
      // Registered Address Details
      addressLine1,
      city,
      addressLine2,
      district,
      addressLine3,
      state,
      phoneNumber,
      mobileNumber,
      pin,
      fax,
      webUrl,
  
      // Contact Person & Details
      contactPersonName,
      contactPersonMobile,
      contactPersonEmail,
  
      // Other Details
      criminalCasePending,
      criminalCaseDetails,
      complaintsPending,
      complaintsDetails,
      shippingActivitiesCarriedOut,
      shippingActivitiesDetails,
  
      //Documents
      registrationDocuments:req.files.registrationDocuments && req.files.registrationDocuments.length > 0
        ? {
          originalName: req.files.registrationDocuments[0].originalname,
          filePath:req.files.registrationDocuments[0].path,
        }: null,

      rpsLicense:req.files.rpsLicense
      ? {
        originalName:req.files.rpsLicense[0].originalname,
        filePath:req.files.rpsLicense[0].path,
      }: null,
      profitLossBalanceSheet: req.files.profitLossBalanceSheet
      ? {
        originalName: req.files.profitLossBalanceSheet[0].originalname,
        filePath: req.files.profitLossBalanceSheet[0].path,
      }: null,
      assetsLiabilitiesCertificate: req.files.assetsLiabilitiesCertificate
      ? {
        originalName: req.files.assetsLiabilitiesCertificate[0].originalname,
        filePath: req.files.assetsLiabilitiesCertificate[0].path,
      }: null,
      incomeTaxReturns: req.files.incomeTaxReturns
      ? {
        originalName : req.files.incomeTaxReturns[0].originalname,
        filePath : req.files.incomeTaxReturns[0].path,
      }: null,

      auditReport : req.files.auditReport
      ? {
        originalName : req.files.auditReport[0].originalname,
        filePath : req.files.auditReport[0].path,
      } : null,
      bankGuarantee: req.files.bankGuarantee
      ? {
        originalName: req.files.bankGuarantee[0].originalname,
        filePath : req.files.bankGuarantee[0].path,
      }:  null,
    })

  
    const savedDetails = await newProfileCompany.save();
    res.status(201).json({ message: 'Company profile created successfully!', data: savedDetails });
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


export const ComapanyuploadMiddleware = upload.fields([
  { name: "registrationDocuments", maxCount: 1 },
  { name: "rpsLicense", maxCount: 1 },
  { name: "profitLossBalanceSheet", maxCount: 1 },
  { name: "assetsLiabilitiesCertificate", maxCount: 1 },
  { name: "incomeTaxReturns", maxCount: 1 },
  { name: "auditReport", maxCount: 1 },
  { name: "bankGuarantee", maxCount: 1 },
]);


