import React, { useState } from 'react'
import './styling/StartGameForm.css'

function StartGameForm(props) {

  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startGame(numberOfPlayers);
    setNumberOfPlayers('');
  }

  const handleChange = (e) => {
    setNumberOfPlayers(e.target.value);
  }
  
  return (
    <form className="StartGameForm" onSubmit={handleSubmit}>
      <div className="StartGameForm-input">
        <label htmlFor="numberOfPlayers">Number of Players (2-6):</label>
        <input type="number" id="numberOfPlayers" name="numberOfPlayers" min="2" max="6" value={numberOfPlayers} onChange={handleChange} />
      </div>
      <button className="Primary-button">Start Your Game of Qwixx!</button>
    </form>
  )

}

export default StartGameForm;
