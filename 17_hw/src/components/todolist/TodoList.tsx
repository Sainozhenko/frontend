import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./TodoList.css";

// описали содержимое task
interface ITask {
    name: string,
    completed: boolean
}

const TodoList: React.FC = (): JSX.Element => {
    // React.useState ...
    // Array of all our tasks
    // Массив объектов(объекты типа ITask)
    const [tasksList, setTasksList] = useState<ITask[]>([]);
    // Current task
    // Объект типа ITask
    const [task, setTask] = useState<ITask>({name: '', completed: false});
    // boolean variable
    const [check, setCheck] = useState<boolean>(false);

    // task = {name: '', completed: false}; (неправильно)
    // setTask({name: '', completed: false}); (правильно)

    // describe onChange for our input
    // Описание event даёт возможность видеть все доступные поля и методы event
    const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        // По событию 'input' в task помещаем объект с необходимыми полями и значениями
        setTask({
            name: e.target.value,
            completed: false
        });
    };

    // describe onClick for our button
    // Описание event даёт возможность видеть все доступные поля и методы event
    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
        // В taskList помещаем все старые tasks плюс новый task
        setTasksList((prev) => [...prev, task]);
        // Затираем task
        setTask({
            name: '',
            completed: false
        });
    };

    const handleRemoveTask = (index: number): void => {
        const updatedTasks = [...tasksList];
        // method splice:
        // 1. удаляет из массива элементы, начиная с index, в количестве 1;
        // 2. изменяет исходный массив(!);
        updatedTasks.splice(index, 1);
        setTasksList(updatedTasks);

        // setTasksList([...tasksList].splice(index, 1));

        /* 
            Нельзя изменять исходную переменную из useState никаким способом,
            кроме метода, полученного из того же useState
            tasksList.splice(index, 1);
            setTasksList(taskList);
        */
    };

    console.log('task = ', task);
    console.log('tasksList', tasksList);
    

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        // в переменную check кладём актульное значение поля checked у event.target
        setCheck(e.target.checked);
        // console.log(e);
        // Создаётся копия массива
        const copy = [...tasksList];
        
        // отфильтровали массив, оставили только тот элемент, на который кликнули
        const arr = tasksList.filter((task) => {
            return task.name === e.target.value
        })

        // Заменяем поле completed на актуальное значение
        arr[0].completed = e.target.checked;
        

        const index = copy.findIndex((task) => {
            return arr[0].name === task.name
        })

        copy[index] = arr[0];

        setTasksList(copy);
    }

    // console.log(tasksList);

    return (
        <div className="container">
            <h1>Todo List App</h1>
            <input
                onChange={handleTaskNameChange}
                value={task.name}
                type="text"
                placeholder="Enter a task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ol id="taskList">
                {tasksList.map((task, index) => (
                    /* 
                       При итерации массива в синтаксисе jsx необходимо
                       задавать уникальное свойство key
                    */
                    <div key={index + 1} className="task">
                        <li style={task.completed ? { backgroundColor: 'green' } : {}}>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input
                                type="checkbox"
                                id="isDone"
                                onChange={handleIsDone}
                                name="completed"
                                value={task.name}
                            />
                            <button onClick={() => handleRemoveTask(index)}>
                                Remove
                            </button>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
