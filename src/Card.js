import React, { memo } from 'react'
import Box from './Box';
import './styling/Card.css'; 

function Card(props) {
  const { boxes, playerId } = props;
  return (
    <>
      <div className="Card">
        <div className="Card__row">
          {/* TODO: make loop: */}
          {boxes.filter( box => box.row === 1 ).map(box => 
            <Box key={box.id} {...box} playerId={playerId} />
          )}
        </div>
        <div className="Card__row">
          {boxes.filter( box => box.row === 2 ).map(box => 
            <Box key={box.id} {...box} playerId={playerId} />
          )}
        </div>
        <div className="Card__row">
          {boxes.filter( box => box.row === 3 ).map(box => 
            <Box key={box.id} {...box} playerId={playerId} />
          )}
        </div>
        <div className="Card__row">
          {boxes.filter( box => box.row === 4 ).map(box => 
            <Box key={box.id} {...box} playerId={playerId} />
          )}
        </div>
      </div>
    </>
  )
}

export default memo(Card);