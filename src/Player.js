import React, { memo, useContext, useState } from 'react'
import Card from './Card'
import './styling/Player.css'
import { DispatchContext } from './context/PlayersContext';

function Player(props) {
  const { id, name, boxes, penalties} = props;
  const dispatch = useContext(DispatchContext);
  const [editable, toggleEditable] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleEditName = () => {
    toggleEditable(!editable);
  }

  const handleSubmit = () => {
    dispatch({type: 'CHANGE_PLAYER_NAME', playerId: id, name: newName });
    toggleEditable(!editable);
  }

  return (
    <div className="Player">
      {!editable
        ? <h3 className="Player__name" onClick={handleEditName}>{name}</h3>
        : <form className="Editform" onSubmit={handleSubmit}>
            <input type="text" id="playerName" name="playerName" value={newName} onChange={handleChange} />
            <button className="Secondary-button">Edit</button>
          </form>
      }
      <Card boxes={boxes} penalties={penalties} playerId={id} />
    </div>
  )
}

export default memo(Player);
