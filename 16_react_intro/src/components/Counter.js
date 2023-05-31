import React, { useState } from "react";

const Counter = ()=>{
    // let count = 0;
    const[count, setCount] = useState(0);
    // const decrement = ()=>{
    // setCount(count-1);
    // setCount ((prevCount)=>-1) // возможность работы с актуальным значениям переменной
    // }
    const [newCount,setNewCount] = useState(0);

    const handleChange = (event)=>{
        setNewCount(parseInt(event.target.value));
    }

    const handleClick = ()=>{
        setCount(newCount);
        setTitle(`CounterApp: ${count} `);
    }

    const[title,setTitle] = useState('CounterApp');

    return (
    <>
        <h1>{title}</h1>
        <h2>Counter: {count}</h2>
        <button id="btn-10" onClick={()=>setCount(count-10)}>-10</button>
        <button onClick={()=> setCount(count -1)}>Decrement</button>
        <button id="zero" onClick={()=> setCount(0)}>ZERO</button>
        <button onClick={()=> setCount(count +1)}>Increment</button>
        <button id="btn10" onClick={()=>setCount(count +10)}>+10</button>
        <hr></hr>
        <input type='number' value={newCount} onChange={handleChange} placeholder="Change you counter"></input>
        <button onClick={handleClick}>Ok</button>
    </>
)
};

export default Counter;