import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "../reducers/weatherReducer";

export const store = configureStore({
    reducer: {
        weather: weatherReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch