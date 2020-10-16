import React from 'react';
import './Navbar.css';
import logo from '../logo192.png';
import PersonIcon from '@material-ui/icons/Person';

function Navbar() {
    return (
        <div className="navbar">
            <img 
                id="logo" 
                alt="GetWork Logo" 
                src={logo}
            ></img>
            <h2 id="nav"><PersonIcon /> Nirmit Sabharwal</h2>
        </div>
    )
}

export default Navbar;
