import {Reducer} from 'redux';

interface ITodo{
    id: number;
    text: string;
    completed: boolean;
}

interface ITodoState{
    todos: ITodo[];
}

interface AddTodoAction{
    type: 'ADD_TODO';
    payload: ITodo;
}

type TodoAction = AddTodoAction;

const initialState: ITodoState = {
    todos:[],
}

const todoReducer: Reducer<ITodoState, TodoAction> = (
    state = initialState, 
    action
    ):ITodoState=>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

            default:
                return state;
    }
}
export default todoReducer;