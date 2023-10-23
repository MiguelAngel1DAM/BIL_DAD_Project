import React from 'react';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';
    
function Menu() {
  return (
    <>
    <div className="container">
      <div className="rectangle1"></div>
      <div className="rectangle2">
        <h1>Menu</h1>
        <BiUserCircle className="icon"/>
      </div>
    </div>
    </>
  );
}

export default Menu;
