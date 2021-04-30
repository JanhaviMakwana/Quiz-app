import React, { useContext } from 'react';
import { QuizContext } from '../quiz-context';
import './Result.css';

const Result = () => {

    const { score, name } = useContext(QuizContext);

    return (
        <div className="Result">
            {`${name} , your result : ${score}`}
        </div>
    );
};

export default Result;