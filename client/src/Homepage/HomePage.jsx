import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mainConatainer">
        <h1>Bridgeviewship</h1>
      </div>

      {/* About Us Section */}
      <div id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          The Company provides high quality and dependable Technical Consultancy
          and Human Resource services in Commercial Ship management, Offshore-
          Oil & Gas and Shipbuilding industry. Our focus is on main fleet as
          well offshore fleet for Technical management /Crew Management . We
          have a wide selection of the finest personnel for various types of
          vessels (Tankers, Chemical Tanker, Gas carrier, FPSO, FSU, Offshore,
          Bulk Carrier, Containers, Car Carriers and Log Carriers and General
          Cargo) readily available upon request who are best known in the
          maritime industry for their professionalism, efficiency and
          reliability.We also provide competent manpower to the Shipbuilding &
          Offshore Construction Industries.
        </p>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions? Feel free to reach out to us at:</p>
        <p>
          <strong>Email:</strong> admin@bridgeviewships.ae
        </p>
        <p>
          <strong>Phone:</strong> +971 554168425
        </p>
        <p>
          <strong>Address:</strong> 209, Arzu Building AI Qusais, Dubai, UAE.
        </p>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Bridgeviewship. All rights reserved.</p>
      </footer>

      
    </div>
  );
};

export default HomePage;
