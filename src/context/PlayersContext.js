import React, { createContext } from 'react';
import playersReducer from '../reducer/playersReducer.js';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer.js';

export const PlayersContext = createContext();
export const DispatchContext = createContext();

export function PlayersProvider(props) {

  //const [state, dispatch] = useReducer(playersReducer, []);
  const [players, dispatch] = useLocalStorageReducer('players', [], playersReducer);
  
  return (
    <PlayersContext.Provider value={players}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </PlayersContext.Provider>
  );

}