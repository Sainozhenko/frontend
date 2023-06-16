import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from '../reducer/reducers';

// 2.2 В rootReducer комбинируем все имеющиеся у нас reducer
const rootReducer = combineReducers({
    data: dataSlice,
})

// 2.1 Создаём store в котором передаём информацию о reducer,
//     который комбинирует в себе остальные redusers
export const store = configureStore({
    reducer: rootReducer
})

// export const store1 = configureStore({
//     reducer: {data: dataSlice}
// })

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;