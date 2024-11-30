import React from "react";
import './navigation.css';
import { Link } from "react-router-dom";


function Navigation() {
    return(
        <div className="navbar">
            <nav>
                <Link className="link" to='/'>Strona główna</Link>
                <Link className="link" to='/quiz'>Quiz</Link>
                <Link className="link" to='/page1'>Wyszukiwarka</Link>
            </nav>
        </div>
    );
}

export default Navigation;