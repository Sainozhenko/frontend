import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState:  {value: 0}, 
    reducers:{
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        }
    }
})


export const { increment, decrement} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;