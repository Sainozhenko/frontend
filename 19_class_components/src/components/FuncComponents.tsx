import React, { useState, useEffect } from "react";

const Counter1: React.FC = () => {

    const [count, setCount] = useState<number>(0); // кортеж (массив, в котором заранее известны все элементы)
    // useState 
    // React.useState()
    const [newCount, setNewCount] = useState<number>(0);
    const [title, setTitle] = useState<string>('Counter App');

    // React.useEffect()
    useEffect(() => {
        console.log('Компонент смонтирован'); // аналог componentDidMount() в classComponent
        
        return() => {
            console.log('Компонент будет удалён'); // аналог componentWillUnmount() в classComponent
        }
    }, []);

    useEffect(() => {
        console.log('Компонент обновляется'); // аналог componentDidMount() в classComponent
    }, [count]);

    const decrement = (): void => {
        // count--; Нельзя изменять значение переменной без соответствующего метода из useState. Иначе React не будет следить за изменением переменной
        setCount(count - 1); // изменяем значение переменной count
        // setCount((prevCount) => prevCount - 1) // возможность работы с актуальным (последним) значением переменной
    }

    const decrement10 = (): void => {
        setCount(count - 10);
    }

    // У React есть большое количество заранее описанных событий и html элементов
    // Здесь мы описываем событие onChange, повешанное на элемент input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewCount(+(event.target.value));
    }

    const handleClick = (): void => {
        setCount(newCount);
        setTitle(`Counter App with count: ${newCount}`);
    }

    return (
        <>
            <h1>{title}</h1>
            <p> Count: {count}</p>
            <input type="number" value={'' + newCount} onChange={handleChange}></input>
            <button onClick={handleClick}>Change count</button>
            <button onClick={() => setCount(count + 10)}> Increment10 </button> {/* increment => number + 1 */}
            <button onClick={() => setCount(count + 1)}> Increment </button> {/* increment => number + 1 */}
            <button onClick={decrement}> Decrement </button> {/* decrement => number - 1 */}
            <button onClick={decrement10}> Decrement10 </button> {/* decrement => number - 1 */}
        </>
    )
}

export default Counter1;