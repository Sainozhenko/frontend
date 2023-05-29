import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';

function App() {

  const name = 'Bob Dilan';
  
  return (
  <>
    <h1>Hello, {name}!</h1>
    <p>This is an axample of writing code in react</p>
     <MyComponent/> {/* 
     1. Комментарий в react выглядит так;
     2. Компоненты можно испольовать бесконечное количество раз;
     3. Удобство синтаксиса(пишем в js шаблон как в HTML);
     */}
     <ComponentA/>
     <Counter/>
  </>
  );
  
}

export default App;