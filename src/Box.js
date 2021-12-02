import React from 'react'
import './styling/Box.css'

function Box(props) {
  const { num, color, checked, clickable } = props;
  return (
    <div className={`Box Box--${num} Box--${color} ${checked && 'is-checked'}`}>{num}</div>
  )
}

export default Box;
