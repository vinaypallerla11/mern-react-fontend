import React from 'react';
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { GrAmex } from "react-icons/gr";
import { FaApplePay } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import './index.css'

const index = () => {
  return (
    <div className='container'>
      <div className='footer-section1'>
        <div className='c'>
          <h1>BE THE FIRST KNOW</h1>
          <p>sign up for updates from metta muse.</p>
          <div>
            <input type="search"/> <span><button>Subscribe</button></span>
          </div>
        </div>
        <div>
          <h1>CONTACT US</h1>
          <p>+44 221 133 5360</p>
          <p>customercare@vinay.com</p>
          <h1>CURRENCY</h1>
          <h1>USD</h1>
          <p>Transection will be completed in Erous and a currency reference is available an hour.</p>
        </div>
      </div>

      <hr/>

      <div className='footer-last-section'>
        <div>
          <h1>metta muse</h1>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div>
          <h1>QUICK LINKS</h1>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h1>FOLLOW US</h1>
          <p>metta muse ACCEPTS</p>
          <div className='icon-container'>
            <span className='gpay'>< FaGooglePay /></span>
            <span className='mcard'><FaCcMastercard /></span>
            <span className='ppay'><ImPaypal /></span>
            <span className='amex'><GrAmex /></span>
            <span className='apay'><FaApplePay /></span>
            <span className='lpay'><FaAmazonPay /></span>
          </div>
        </div>
      </div>
      <div>
        <p className='para1'>Copyright <span><AiOutlineCopyrightCircle /></span> 2023 mettamuse. all right reserved</p>
      </div>
    </div>
  );
}

export default index;

