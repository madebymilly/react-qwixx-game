import React from 'react';

import Die from './Die';

import './styling/Dice.css';

function Dice(props) {
  console.log('render dice')
  return (
    <div className="Dice">
      <div className="Dice-dice">
        {props.colors.map((diceColor, i) =>
          <Die key={i} color={diceColor} face="one" />
        )}
      </div>
      <button className="Dice-button">Throw Dice</button>
    </div>
  )
}

export default Dice;
