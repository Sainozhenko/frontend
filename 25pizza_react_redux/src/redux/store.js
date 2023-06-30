import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import searchReducer from "./slices/searchSlice";
import itemsReducer from "./slices/itemsSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    items: itemsReducer,
    cart: cartReducer,
  },
});
