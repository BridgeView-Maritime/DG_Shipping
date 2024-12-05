// companyprofileModel.js
import mongoose from 'mongoose';

const companyProfileSchema = new mongoose.Schema({
  // Profile Details
  nameOfRPSL: { type: String, required: true },
  rpslNumber: { type: String, required: true },
  issueDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  issuePlace: { type: String, required: true },
  tinTanNumber: { type: String, required: true },
  bankName: { type: String, required: true },
  bankGuaranteeValidityDate: { type: Date, required: true },
  guaranteeAmount: { type: Number, required: true },
  seafarerRecruited: { type: Number, required: true },
  inspectionDate: { type: Date, required: true },
  panNumber: { type: String, required: true },
  office: { type: String, required: true },
  leasedValidityDate: { type: Date, required: true },
  status: { type: String, required: true },
  aadharNumber: { type: String, required: true },

  // Last Inspection Details
  inspectorName: { type: String, required: true },
  organizationName: { type: String, required: true },
  lastAnnualInspectionDate: { type: Date, required: true },
  lastRenewalDate: { type: Date, required: true },
  lastInspectionPlace: { type: String, required: true },
  nextRenewalDate: { type: Date, required: true },

  // Registered Address Details
  addressLine1: { type: String, required: true },
  city: { type: String, required: true },
  addressLine2: { type: String, required: true },
  district: { type: String, required: true },
  addressLine3: { type: String, required: true },
  state: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pin: { type: String, required: true },
  fax: { type: String, required: true },
  webUrl: { type: String, required: true },

  // Contact Person & Details
  contactPersonName: { type: String, required: true },
  contactPersonMobile: { type: String, required: true },
  contactPersonEmail: { type: String, required: true },

  // Other Details
  criminalCasePending: { type: Boolean, required: true },
  criminalCaseDetails: { type: String },
  complaintsPending: { type: Boolean, required: true },
  complaintsDetails: { type: String },
  shippingActivitiesCarriedOut: { type: Boolean, required: true },
  shippingActivitiesDetails: { type: String },
  seafarerRecruitmentExperience: { type: String },
  yearsOfExperience: { type: Number, required: true }
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

export default CompanyProfile;

