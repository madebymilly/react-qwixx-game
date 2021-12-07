import React, { useContext } from 'react';
import Die from './Die';
import './styling/Dice.css';
import { DiceContext } from './context/DiceContext';

function Dice(props) {

  const { dice, isRolling, rollDice } = useContext(DiceContext);

  return (
    <div className="Dice">
      <div className="Dice-dice">
        {props.colors.map((diceColor, i) =>
          <Die key={i} color={diceColor} num={dice[i]} shake={isRolling} />
        )}
      </div>
      <button className="Dice-button" onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default Dice;
