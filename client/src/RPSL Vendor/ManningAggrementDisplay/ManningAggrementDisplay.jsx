import axios from "axios";
import { useEffect, useState } from "react";


const ManningAggrementDisplay= ()=>{
    const [agreements, setAgreements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAgreements = async () => {
          try {
            const response = await axios.get("http://localhost:8000/api/manningAgreement");
            setAgreements(response.data.data || []); 
            setLoading(false);
          } catch (error) {
            console.error("Failed to fetch agreements:", error);
            setLoading(false);
          }
        };
    
        fetchAgreements();
      }, []);

    return (
        <>

      <div className="agreement-table">
        <h3>Agreements List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employer Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Validity Type</th>
              <th>Validity Date</th>
              <th>Agreement Type</th>
              <th>Agreement (Form VII) upload</th>
              <th>Manning Agreement</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement, index) => (
              <tr key={agreement._id || index}>
                <td>{agreement._id}</td>
                <td>{agreement.employerName}</td>
                <td>{agreement.email}</td>
                <td>{agreement.address}</td>
                <td>{agreement.contact}</td>
                <td>{agreement.validityType}</td>
                <td>{new Date(agreement.validityDate).toLocaleDateString()}</td>
                <td>{agreement.agreementType}</td>
                <td>{agreement.aggrementformvii && (
                    <a
                    href={`http://localhost:8000/${agreement.aggrementformvii.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Agreement (Form VII)</a>
                )}</td>
                <td>{agreement.manningAgree && (
                    <a
                    href={`http://localhost:8000/${agreement.manningAgree.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >Manning Aggrement</a>
                )}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    )
}

export default ManningAggrementDisplay;