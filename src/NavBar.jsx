import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'
import Cookies from 'js-cookie';

const NavBar = () => {
  const navigate = useNavigate();
  const onClickLogout = () =>{
    Cookies.remove('jwt_token')
    navigate('/', { replace: true });
  }
  const imgHandler = () => {
    navigate('/india', { replace: true });
  }
  return (
    <div className="containerSection">
      <div className='content-nav'>
        <div>
          <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1704763899/VTrendz_gfuzbu.webp" className='img-content' alt="avathar" onClick={imgHandler}/>
        </div>
        <div className='nav-container'>
          <ul>
            <Link to='/india'>
              <li>India</li>
            </Link>
            <Link to='/bangladesh'>
              <li>Bangladesh</li>
            </Link>
            <Link to='/japan'>
              <li>Japan</li>
            </Link>
            <Link to='/ukrain'>
              <li>Ukrain</li>
            </Link>
          </ul>
        <button type="button" onClick={onClickLogout} className='button-container2'>
          Logout
        </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
