import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const userDetails = { username, password, email, city };

  const showAlert = () => {
    alert('user created successfully');
  }

  const LoginForm = () => {
    navigate('/');
  }

  
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const url = 'http://localhost:5000/registers/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    alert("register successfull")

  };

  return (
    <div className="empForm">
      <div className="section">
        <h1 className='head'>Register here...</h1>
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="username" className="input-label">userame:</label> <br />
          <input type="text" className="input-change" id="username" name='username' placeholder='username' onChange={(e) => setUserName(e.target.value)} /> <br />
          <label htmlFor="password" className="input-label">password:</label> <br />
          <input type="text" className="input-change" id="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
          <label htmlFor="email" className="input-label" >email:</label> <br />
          <input type="text" className="input-change" id="email" name='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} /> <br />
          <label htmlFor="city" className="input-label">city:</label> <br />
          <input type="text" className="input-change" id="city" name='city' placeholder='city' onChange={(e) => setCity(e.target.value)} /> <br />
          <div className='button-container'>
            <button type="submit" className="submit-button" onClick={showAlert}>Register</button>
            <button className="submit-button-login" onClick={LoginForm}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
