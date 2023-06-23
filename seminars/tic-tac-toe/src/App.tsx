import React from 'react';
import './App.css';
import Game from './components/Game';
import { store } from './store';
import { addMove, resetGame } from './action';

function App() {
  return (
    <Game
      board={store.getState().board}
      currentPlayer={store.getState().currentPlayer}
      winner={store.getState().winner}
      addMove={(index, player) => store.dispatch(addMove(index, player))}
      resetGame={() => store.dispatch(resetGame())}
    />
  );
}

export default App;
