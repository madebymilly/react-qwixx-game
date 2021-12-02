import React from 'react'
import Dice from './Dice'
import Player from './Player'

const players = [ // TODO: move to state when StartGameForm component is done.
  {id: 0, name: 'Milly'},
  {id: 1, name: 'Ruben'}
];

const diceColors = ['white', 'white', 'red', 'yellow', 'green', 'blue'];
const diceFaces = [ 'one', 'two', 'three', 'four', 'five', 'six' ];

function Qwixx() {
  return (
    <div>
      <h1>A Game of Qwixx</h1>
      <Dice 
        colors={diceColors} 
        faces={diceFaces} 
      />
      <div className="Players">
        {players.map(player => 
          <Player key={player.id} {...player} />
        )}
      </div>
    </div>
  )
}

export default Qwixx;