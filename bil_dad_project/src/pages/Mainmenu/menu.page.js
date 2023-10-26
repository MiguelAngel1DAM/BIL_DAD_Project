import React from 'react';
import { Badge } from 'antd';
import React, { useState } from 'react';
import './style.css';
import { BiUserCircle } from 'react-icons/bi';
import Footermenu from '../../components/Footermenu/Footermenu';
function Menu() {
  return (
    <>
    <div className="container">
      <div className="header">
        <h1>Menu</h1>
        <BiUserCircle className="usericon"/>
      </div>
      
      <div className='menus'>
        <div className='serversMenu'>
          <h2>Servers</h2>
        <button> Server1</button>
        <button> Server2</button>
        <button> Server3</button>
        </div>
        <div className='databasesMenu'>
          <h2>Databases</h2>
        <button> base1</button>
        <button> base2</button>
        <button> base3</button>
        </div>
      </div>
      <Footermenu/>
    </div>
    </>
  );
}

export default Menu;
