import React from 'react';
import Card from './Card'
import './styling/Player.css'
import { cardContent } from './data/cardContent.js';

function Player(props) {
  return (
    <div className="Player">
      <h3 className="Player__name">{props.name}</h3>
      <Card player={props.id} card={cardContent} />
    </div>
  )
}


export default Player;
