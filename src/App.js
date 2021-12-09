import Qwixx from './Qwixx'
import './styling/App.css';
import { PlayersProvider } from './context/PlayersContext';
import { DiceProvider } from './context/DiceContext';

function App() {
  return (
    <div className="App">
      <PlayersProvider>
        <DiceProvider>
          <Qwixx />
        </DiceProvider>
      </PlayersProvider>
    </div>
  );
}

export default App;
