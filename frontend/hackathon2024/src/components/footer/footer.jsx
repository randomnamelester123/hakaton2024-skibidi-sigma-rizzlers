import React from "react";
import Copyright from "../copyright/copyright";
import './footer.css'

function Footer(){
    return(
        <div className="Footer">
            <Copyright/>
            <a href='#'>Regulamin</a>
            <a href='#'>Partnerstwa</a>
            <a href='#'>Autorzy</a>
        </div>
    );
}

export default Footer;