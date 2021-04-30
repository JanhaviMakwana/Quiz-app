import React, { useState, useContext } from 'react';
import { QuizContext } from '../quiz-context';
import { questions } from './questions';
import './Quiz.css';

const Quiz = () => {

    const { setAppState, score, setScore } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        };
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        };
        setAppState('result');
    };

    return (
        <div className="Quiz">
            <h1>Question</h1>
            <h1>{questions[currQuestion].question}</h1>
            <table>
                <tr>
                    <td>Option A</td>
                    <td><button onClick={() => setOptionChosen("A")}>{questions[currQuestion].options[0]}</button><br /><br /></td>
                </tr>
                <tr>
                    <td>Option B</td>
                    <td><button onClick={() => setOptionChosen("B")}>{questions[currQuestion].options[1]}</button><br /><br /></td>
                </tr>
                <tr>
                    <td>Option C</td>
                    <td><button onClick={() => setOptionChosen("C")}>{questions[currQuestion].options[2]}</button><br /><br /></td>
                </tr>
                <tr>
                    <td>Option D</td>
                    <td><button onClick={() => setOptionChosen("D")}>{questions[currQuestion].options[3]}</button><br /><br /></td>
                </tr>
            </table>
            <div>








            </div>
            {currQuestion === questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
};

export default Quiz;