
import CompanyProfile from '../model/companyprofileModel.js';  

const createCompanyProfile = async (req, res) => {
  try {
    const companyProfileData = req.body;
    const companyProfile = new CompanyProfile(companyProfileData);
    await companyProfile.save();
    res.status(201).json({ message: 'Company profile created successfully!', data: companyProfile });
  } catch (error) {
    console.error('Error creating company profile:', error);
    res.status(500).json({ message: 'Failed to create company profile', error: error.message });
  }
};

export { createCompanyProfile };  
