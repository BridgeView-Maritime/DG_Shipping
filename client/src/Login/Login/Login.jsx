import  { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post("http://localhost:8000/api/login", userData);
      if (response.status === 200) {
       
         console.log("login sucessfull!"); 
        
         // Store the userType in localStorage or sessionStorage
         const { userType } = response.data;  // Assume response contains userType
         localStorage.setItem("userType", userType);
         console.log("usertuype check", userType)
         // Redirect based on userType
         if (userType === "crew") {
           navigate("/SeafarerProfile");
         } else if (userType === "Vessel_vendor") {
           navigate("/Vesselvendor");
         } else if (userType === "vessel_owner") { 
          toast.success("User signed up Successfully!");       
           navigate("/vessel_owner_table");
         } else if(userType === "crewing_agent"){ 
              navigate("/CrewingAgentTable");
         }else if(userType === "vessel_manager"){
              navigate("/VesselMangerForm");
         }else if(userType ==="admin"){
              navigate("/VesselManagerTable")
         }else {
          //  alert("Unknown user type");
           toast.error("Unknown user type");
         }
        }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.message : "An error occurred during login");
    }
  };
  

  return (
    <div className="loginContainer">
      <Navbar />
      <div className="loginFormContainer">
        <h1>Login User</h1>
        <form className="logform" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button className="loginbtn" type="submit">
            Login
          </button>
          {/* 
          <p>
            If you don't have an account, <Link to="/signup">Signup</Link>
          </p>
        */} 
        </form>
      </div>

       <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default Login;
