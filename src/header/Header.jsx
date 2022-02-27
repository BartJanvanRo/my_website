import React, { useEffect } from 'react'
import '../main.scss';

import logo from './logo.png';
/* import './header.css'; */

import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation().pathname.split('/')[1]
    console.log(location)
    useEffect(() => {
        const links = document.querySelectorAll('.bttnTop')

        const span = document.createElement('span')
        span.className = 'underline'

        links.forEach((i) => {
            i.onclick = () => {

                document.querySelector('.home span').classList.remove('underline')
                i.appendChild(span)

            }

        })
    },
        [])

    return (
        <div className="generalContainerHeader">
            <ul className="containerMenu">
                <Link to="/Home">
                    <li className='bttnTop home'>
                        Home
                        <span className='underline'></span>
                    </li>
                </Link>
                <Link to="/UI">
                    <li className='bttnTop'>
                        UI/UX

                    </li>
                </Link>
                <Link to="/Home">
                    <li id="imageLogo" >
                        <img src={logo} alt="logo" />
                    </li>
                </Link>
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