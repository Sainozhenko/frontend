import React from 'react';
import './App.css';
import TodoList from './components/todolist/TodoList';

function App():JSX.Element {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;