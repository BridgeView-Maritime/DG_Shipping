import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      const response = await axios.post("http://localhost:8000/api/login", userData);
      if (response.status === 200) {
        navigate(response.data.redirectUrl); 
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.message : "An error occurred during login");
    }
  };
  

  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
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
          <p>
          If you don't have an account, <Link to="/signup">Signup</Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
