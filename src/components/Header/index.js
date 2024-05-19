import React from 'react';
import { FaReact } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuGaugeCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';
import './index.css'

const index = () => {
  return (
    <div className='header-container'>
      <header >
        <div className="headers">
          <FaReact className='images'/>
          <h1>LOGO</h1>
          <div className='images-container'>
            <LuSearch className='images'/>
            <CiHeart className='images'/>
            <LiaShoppingBagSolid className='images' />
            <LuGaugeCircle className='images'/>
              <select className='select-container'>
                <option>Eng</option>
                <option>Tel</option>
                <option>Hindi</option>
                <option>Tamil</option>
              </select>
          </div>
        </div>
        <ul className='product-container'>
            <li className='list-container'><Link to="shop">SHOP</Link></li>
            <li className='list-container'><Link to="skills">SKILLS</Link></li>
            <li className='list-container'><Link to="stories">STORIES</Link></li>
            <li className='list-container'><Link to="about">ABOUT</Link></li>
            <li className='list-container'><Link to="contactus">CONTACT US</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default index;
