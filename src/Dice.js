import React, { useState } from 'react';
import Die from './Die';
import './styling/Dice.css';



function Dice(props) {
  console.log('render dice')
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const [isRolling, setIsRolling] = useState(false);
  const rollDice = () => {
    setIsRolling(true);
    const tempDice = dice.map(die => Math.floor(Math.random() * dice.length) + 1);
    setDice(tempDice);
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  }
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
