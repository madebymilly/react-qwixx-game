import React from 'react'
import Dice from './Dice'
import Players from './Players'
import { PlayersProvider } from './context/PlayersContext';
import { DiceProvider } from './context/DiceContext';

const diceColors = ['white', 'white', 'red', 'yellow', 'green', 'blue'];
const diceFaces = [ 'one', 'two', 'three', 'four', 'five', 'six' ];

function Qwixx() {

  return (
    <>
      <PlayersProvider>
        <DiceProvider>
          <h1>A Game of Qwixx</h1>
          <Dice 
            colors={diceColors} 
            faces={diceFaces} 
          />
          <Players />
        </DiceProvider>
      </PlayersProvider>
    </>
  )
}

export default Qwixx;