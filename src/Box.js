import React, { memo, useContext } from 'react'
import './styling/Box.css'
import { DispatchContext } from './context/PlayersContext';

function Box(props) {
  const { id, num, color, row, clickable, checked, playerId} = props;
  const toggleBox = useContext(DispatchContext);
  const handleClick = () => {
    clickable && toggleBox(playerId, id);
  }
  console.log('render box');
  return (
    <div className={`Box Box--${num} Box--${color} ${checked && 'is-checked'}`} onClick={handleClick}>{num}</div>
  )
}

export default memo(Box);
