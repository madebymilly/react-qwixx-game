import React, { useContext } from 'react';
import Player from './Player';
import { PlayersContext } from './context/PlayersContext';

function Players(props) {

  const players = useContext(PlayersContext);

  return (
    <div className="Players">
      {players.map(player => 
        <Player key={player.id} {...player} />
      )}
    </div>
  )
}

export default Players;