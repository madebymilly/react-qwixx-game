import { boxesContent, penaltiesContent } from '../data/cardContent.js';

function playersReducer(state, action) {
  switch(action.type) {
    case 'SET_PLAYERS':
      let players = [];
      for (let i = 1; i <= action.num; i++) {
        players = [...players, {id: i, name: `Player` + i, boxes: boxesContent, penalties: penaltiesContent}]
      }
      return players;
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