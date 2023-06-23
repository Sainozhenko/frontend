import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ISortingItem{
    name: string;
    sortProperty: string;
    order: string
}

interface IFilterState{
    categoryId: number;
    categoryNames: string[];
    categoryName: string;
    sortingItem: ISortingItem,
    currentPage: number;
}


const initialState: IFilterState = {
    categoryId: 0,

    categoryNames: [
        'All',
        'Meats',
        'Vegans',
        'Grill',
        'Hot',
        'Closes'
    ],
    categoryName: 'All',

    sortingItem:{
        name: 'Top',
        sortProperty: 'rating',
        order: 'desc'
    },

     currentPage: 1
}


export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        onClickCategory(state= initialState, action:PayloadAction<number>){
            state.categoryId = action.payload;
            state.categoryName= state.categoryNames[state.categoryId];
        },
        onClickSort(state= initialState, action: PayloadAction<ISortingItem>){
            state.sortingItem = action.payload;
        },
        setCurrentPage(state= initialState, action: PayloadAction<number>){
            state.currentPage=action.payload;
        }
    }
});
export const selectFilter = (state:any)=> state.filter;

export const {onClickCategory, onClickSort, setCurrentPage} = filterSlice.actions;

export default filterSlice.reducer;