import React, { createContext, useReducer } from 'react';
import { boxesContent, penaltiesContent } from '../data/cardContent.js';
import playersReducer from '../reducer/playersReducer.js';

const defaultPlayers = [ // TODO: move to state when StartGameForm component is done.
  {id: 0, name: 'Milly', boxes: boxesContent, penalties: penaltiesContent},
  {id: 1, name: 'Ruben', boxes: boxesContent, penalties: penaltiesContent}
];

export const PlayersContext = createContext();
export const DispatchContext = createContext();

export function PlayersProvider(props) {

  const [state, dispatch] = useReducer(playersReducer, defaultPlayers);
  
  return (
    <PlayersContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </PlayersContext.Provider>
  );

}