import { Action } from "redux";

export interface IncrementAction extends Action{
    type: 'INCREMENT';
} 

export interface DecrementAction extends Action{
    type: 'DECREMENT';
} 

export type CounterAction = IncrementAction | DecrementAction;

export const increment = ():IncrementAction => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ():DecrementAction => {
    return {
        type: 'DECREMENT'
    }
}