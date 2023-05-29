import React, { useState } from "react";

const Counter = ()=>{
    // let count = 0;
    const[count, setCount] = useState(0);

    return (
    <>
        <h2>Counter: {count}</h2>
        <button id="btn-10" onClick={()=>setCount(count-10)}>-10</button>
        <button onClick={()=> setCount(count -1)}>Decrement</button>
        <button onClick={()=> setCount(count +1)}>Increment</button>
        <button id="btn10" onClick={()=>setCount(count +10)}>+10</button>
    </>
)
};

export default Counter;