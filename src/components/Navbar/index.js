import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Cookies from 'js-cookie';

const NavBar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/', { replace: true });
  };

  const imgHandler = () => {
    navigate('/india', { replace: true });
  };

  return (
    <div className="containerSection">
      <div className="content-nav">
        <div>
          <img
            src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1704763899/VTrendz_gfuzbu.webp"
            className="img-content"
            alt="avatar"
            onClick={imgHandler}
          />
        </div>
        <div className="nav-container">
          <ul>
          <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/stories">
              <li>Stories</li>
            </Link>
            <Link to="/contactus">
              <li>Contactus</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
          <button type="button" onClick={onClickLogout} className="button-container2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
