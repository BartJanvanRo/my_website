import React from 'react'
import '/Users/bart-janvanrossum/Desktop/my_website/src/css/main.min.css';
import logo from './logo.png';
/* import './header.css'; */

import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="generalSpace">
            <ul className="containerMenu">
                <Link to="/Home">
                    <li className='bttnTop'>
                        Home
                    </li>
                </Link>
                <Link to="/UI">
                    <li className='bttnTop'>
                        UI/UX
                    </li>
                </Link>
                <li className="logo"><img src='logo.png' alt="logo" /></li>
                <Link to="/Art">
                    <li className='bttnTop'>
                        Art
                    </li>
                </Link>
                <Link to="/Contact">
                    <li className='bttnTop'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Header