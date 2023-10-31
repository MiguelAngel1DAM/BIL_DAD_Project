import * as React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import home from '../images/home.svg';
import base from '../images/database.svg';
import server from '../images/server.svg';

function Footermenu() {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <Link to="/Basepage">
                    <img src={ base } className='database' alt='database'/>
                    </Link>
                    <Link to="/Mainmenu">
                    <img src={ home } className='home' alt='home'/>
                    </Link>
                    <Link to="/serverpage">
                    <img src={ server } className='server' alt='server'/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Footermenu;
