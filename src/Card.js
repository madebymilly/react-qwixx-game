import React from 'react'
import Box from './Box';
import './styling/Card.css'; 

function Card(props) {
  return (
    <>
      <div className="Card">
        {props.card.map((row, i) => 
          <div key={i} className="Card__row">
            {row.boxes.map(box =>
              <Box key={`${box.color}-${box.num}`} num={box.num} color={box.color} checked={box.checked} clickable={box.clickable} />
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Card;