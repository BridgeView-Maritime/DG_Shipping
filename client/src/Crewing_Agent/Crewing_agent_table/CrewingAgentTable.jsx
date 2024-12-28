
// cREWINGAGENT TABLE
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';

const CrewingAgentTable = () => {
  const [crewingAgents, setCrewingAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the crewing agent data
  useEffect(() => {
    const fetchCrewingAgents = async () => {
      try {
        const response = await axios.get('http://bridgeviewships.ae:8000/api/crewingAgentDetails');
        setCrewingAgents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCrewingAgents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="CrewingTable-container">
      <Link to="/Crewing_Agent"><button>Add Crewing Agent</button></Link>
      <h2>Crewing Agent Table</h2>
      <table>
        <thead>
          <tr>
            <th>Agent Name</th>
            <th>Short Name</th>
            <th>Address</th>
            <th>Contact Person</th>
            <th>Country</th>
            <th>Contact Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {crewingAgents.length > 0 ? (
            crewingAgents.map((agent) => (
              <tr key={agent._id}>
                <td>{agent.agentName}</td>
                <td>{agent.shortName}</td>
                <td>{agent.address}</td>
                <td>{`${agent.contactPerson.title} ${agent.contactPerson.name}`}</td>
                <td>{agent.country}</td>
                <td>{agent.contactNumber}</td>
                <td>{agent.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No crewing agents found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CrewingAgentTable;