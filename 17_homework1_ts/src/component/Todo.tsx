import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    const taskName = currentTask.trim();
    if (taskName) {
      setTasks([...tasks, taskName]);
      setCurrentTask("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const handleTaskDelete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskCheck = (index: number, checked: boolean) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = checked ? `<s>${updatedTasks[index]}</s>` : updatedTasks[index].replace(/<\/?s>/g, "");
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
    <h1>Todo List App</h1>
    <div className="input-container">
      <input type="text" value={currentTask} onChange={handleInputChange} placeholder="Enter a task..." />
      <button onClick={addTask}>Add Task</button>
    </div>
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <span dangerouslySetInnerHTML={{ __html: task }}></span>
          <input type="checkbox" onChange={(e) => handleTaskCheck(index, e.target.checked)} />
          <button onClick={() => handleTaskDelete(index)}>Delete</button>
        </li>
      ))}
    </ol>
  </div>
);
};

export default Todo;