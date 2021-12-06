import React from 'react'
import Box from './Box';
import './styling/Card.css'; 
import './styling/Scores.css'; 
import { scores } from './data/scores'

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

  const getScore = (color) => {
    let count = 0;
    count = boxes.filter(box => box.color === color && box.checked === true).length;
    return scores[count];
  }

  return (
    <>
      <div className="Card">
        {createRows()}
        <div className="Scores">
          <div className="Scores--red">Red: {getScore('red')}</div>
          <div className="Scores--yellow">Yellow: {getScore('yellow')}</div>
          <div className="Scores--green">Green: {getScore('green')}</div>
          <div className="Scores--blue">Blue: {getScore('blue')}</div>
        </div>
      </div>
    </>
  )
}

export default Card;