import React, { createContext, useReducer, useState } from 'react';

import playersReducer from '../reducer/playersReducer.js';

export const PlayersContext = createContext();
export const DispatchContext = createContext();

export function PlayersProvider(props) {

  

  const [state, dispatch] = useReducer(playersReducer, []);
  
  
  return (
    <PlayersContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </PlayersContext.Provider>
  );

}