import './component/Styles.scss';
import Board from './component/Board';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const onBtnClick = () => {
    console.log('hello');
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Click me Please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
