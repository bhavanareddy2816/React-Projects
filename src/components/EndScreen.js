import React from 'react'
import {QuizContext} from "../helpers/helper";
import { useContext } from 'react';
import "../App.css";
import { Questions } from '../helpers/QuestionBank';


const EndScreen = () => {
  const {score , setScore , setGameState} = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className='EndScreen'>
       <h1>Quiz Finished</h1>
       <h3>{score} / {Questions.length}</h3>
       <button onClick={restartQuiz}>ReStart Quiz</button>
      </div>
  )
}

export default EndScreen