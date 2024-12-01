import React from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import HobbySearcher from "../hobbySearcher/hobbySearcher";

function Search(){
    return(
        <div className='mainContainer'>
            <Header/>
            <Navigation/>
            <HobbySearcher address='/hobby_template.json'/>
            <Footer/>
        </div>
    );
}

export default Search;