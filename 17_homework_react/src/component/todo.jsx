import React from "react";
import "./todo.css";

const Todo = ()=>{
const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
addTaskButton.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key === 'Enter') {
        addTask();
    }
});
taskListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        e.target.previousSibling.style.textDecoration = 'line-through black';
    } else {
        e.target.previousSibling.style.textDecoration = 'none';
    }
});

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span><input type="checkbox"><button>Delete</button>`;
        taskListUl.appendChild(li);
    }
    task.value = '';
}
return (
    <div class="container">
    <h1>Todo List App</h1>
    <div class="input-container">
        <input type="text" id="taskInput" placeholder="Enter a task..."/>
        <button id="addTask">Add Task</button>
    </div>
    <ol id="taskList"></ol>
</div>
)
}
export default Todo;