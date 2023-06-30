import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, actions) {
      const findItem = state.items.find(
        (item) => item.id === actions.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...actions.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    incrementCount(state, actions) {
      const findItem = state.items.find((item) => item.id === actions.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    dicrementCount(state, actions) {
      const findItem = state.items.find((item) => item.id === actions.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    removeAllItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem(state, actions) {
      state.items = state.items.filter((item) => item.id !== actions.payload);
      state.totalPrice = state.items.reduce((acc, item) => item.price - acc, 0);
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id);

export const {
  addToCart,
  removeAllItems,
  removeItem,
  incrementCount,
  dicrementCount,
} = cartSlice.actions;

export default cartSlice.reducer;
