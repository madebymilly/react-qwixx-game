import React from 'react';

import './styling/Die.css';

function Die(props) {

  const faces = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'};

  return (
    <div className={`Die Die-${props.color} ${props.shake && 'shake'}`}>
      <i className={`fas fa-dice-${faces[props.num]}`} style={{'color': props.color}}></i>
    </div>
  )
}

export default Die;
