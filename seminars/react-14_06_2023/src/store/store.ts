import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/todoReducer";

export const store = configureStore({
    reducer:{
        todo: rootReducer
    }}
)