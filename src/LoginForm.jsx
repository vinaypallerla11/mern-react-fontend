import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate();

  const onSubmitSuccess = (token) => {
    Cookies.set('jwt_token', token, { expires: 30 });
    navigate('/home', { replace: true });
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(!showSubmitError);
    setErrorMsg(errorMsg);
  }

  const RegisterForm = () => {
    navigate('/register');
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };
    console.log(userDetails);
    const url = 'http://localhost:5000/login/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);

      if (response.ok === true) {
        const data = await response.json();
        console.log(response);
        console.log(data);
        onSubmitSuccess(data.token)      
      } else {
        const errorData = await response.json();
        onSubmitFailure(errorData.error_msg)
      }
    } catch(error) {
      onSubmitFailure("Invalid username or password")
    }
  };

  const token = Cookies.get('jwt_token');
  if (token !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="empForm">
      <div className="section">
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="username" className="input-label">User Name:</label>
          <input type="text" className="input-field" id="username" name='username' placeholder='Username' onChange={(e) => setUserName(e.target.value)} />

          <label htmlFor="password" className="input-label">Password:</label>
          <input type="password" className="input-field" id="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

          <div className='button-container'>
            <button type="submit" className="submit-button">Log In</button>
          </div>
          {showSubmitError && <p className='error-msg'>*{errorMsg}</p>}
        </form>
        <button type="button" onClick={RegisterForm} className='create-button'>Create new account</button>
      </div>
    </div>
  );
};

export default LoginForm;
