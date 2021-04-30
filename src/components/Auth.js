import React, { useState, useContext } from 'react';
import { QuizContext } from '../quiz-context';
import './Auth.css';

const Auth = () => {
    const [username, setUsername] = useState('');
    const { setAppState, setName } = useContext(QuizContext);

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setName(username);
        setAppState("quiz");
    };

    return (
        <div className="Auth">
            <form onSubmit={formSubmitHandler}>
                <label>User Name: </label>
                <input
                    className="Input"
                    value={username}
                    placeholder="Enter Username"
                    onChange={usernameChangeHandler}
                /><br /><br />
                <button type="submit" className="btn-start">START QUIZ</button>
            </form>
        </div>
    );
};

export default Auth;