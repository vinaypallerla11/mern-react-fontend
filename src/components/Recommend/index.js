import React from 'react';
import { IoIosCheckmark } from "react-icons/io";
import './index.css'
const index = () => {
  return (
    <div className='main-container2' >
      <div className='item-container'>
        <p>3425 Items</p>
        <p>HIDE FILTER</p>
      </div>
      <div>
        <select className='selecter'>
          <option> <span className='mark'><IoIosCheckmark /></span> RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
}

export default index;
