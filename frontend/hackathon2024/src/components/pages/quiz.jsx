import React from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import QuizSolver from "../quizSolver/quizSolver";

const question1 = {
    "_id": "questionId",
    "questionText": "Jakie aktywno?ci Ci? interesuj??",
    "answers": [
    { "id": "A", "text": "Artystyczne (np. malowanie, rysowanie, fotografia)", "tags": ["artystyczne"] },
    { "id": "B", "text": "Sportowe (np. bieganie, pi?ka no?na, joga)", "tags": ["sportowe"] },
    { "id": "C", "text": "Naukowe (np. astronomia, biologia, chemia)", "tags": ["naukowe"] },
    { "id": "D", "text": "Techniczne (np. programowanie, majsterkowanie, robotyka)", "tags": ["techniczne"] }
    ],
    "nextQuestionId": "nextQuestionId"
};

function Quiz(){
    return(
        <div className='mainContainer'>
            <Header/>
            <Navigation/>
            <QuizSolver question={question1}/>
            <Footer/>
        </div>
    );
}

export default Quiz;