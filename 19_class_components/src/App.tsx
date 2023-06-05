import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/FuncComponents';

function App() {
  return (
    <div className="App">
      {/* От родительского компонента App передаём набор информации через props
          дочерним компонентам. Передача props возможна только от родителя к ребёнку(!).
          Props записываются как "атрибут" "тэга" компонента */}
      <Counter initialValue={0}/>
      <Counter initialValue={100}/>
      <Counter initialValue={10000}/>
      <Counter1 />
    </div>
  );
}

export default App;