function playersReducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_BOX':
      return state.map(player => 
        player.id === action.playerId ? {...player, boxes: player.boxes.map(box => 
          box.id === action.boxId ? {...box, checked: !box.checked } : box
        )} : player );
    case 'TOGGLE_PENALTY_BOX':
      return state.map(player => 
        player.id === action.playerId ? {...player, penalties: player.penalties.map(box => 
          box.id === action.boxId ? {...box, checked: !box.checked } : box
        )} : player );
    default:
      return state;
  }
}

export default playersReducer;