import './App.css';
import React, { useState } from 'react';
import Auth from './components/Auth';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { QuizContext } from './quiz-context';

function App() {

  const [appState, setAppState] = useState('start');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App" style={{
      backgroundColor: 'white', width: '50%', margin: '100px auto', height: '400px'
    }}>
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ appState, setAppState, score, setScore, name, setName }}>
        {appState === 'start' && <Auth />}
        {appState === 'quiz' && <Quiz />}
        {appState === 'result' && <Result />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
