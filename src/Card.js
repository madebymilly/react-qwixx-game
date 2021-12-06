import React from 'react'
import Box from './Box';
import './styling/Card.css'; 

function Card(props) {

  const { boxes, playerId } = props;

  const createRows = () => {
    let rows = [];
    for ( let i = 1; i <= 4; i++ ) {
      rows.push(
        <div key={i} className="Card__row">
          {boxes.filter( box => box.row === i ).map(box => 
            <Box key={box.id} {...box} playerId={playerId} />
          )}
        </div>
      );
    }
    return rows;
  }
  return (
    <>
      <div className="Card">
        {createRows()}
      </div>
    </>
  )
}

export default Card;