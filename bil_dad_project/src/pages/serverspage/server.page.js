import React from 'react';
import './style.css';
import Footermenu from '../../components/Footermenu/Footermenu';
import { BiUserCircle } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { Progress } from 'antd';
import Onoff from '../../components/onoffswitch';
import server from '../../components/images/server.svg';
import { Link } from 'react-router-dom';

function serverpage() {
    return (
        <>
            <div className="header">
                <h1>Server</h1>
                <Link to="/settings">
                <BiUserCircle className="usericon" />
                </Link>
            </div>

            <div className='content'>
                <Progress type='circle' percent={2} className='userspercent' size={200} />
                <Onoff className='switch' />
            </div>

            <div>
                <h2>Users connected:</h2>
                <div className='userscon'>
                    <p>User1  <BsCircleFill color='green' style={{ marginRight: '60%' }} />Connected</p>
                    <p>User2  <BsCircleFill color='red' style={{ marginRight: '60%' }} />Disconnect</p>
                    <p>User3  <BsCircleFill color='orange' style={{ marginRight: '60%' }} />Connecting</p>
                </div>

                <div className='server'>
                    <Link to="/Addserverpage">
                    <img src={server} alt='server' />
                    </Link>
                </div>
            </div>

            <Footermenu />
        </>
    );
}

export default serverpage;