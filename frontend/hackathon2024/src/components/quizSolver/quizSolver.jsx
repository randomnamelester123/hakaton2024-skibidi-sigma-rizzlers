import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importowanie hooka useNavigate
import axios from "axios";
import "./quizSolver.css";

const QuizSolver = (props) => {
  const [questions, setQuestions] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate(); // Hook nawigacyjny

  useEffect(() => {
    axios
      .get(props.address)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => {
        console.error("Błąd zapytania API:", error);
      });
  }, [props.address]);

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answerId,
    }));
  };

  const handleSubmitQuiz = () => {
    console.log("Wybrane odpowiedzi:", selectedAnswers);
    navigate("/quiz-results"); // Przekierowanie do /quiz-results
  };

  return (
    <div>
      {questions ? (
        questions.map((question) => (
          <div className="pytanie" key={question.id_pytania}>
            <p>
              Pytanie {question.id_pytania}: {question.text_pytania}
            </p>
            <ul>
              {question.answers.map((answer) => (
                <li key={answer.id}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id_pytania}`}
                      value={answer.id}
                      checked={selectedAnswers[question.id_pytania] === answer.id}
                      onChange={() =>
                        handleAnswerSelect(question.id_pytania, answer.id)
                      }
                    />
                    {answer.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h1>Nie udało się wczytać bazy pytań :(</h1>
      )}
      <div className="containerForButton">
        <button className="zakonczQuiz" onClick={handleSubmitQuiz}>
          Zakończ quiz
        </button>
      </div>
    </div>
  );
};

export default QuizSolver;