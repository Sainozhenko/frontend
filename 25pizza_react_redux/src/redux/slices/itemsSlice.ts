import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ISortingItem } from "./filterSlice";

interface IParams{
    categoryId: number;
    sortingItem: ISortingItem;
    searchValue: string ;
    currentPage: number;
}


export const fetchItems = createAsyncThunk(
    'items/itemsFetchStatus',
    async(params: IParams) => {
        const{categoryId, sortingItem, searchValue, currentPage} = params;
        const res = await fetch(`https://6442fcd190738aa7c069c92c.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ""
    }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${searchValue ? `&search=${searchValue}` : ""
    }&page=${currentPage || 1}&limit=8`);
    const data = await res.json();
    return data;
    }
);

const initialState = {
    items: [],
    item: {},
    status: 'loading',
    activeType: 0,
    activeSize:0,
    typeName: ['тонкое', 'традиционное']
}
export const itemsSlice= createSlice({
    name:'items',
    initialState,
    reducers: {
        setItems(state = initialState, action){
            state.items = action.payload;
        },
        setItem(state = initialState, action){
            state.item = action.payload;
            localStorage.setItem('item',JSON.stringify(action.payload));
        },
        setActiveType(state= initialState, action){
            state.activeType = action.payload;
        },
        setActiveSize(state= initialState, action){
            state.activeSize = action.payload;
        }
    },
    extraReducers:{
        [fetchItems.pending.type]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchItems.fulfilled.type]: (state, action)=> {
            state.status ='success'
            state.items = action.payload;
        },
        [fetchItems.rejected.type]: (state)=>{
            state.status = 'error';
            state.items = [];
        }

    }
});

export const selectItemsData = (state:any) => state.items;

export const { setItems, setItem, setActiveSize, setActiveType } = itemsSlice.actions;

export default itemsSlice.reducer;