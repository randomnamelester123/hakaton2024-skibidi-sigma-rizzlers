import React from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import QuizSolver from "../quizSolver/quizSolver";

function Quiz(){
    return(
        <div className='mainContainer'>
            <Header/>
            <Navigation/>
            <QuizSolver address='/question_template.json'/>
            <Footer/>
        </div>
    );
}

export default Quiz;