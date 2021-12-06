import React from 'react'
import Card from './Card'
import './styling/Player.css'

function Player(props) {
  const { id, name, boxes} = props;
  return (
    <div className="Player">
      <h3 className="Player__name">{name}</h3>
      <Card boxes={boxes} playerId={id} />
    </div>
  )
}

export default Player;
