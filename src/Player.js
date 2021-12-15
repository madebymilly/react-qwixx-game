import React, { memo, useContext, useState } from 'react'
import Card from './Card'
import './styling/Player.css'
import { DispatchContext } from './context/PlayersContext';
import useToggleState from './hooks/useToggleState';

function Player(props) {
  const { id, name, boxes, penalties} = props;
  const dispatch = useContext(DispatchContext);
  const [inputShown, toggleInput] = useToggleState(false);
  const [newName, setNewName] = useState(name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = () => {
    dispatch({type: 'CHANGE_PLAYER_NAME', playerId: id, name: newName });
    toggleInput();
  }

  return (
    <div className="Player">
      {inputShown
        ? <form className="Editform" onSubmit={handleSubmit}>
            <input type="text" id="playerName" name="playerName" value={newName} onChange={handleChange} />
            <button className="Secondary-button">Edit</button>
          </form>
        : <h3 className="Player__name" onClick={toggleInput}>{name}</h3>
      }
      <Card boxes={boxes} penalties={penalties} playerId={id} />
    </div>
  )
}

export default memo(Player);
