import React from 'react'
import {useContext} from "react";
import { QuizContext } from '../helpers/helper';
const Menu = () => {
    const{gameState , setGameState} = useContext(QuizContext); 
  return (
    <div className='Menu'>
        <button onClick={() => setGameState("quiz")}> start Quiz </button>
    </div>
  )
}

export default Menu;