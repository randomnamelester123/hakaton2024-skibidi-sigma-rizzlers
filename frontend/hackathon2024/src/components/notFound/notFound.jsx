import React from "react";
import ChillGuy from '../assets/chill-guy.png';
import { Link } from "react-router-dom";
import './notFound.css';

function NotFound(){
    return(
        <div className="container">
            <h1>Błąd 404</h1>
            <p>Kiedy błąd 404, ale Ty jesteś tylko wychillowanym gościem, który chce na naszej stronie znaleźć swoją nową skibidi zajawkę:</p>
            <img className='image404' src={ChillGuy}></img>
            <Link to="/">Powrót na stronę główną.</Link>
        </div>
    );
}

export default NotFound;