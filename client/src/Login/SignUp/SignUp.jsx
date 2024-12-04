import React, { useState } from 'react';
import axios from 'axios';  // Make sure axios is imported
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  // State for user input
  const [loginuser, setLoginuser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState('');  // Error message for UI

  const navigate = useNavigate();

  // Input change handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginuser({ ...loginuser, [name]: value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { username, email, password, confirmpassword } = loginuser;
    console.log("loginuser", loginuser)
    // Validate the password match
    if (password !== confirmpassword) {
      setError('Passwords do not match');
      return;
    }

    const userData = { username, email, password , confirmpassword};

    console.log('User Data:', userData);

    try {
      // Sending a POST request to the backend
      const response = await axios.post("http://localhost:8000/api/signup", userData);
      console.log('Signup Success:', response.data);
      // Reset the form or redirect user
      navigate("/");
    } catch (err) {
      setError('An error occurred during signup');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupFormContainer">
        <h1>Sign Up</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={loginuser.username}
              onChange={inputHandler}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={loginuser.email}
              onChange={inputHandler}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={loginuser.password}
              onChange={inputHandler}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              id="confirmpassword"
              type="password"
              name="confirmpassword"
              value={loginuser.confirmpassword}
              onChange={inputHandler}
              required
              placeholder="Confirm your password"
            />
          </div>

          {error && <p className="error">{error}</p>} {/* Display error message */}

          <button className="signupbtn" type="submit">
            Sign Up
          </button>
          <p>
          If you already have an account, <Link to="/">Login</Link>.
        </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;