import React, { useEffect, useRef } from 'react'

const Homework = () => {
    //inputRef ссылка, на какой элемент ее повесить до такого элемента и будем иметь доступ 
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(()=>{
        const savedValue = localStorage.getItem('myValue');
        if(savedValue&& inputRef.current){
            inputRef.current.value = savedValue;
        }
    },[]);
    const handleSave = () => {
        const value = inputRef.current?.value? inputRef.current?.value : '';
        localStorage.setItem('myValue', value);
    }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  )
}

export default Homework;
