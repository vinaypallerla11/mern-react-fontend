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
    navigate('/india', { replace: true });
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

    try{
      const response = await fetch(url, options);

      if (response.ok === true) {
        const data = await response.json();
        console.log(response);
        console.log(data);
        onSubmitSuccess(data.token)      
      }else{
        const errorData = await response.json();
        onSubmitFailure(errorData.error_msg)
      }
    } catch(error) {
      onSubmitFailure("Ivalid username, password didn't match")
    }
  };

  const token = Cookies.get('jwt_token');
  if (token !== undefined) {
    return <Navigate to="/india" />;
  }

  return (
    <div className="empForm">
      <div className="section">
        <h1 className='head'>Log in to VTrendz</h1>
        <form onSubmit={formSubmit} className='form-container'>
          <label htmlFor="username" className="input-label">User Name:</label> <br />
          <input type="text" className="input-change" id="username" name='username' placeholder='user name' onChange={(e) => setUserName(e.target.value)} /> <br />
          <label htmlFor="password" className="input-label" >Password:</label> <br />
          <input type="password" className="input-change" id="password" name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
          <div className='button-container'>
            <button type="submit" className="submit-button">Log In</button> <br/>
          </div>
          {showSubmitError && <p className='error-msg'>*{errorMsg}</p>}
        </form>
        <button type="button" onClick={RegisterForm} className='create-button' >Create new account</button>
      </div>
    </div>
  );
};

export default LoginForm;
