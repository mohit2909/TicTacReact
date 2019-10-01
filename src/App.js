import React from 'react';
import './App.css';
import Game from  './components/Board'
function App() {
  return (
    <div className="App">
    <h1 className="heading"> Tick-Tac Toe </h1>

      <Game/>
    </div>
  );
}

export default App;
