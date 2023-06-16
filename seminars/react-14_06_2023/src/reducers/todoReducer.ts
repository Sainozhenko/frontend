import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './index';


export const rootReducer = combineReducers({
    todo: todoReducer
})