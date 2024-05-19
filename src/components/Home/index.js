import React from 'react';
// import Header from '../Header'
import Productstabs from '../Productstabs' 
import Products from '../Products'
import Footer from '../Footer'
import Navbar from '../Navbar';


const index = () => {
  return (
    <div>
      <Navbar/>
      <Productstabs />
      <Products/>
      <Footer/>
    </div>
  );
}

export default index;
