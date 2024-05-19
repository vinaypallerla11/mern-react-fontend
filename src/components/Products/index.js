import React, { useState, useEffect } from 'react';
// import { CiHeart } from "react-icons/ci";
import './index.css'

const Index = () => {
  const [data, setData] = useState(null); 
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(newData => {
        console.log(newData); 
        setData(newData);
      });
  }, []);

  // Check if data is still loading
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main-content'>
      <div className='customizble'>
        <h1 className='heading'><span><input type="checkbox"/></span> CUSTOMIZBLE</h1>
        <hr/>
        <select>
          <option>IDEL FOR</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>OCCASION</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>WORK</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>FABRIC</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>SEGMENT</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>SUITBLE FOR</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>RAW METERIAL</option>
        </select>
        <p>All</p>
        <hr/>
        <select>
          <option>PATTERN</option>
        </select>
        <p>All</p>
        <hr/>
      </div>
      <div className='bg-content'>
        {data.map((each) => (
            <div className='product-card' key={each.id}>
            <ul className='product-content'>
                <li key={each.id}><img src={each.image} alt={each.title} className='image' /></li>
                <li key={each.id}><p className='title'>{each.title}</p></li>
                <li key={each.id}>
                  <p className='category'>{each.category} 
                    <span key={each.id}>
                      <button onClick={handleClick} style={{ backgroundColor: liked ? 'red' : 'transparent', border: 'none', cursor: 'pointer' }}>
                        {liked ? '❤️' :  '♡'}
                      </button>
                    </span>
                  </p>
                </li>
                
            </ul>
            </div>
        ))}
      </div>
    </div>

  );
}

export default Index;
