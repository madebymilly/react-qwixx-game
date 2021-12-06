import React, { memo, useContext } from 'react'
import './styling/Box.css'
import { DispatchContext } from './context/PlayersContext';

function PenaltyBox(props) {
  const { id, clickable, checked, playerId} = props;
  const dispatch = useContext(DispatchContext);
  const handleClick = () => {
    if (clickable) {
      dispatch({type: 'TOGGLE_PENALTY_BOX', playerId: playerId, boxId: id});
    }
  }
  return (
    <div className={`Box Box--grey ${checked && 'is-checked'}`} onClick={handleClick}></div>
  )
}

export default memo(PenaltyBox);
