import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState, decrement, increment } from '../store/store';

const Counter = () => {

  //dispath - єто метод внутри которого выполняется действия связанные с изменениям
  //глобального состояния. Схожий принцип с хуком useState где state тоже можно изменять только с помощью специального метода
const dispatch = useDispatch();

//c помощью useSelector получаем глоабльное состояние 
const counter = useSelector((state:RootState)=> state.counter.value)

const handIncrement = () =>{
  dispatch(increment());
}

const handDecrement = () =>{
  dispatch(decrement());
}


  return (
    <div>
     <h2>Counter: {counter}</h2> 
     <button onClick={handIncrement}>Increment</button>
     <button onClick={handDecrement}>Decrement</button>
    </div>
  )
}

export default Counter;
