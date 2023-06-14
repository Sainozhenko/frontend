import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersReducer from '../reducer/reducers';

export const store = configureStore({
    reducer: usersReducer
})
const rootReducer = combineReducers({
    users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;