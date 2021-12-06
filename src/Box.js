import React, { memo, useContext } from 'react'
import './styling/Box.css'
import { DispatchContext } from './context/PlayersContext';

function Box(props) {
  const { id, num, color, row, clickable, checked, playerId} = props;
  const dispatch = useContext(DispatchContext);
  const handleClick = () => {
    if (clickable) {
      dispatch({type: 'TOGGLE_BOX', playerId: playerId, boxId: id});
    }
  }
  return (
    <div className={`Box Box--${num} Box--${color} ${checked && 'is-checked'}`} onClick={handleClick}>{num}</div>
  )
}

export default memo(Box);
