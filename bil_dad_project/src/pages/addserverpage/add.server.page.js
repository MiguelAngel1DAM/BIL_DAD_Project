import React from 'react';
import './style.css';
import Footermenu from '../../components/Footermenu/Footermenu';
import { Link } from "react-router-dom";
import Servericon from '../../components/images/Servericon.svg';

function addserverpage() {
    return (
        <>
            <div className="container">            
            <div>
            <img src={ Servericon } className='Servericon' alt='server'/>
            </div>
            <label htmlFor="user" className="label"></label>
            <input id="user" type="text" className="input" />
            <label htmlFor="password" className="label"></label>
            <input id="password" type="text" className="input" />
            <Link to="/serverpage">
            <button className='button'>Add server</button>
            </Link>
            </div>

            <Footermenu />
        </>
    );
}

export default addserverpage;