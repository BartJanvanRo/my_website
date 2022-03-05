import React from 'react'
import { Link, useLocation } from "react-router-dom";
import '../main.scss';
import logo from '../img/logo.png';


function Hamburger() {
    return (
        <div className="containerMobiel">
            <img src={logo} alt="logo" />

            <ul className="Hamburger">
                <Link to="/Home">
                    <li className='burger'>
                        Home
                        <span className='underline'></span>
                    </li>
                </Link>
                <Link to="/UI">
                    <li className='burger'>
                        UI/UX

                    </li>
                </Link>
                <Link to="/Art">
                    <li className='burger'>
                        Art

                    </li>
                </Link>
                <Link to="/Contact">
                    <li className='burger'>
                        Contact

                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Hamburger