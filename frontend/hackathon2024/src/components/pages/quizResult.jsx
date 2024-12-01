import React from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import TestowyRekord from "../testowyRekord";

function QuizResult(){
    return(
        <div className='mainContainer'>
            <Header/>
            <Navigation/>
            <TestowyRekord address="/hobby_template.json"/>
            <Footer/>
        </div>
    );
}

export default QuizResult;