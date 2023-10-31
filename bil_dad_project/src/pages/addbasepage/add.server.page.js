import React from 'react';
import './style.css';
import Footermenu from '../../components/Footermenu/Footermenu';
import { Link } from "react-router-dom";
import Databaseicon from '../../components/images/Databaseicon.svg';

function adddatabasepage() {
    return (
        <>
            <div className="container">            
            <div>
            <img src={ Databaseicon } className='Servericon' alt='server'/>
            </div>
            <label htmlFor="user" className="label"></label>
            <input id="user" type="text" className="input" />
            <label htmlFor="password" className="label"></label>
            <input id="password" type="text" className="input" />
            <Link to="/adddatabasepage">
            <button className='button'>Add database</button>
            </Link>
            </div>

            <Footermenu />
        </>
    );
}

export default adddatabasepage;