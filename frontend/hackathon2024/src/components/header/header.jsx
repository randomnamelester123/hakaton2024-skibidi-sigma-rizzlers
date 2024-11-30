import React from "react";
import Logo from '../assets/SkibidiLogo.png';
import './header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='Header'>
            <Link to='/'>
                <h1 className='rubik-glitch-regular'>Skibidi Hobby</h1>
            </Link>
        </div>
    );
}

export default Header;