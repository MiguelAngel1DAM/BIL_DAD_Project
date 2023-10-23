import { Link } from "react-router-dom";
import * as React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import './style.css';
function Login() {
    return (
        <div className="container">
            <BiUserCircle className="icon" />
            <label htmlFor="user" className="label"></label>
            <input id="user" type="text" className="input" />
            <label htmlFor="password" className="label"></label>
            <input id="password" type="text" className="input" />
            <Link to="/Mainmenu">
            <button className='button'>Log In</button>
            </Link>
        </div>
    );
}

export default Login;
