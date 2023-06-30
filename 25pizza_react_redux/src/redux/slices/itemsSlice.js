import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "items/itemsFetchStatus",
  async (params) => {
    const { categoryId, sortingItem, searchValue, currentPage } = params;
    const res = await fetch(
      `https://6442fcd190738aa7c069c92c.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${searchValue ? `&search=${searchValue}` : ""
      }&page=${currentPage || 1}&limit=8`
    );
    const data = await res.json();
    return data;
  }
);

const initialState = {
  items: [],
  item: {},
  status: "loading",
  activeType: 0,
  activeSize: 0,
  typeNames: ["тонкое", "традиционное"],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, actions) {
      state.items = actions.payload;
    },
    setItem(state, actions) {
      state.item = actions.payload;
      localStorage.setItem('item', JSON.stringify(actions.payload));
    },
    setActiveType(state, actions) {
      state.activeType = actions.payload;
    },
    setActiveSize(state, actions) {
      state.activeSize = actions.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, actions) => {
      state.status = "success";
      state.items = actions.payload;
    },
    [fetchItems.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectItemsData = (state) => state.items;

export const { setItems, setItem, setActiveSize, setActiveType } =
  itemsSlice.actions;

export default itemsSlice.reducer;
