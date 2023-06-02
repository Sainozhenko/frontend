import React,{ ChangeEvent, useState } from 'react';
import './App.css';

const App:React.FC = () => {

  const[newName,setNewName] = useState<string>('');
  const[names,setNames] = useState<string[]>([]);



  //newName = '10';Нельзя менять напрямую значение состояния, полученого через hook useState()
  //setNewName(10); Можно менять значение состояния только используя соотвествующий метод полученный через hook useState();

const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
 setNewName(e.target.value);
}

const HandleAddName = ()=>{
  if(newName.trim()!== ''){
    //setNames([''])
    //Особый синтаксис для получения нового значения массива, опирающиеся на старые данные использует оператор spred
    setNames((prev)=>[...prev,newName]);
    setNewName('');
  }
}

  return (
    <div className="App">
      <h1 style={{marginBottom: '150px'}}>Names App</h1>
      <ul>
        {names.map((name,index)=>(
          <li key={index+1}>{name}</li>
        ))}
      </ul>
      <div>
          <input
          value={newName} 
          onChange={handleInputChange} 
          type="text" 
          placeholder='Enter a name' />
          <button onClick={HandleAddName} >Add name</button>
        </div>
    </div>
  );
}

export default App;