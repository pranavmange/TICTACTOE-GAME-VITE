import './component/Styles.scss';
import Board from './component/Board';
import StatusMessage from './component/StatusMessage';
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareCLick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }

    setSquares(currrentSquares => {
      return currrentSquares.map((squareValue, position) => {
        if (clickedposition === position) {
          return isXNext ? 'X' : '0';
        }
        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareCLick={handleSquareCLick} />
    </div>
  );
}

export default App;
