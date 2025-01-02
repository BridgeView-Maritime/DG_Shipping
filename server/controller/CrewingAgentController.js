import CrewingAgent from "../model/CrewingAgentModel.js";

// Controller function to handle creation of crewing agent details
export const CreateCrewingAgentDetails = async (req, res) => {
  try {
    const {
      agentName,
      shortName,
      address,
      contactPersonTitle,
      contactPersonName,
      country,
      contactNumber,
      email,
    } = req.body;

    // Create a new CrewingAgent document
    const newCrewingAgent = new CrewingAgent({
      agentName,
      shortName,
      address,
      contactPerson: {
        title: contactPersonTitle,
        name: contactPersonName,
      },
      country,
      contactNumber,
      email,
    });

    // Save the document to the database
    const savedAgent = await newCrewingAgent.save();

    // Respond with the saved document
    res.status(201).json({
      message: "Crewing Agent details saved successfully",
      data: savedAgent,
    });
  } catch (error) {
    console.error("Error creating Crewing Agent details:", error);
    res.status(500).json({
      message: "Failed to save Crewing Agent details",
      error: error.message,
    });
  }
};


export const GetAllCrewingAgentDetails = async (req, res) => {
    try {
      // Fetch all crewing agents from the database
      const crewingAgents = await CrewingAgent.find();
  
      // Respond with the crewing agents data
      res.status(200).json(crewingAgents);
    } catch (error) {
      console.error("Error fetching Crewing Agent details:", error);
      res.status(500).json({
        message: "Failed to fetch Crewing Agent details",
        error: error.message,
      });
    }
  };

  export const updatedCrewingAgentDetails = async (req, res) => {
    const { id } = req.params; // Extract id from URL
    const updates = req.body; // Data to update

    try {
      const updatedAgent = await CrewingAgent.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedAgent) {
        return res.status(404).json({ message: "Crewing Agent not found" });
      }
      res.status(200).json(updatedAgent);
    } catch (error) {
      console.error("Error updating Crewing Agent:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
