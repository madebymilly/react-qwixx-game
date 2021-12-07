import React, { createContext, useState } from 'react';

export const DiceContext = createContext();

export function DiceProvider(props) {

  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setDice(dice.map(die => Math.floor(Math.random() * dice.length) + 1));
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  }

  return (
    <DiceContext.Provider value={{dice, isRolling, rollDice}}>
      {props.children}
    </DiceContext.Provider>
  );

}