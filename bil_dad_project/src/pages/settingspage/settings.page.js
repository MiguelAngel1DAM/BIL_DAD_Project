import { Link } from "react-router-dom";
import * as React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import './style.css';
import Footermenu from '../../components/Footermenu/Footermenu';
function settings() {
    return (
        <div className="container">
            <BiUserCircle className="icon" />
            <label htmlFor="user" className="label"></label>
            <input id="user" type="text" className="input" defaultValue="name user"/>
            <label htmlFor="password" className="label"></label>
            <input id="password" type="text" className="input" defaultValue="password"/>
            <Link to="/Mainmenu">
            <button className='button'>Log In</button>
            </Link>
            <Footermenu />
        </div>
    );
}

export default settings;
