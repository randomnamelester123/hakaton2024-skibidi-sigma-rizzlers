import {Component, React, useEffect} from "react";
import './quizSolver.css';
import axios from "axios";

class QuizSolver extends Component{
    state = {
        questions: null,
    };

    componentDidMount(){
        axios.get(this.props.address).then(res => {
            this.setState({
                questions: res.data,
            });
        })
        .catch(error => {
            console.error("Błąd zapytania API:", error);
        });
    }

    render(){
        const questionsList = this.state.questions && this.state.questions.map(question =>{
            return(
                <div className='pytanie'>
                    <p>Pytanie {question.id_pytania}: {question.text_pytania}</p>
                    <ul>
                        {question.answers.map(answer => (
                            <li key={answer.id}>
                            {answer.id}: {answer.text}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        });


        return(
            <div>
                {questionsList ? questionsList : <h1>Nie udało się wczytać bazy pytań :(</h1>}
            </div>
        );
    }
}

export default QuizSolver;