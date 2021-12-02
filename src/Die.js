import React from 'react';

import './styling/Die.css';

function Die(props) {
  return (
    <div className={`Die Die-${props.color}`}>
      <i className={`fas fa-dice-${props.face}`} style={{'color': props.color}}></i>
    </div>
  )
}

export default Die;
