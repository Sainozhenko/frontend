import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';

export default configureStore({
    reducer: {
        cart:  cartReducer
    }
});