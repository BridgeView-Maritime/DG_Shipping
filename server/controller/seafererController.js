// seafererController.js
import SeafarerDetails from "../model/seafererModel.js"; // Correct path to your model

// Controller function to create new seafarer details
export const createSeafarerDetails = async (req, res) => {
  try {
    const {
      personalDetails,
      addressDetails,
      physicalDetails,
    } = req.body;

    // Validate the input (optional, but good to have for production)
    if (!personalDetails || !addressDetails || !physicalDetails) {
      return res.status(400).json({ error: "All required fields must be provided" });
    }

    // Create a new instance of the SeafarerDetails model
    const newSeafarerDetails = new SeafarerDetails({
      personalDetails,
      addressDetails,
      physicalDetails,
    });

    // Save the seafarer details to the database
    await newSeafarerDetails.save();

    // Send success response
    res.status(201).json({
      message: "Seafarer details added successfully",
      seafarerDetails: newSeafarerDetails,
    });
  } catch (error) {
    console.error("Error saving seafarer details:", error);
    res.status(500).json({ error: "Failed to save seafarer details" });
  }
};
