import React, { useState, createContext } from 'react';
import { cardContent } from '../data/cardContent.js';

const defaultPlayers = [ // TODO: move to state when StartGameForm component is done.
  {id: 0, name: 'Milly', boxes: cardContent},
  {id: 1, name: 'Ruben', boxes: cardContent}
];

export const PlayersContext = createContext();
export const DispatchContext = createContext();

export function PlayersProvider(props) {

  const [players, setPlayers] = useState(defaultPlayers);

  const toggleBox = (playerId, boxId) => {
    console.log(playerId, boxId)
    let newPlayers = players.map(player => 
      player.id === playerId ? {...player, boxes: player.boxes.map(box => 
        box.id === boxId ? {...box, checked: !box.checked } : box
      )} : player );
    setPlayers(newPlayers);
  };
  
  return (
    <PlayersContext.Provider value={players}>
      <DispatchContext.Provider value={toggleBox}>
        {props.children}
      </DispatchContext.Provider>
    </PlayersContext.Provider>
  );

}