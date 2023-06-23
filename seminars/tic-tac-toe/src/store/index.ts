import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "../reducers";

export const store = configureStore({
    reducer: gameReducer
})