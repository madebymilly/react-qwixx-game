import React, {useContext} from 'react'
import Card from './Card';
import { PlayersContext, DispatchContext } from './context/PlayersContext';


function Players(props) {

  const players = useContext(PlayersContext);

  return (
    <div className="Players">
      {players.map(player => 
        <div key={player.id} className="Player">
          <h3 className="Player__name">{props.name}</h3>
          <Card boxes={player.boxes} playerId={player.id} />
      </div>
      )}
    </div>
  )
}

export default Players;