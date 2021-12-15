import React, { useState } from 'react'
import Dice from './Dice'
import Players from './Players'
import StartGameForm from './StartGameForm';
import { PlayersProvider } from './context/PlayersContext';
import { DiceProvider } from './context/DiceContext';
import { useLocalStorageState } from './hooks/useLocalStorageState';

const diceColors = ['white', 'white', 'red', 'yellow', 'green', 'blue'];
const diceFaces = [ 'one', 'two', 'three', 'four', 'five', 'six' ];

function Qwixx() {

  //const [numOfPlayers, setNumOfPlayers] = useState(2);
  const [numOfPlayers, setNumOfPlayers] = useLocalStorageState('numOfPlayers', 2);
  //const [gameStarted, setGameStarted] = useState(false);
  const [gameStarted, setGameStarted] = useLocalStorageState('gameStarted', false);
  

  const startGame = (num) => {
    setGameStarted(true);
    setNumOfPlayers(num);
  }

  return (
    <>
      <h1>A Game of Qwixx</h1>
      {!gameStarted 
        ? <StartGameForm startGame={startGame} />
        : <PlayersProvider>
            <DiceProvider>
              <Dice 
                colors={diceColors} 
                faces={diceFaces} 
              />
              <Players gameStarted={gameStarted} numOfPlayers={numOfPlayers} />
            </DiceProvider>
          </PlayersProvider>
      }
    </>
  )
}

export default Qwixx;