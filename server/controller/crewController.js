// crewController.js
import CrewDetails from "../model/crewModel.js"; // Correct path to your model

// Controller function to create new crew details
export const createCrewDetails = async (req, res) => {
  try {
    const { name, phone, email, passportNumber, cdcNumber, indosNumber, address } = req.body;

    // Create a new instance of the CrewDetails model
    const newCrewDetails = new CrewDetails({
      name,
      phone,
      email,
      passportNumber,
      cdcNumber,
      indosNumber,
      address,
    });

    // Save the crew details to the database
    await newCrewDetails.save();

    // Send success response
    res.status(201).json({ message: "Crew details added successfully", crewDetails: newCrewDetails });
  } catch (error) {
    console.error("Error saving crew details:", error);
    res.status(500).json({ error: "Failed to save crew details" });
  }
};
