import React, { useState, useContext } from 'react'
import Dice from './Dice'
import Players from './Players'
import StartGameForm from './StartGameForm';
import { DispatchContext } from './context/PlayersContext';
// import { PlayersProvider } from './context/PlayersContext';
// import { DiceProvider } from './context/DiceContext';

const diceColors = ['white', 'white', 'red', 'yellow', 'green', 'blue'];
const diceFaces = [ 'one', 'two', 'three', 'four', 'five', 'six' ];

function Qwixx() {

  const dispatch = useContext(DispatchContext);

  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (numberOfPlayers) => {
    setGameStarted(true);
    dispatch({type: 'SET_PLAYERS', num: numberOfPlayers})
  }

  return (
    <>
      <h1>A Game of Qwixx</h1>
      {!gameStarted 
      ? <StartGameForm startGame={startGame} />
      : <>
          <Dice 
            colors={diceColors} 
            faces={diceFaces} 
          />
          <Players />
        </>
      }
    </>
  )
}

export default Qwixx;