import React from 'react'
import Box from './Box';
import PenaltyBox from './PenaltyBox';
import './styling/Card.css'; 
import './styling/Scores.css'; 
import { scores } from './data/scores'

function Card(props) {

  const { boxes, penalties, playerId } = props;

  const createRows = () => {
    let rows = [];
    for ( let i = 1; i <= 5; i++ ) {
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

  const createPenaltyRow = () => {
    const penaltyBoxes = penalties.map(penalty => 
      <PenaltyBox key={penalty.id} {...penalty} playerId={playerId} />
    );
    return <div className="Card__row Card__row--penalties">{penaltyBoxes} <span>(penalties)</span></div>
  }

  const getScore = (color) => {
    let count = 0;
    count = boxes.filter(box => box.color === color && box.checked === true).length;
    return scores[count];
  }

  const redScore = getScore('red');
  const yellowScore = getScore('yellow');
  const greenScore = getScore('green');
  const blueScore = getScore('blue');
  const penaltyScore = penalties.filter(box => box.checked === true).length * -5;
  const totalScore = redScore + yellowScore + greenScore + blueScore + penaltyScore;

  return (
    <>
      <div className="Card">
        {createRows()}
        {createPenaltyRow()}
        <div className="Scores">
          <div className="Scores--red">Red: {redScore}</div>
          <div className="Scores--grey">Penalties: {penaltyScore}</div>
          <div className="Scores--yellow">Yellow: {yellowScore}</div>
          <div className="Scores--total">TOTAL: {totalScore} </div>
          <div className="Scores--green">Green: {greenScore}</div>
          <div className="Scores--blue">Blue: {blueScore}</div>
        </div>
      </div>
    </>
  )
}

export default Card;