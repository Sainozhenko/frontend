import "./App.css";
import React from "react";
import Counter from "./Components/counter";

const App:React.FC = ()=>{
  // dffvsd
    return (
        <div> {/* в return может быть вложен только 1 элемент на верхнем уровне */}
            <Counter />
        </div>
    );
}

export default App;
