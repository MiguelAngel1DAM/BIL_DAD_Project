import React from 'react';
import { Badge } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import Footermenu from '../../components/Footermenu/Footermenu';
function Menu() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Menu</h1>
          <Link to="/settings">
            <BiUserCircle className="usericon" />
          </Link>
        </div>

        <div className='menus'>
          <div className='serversMenu'>
            <h2>Servers</h2>
            <button><Badge count={'on'} color='green' className='badgeserver' /> Server1</button>
            <button><Badge count={'off'} color='red' className='badgeserver' /> Server2</button>
            <button><Badge count={'loading'} color='orange' className='badgeserver' />Server3</button>
          </div>
          <div className='databasesMenu'>
            <h2>Databases</h2>
            <button><Badge count={'on'} color='green' className='badgebase' /> Database1</button>
            <button><Badge count={'off'} color='red' className='badgebase' /> Database2</button>
            <button><Badge count={'loading'} color='orange' className='badgebase' /> Database3</button>
          </div>
        </div>
        <Footermenu />
      </div>
    </>
  );
}

export default Menu;
