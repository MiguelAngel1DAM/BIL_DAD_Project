import React from 'react';
import './style.css';
import Footermenu from '../../components/Footermenu/Footermenu';
import { BiUserCircle } from 'react-icons/bi';
import { Progress } from 'antd';
import server from '../../components/images/server.svg';
import { Link } from 'react-router-dom';

function basepage() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Data bases</h1>
                    <BiUserCircle className="usericon" />
                </div>

                <div className='databaseinfo'>
                <p>Database 1
                <Progress percent={0} className='progresscontainer'/>
                </p>
                <p>Database 2
                <Progress percent={10} strokeColor="green" className='progresscontainer'/>
                </p>
                <p>Database 3
                <Progress percent={70} strokeColor="orange" className='progresscontainer'/>
                </p>
                <p>Database 4
                <Progress percent={100} strokeColor="red" status="active" className='progresscontainer'/>
                </p>
                </div>

                <div className='server'>
                    <Link to="/adddatabasepage">
                    <img src={server} alt='server' />
                    </Link>
                </div>
            </div>

            <Footermenu/>
        </>
    );
}

export default basepage;