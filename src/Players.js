import React, { useContext, useEffect } from 'react';
import Player from './Player';
import { DispatchContext, PlayersContext } from './context/PlayersContext';

function Players(props) {

  const players = useContext(PlayersContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({type: 'SET_PLAYERS', num: props.numOfPlayers});
  }, [props.gameStarted]);
  
  return (
    <div className="Players">
      {players.map(player => 
        <Player key={player.id} {...player} />
      )}
    </div>
  )
}

export default Players;