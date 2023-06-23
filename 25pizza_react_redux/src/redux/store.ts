import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import itemsReducer from './slices/itemsSlice';

export default configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        items: itemsReducer,
        cart:  cartReducer
    }
});