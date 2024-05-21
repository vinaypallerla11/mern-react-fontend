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
    alert('User created successfully');
  }

  const LoginForm = () => {
    navigate('/', { replace: true });
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const url = 'https://ecocart-5.onrender.com/registers/';
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
    alert("Register successful");
  };

  return (
    <div className="registration-form-container">
      <div className="section">
        <h1 className='heading'>Register Here...</h1>
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="username" className="input-label">Username:</label>
          <input type="text" className="input-field" id="username" name='username' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} />

          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" className="input-field" id="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="email" className="input-label">Email:</label>
          <input type="email" className="input-field" id="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="city" className="input-label">City:</label>
          <input type="text" className="input-field" id="city" name='city' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />

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