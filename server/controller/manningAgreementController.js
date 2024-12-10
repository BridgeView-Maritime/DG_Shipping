import ManningAgreement from "../model/mannningAgreement.js";

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
      agreementFormVII,
      supportingAgreement,
      chainOfAgreement,
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
      agreementFormVII,
      supportingAgreement,
      chainOfAgreement,
    });

    // Save to the database
    const savedAgreement = await newAgreement.save();
    res.status(201).json({ message: "Manning Agreement created successfully", data: savedAgreement });
  } catch (error) {
    console.error("Error creating Manning Agreement:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
