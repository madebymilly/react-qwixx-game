function playersReducer(state, action) {
  switch(action.type) {
    // case 'ADD':
    //   return [...state, { id: 3, name: action.name, boxes: [] }]
    case 'TOGGLE_BOX':
      return state.map(player => 
        player.id === action.playerId ? {...player, boxes: player.boxes.map(box => 
          box.id === action.boxId ? {...box, checked: !box.checked } : box
        )} : player );
    default:
      return state;
  }
}

export default playersReducer;