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

  const getContent = () => {
    if (num === 'lock') {
      return <i className="fas fa-lock"></i>
    }
    return num;
  }

  return (
    <div className={`Box Box--${num} Box--${color} ${checked && 'is-checked'}`} onClick={handleClick}>{getContent()}</div>
  )
}

export default memo(Box);
