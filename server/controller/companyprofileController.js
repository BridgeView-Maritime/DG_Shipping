

import CompanyProfile from '../model/companyprofileModel.js';


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



