import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface InterfaceItem {
    id: number;
    name: string;
    count: number;
    price: number;
};

interface ICartState{
    totalPrice: number;
    items: InterfaceItem[];
};

const initialState: ICartState = {
    totalPrice:0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state= initialState, action:PayloadAction<InterfaceItem>) {
            const findItem = state.items.find((item:InterfaceItem)=>item.id === action.payload.id);
            if(findItem){
                findItem.count++;
            }else{
                state.items.push({...action.payload, count:1});
            }
            state.totalPrice= state.items.reduce(
                (acc,item)=>acc + item.price * item.count,0
            );
        },
        incrementCount(state = initialState, action:PayloadAction<number>){
            const findItem = state.items.find((item:InterfaceItem)=> item.id === action.payload);
            if(findItem){
                findItem.count++;
            }
            state.totalPrice= state.items.reduce(
                (acc,item) => acc+ item.price* item.count,0
            );
        },
        decrementCount(state = initialState, action:PayloadAction<number>){
            const findItem = state.items.find((item:InterfaceItem)=> item.id === action.payload);
            if(findItem && findItem.count >=1 ){
                findItem.count--;
            }
            state.totalPrice= state.items.reduce(
                (acc,item) => acc+ item.price* item.count,0
            );
        },
        removeAllItems(state){
            state.items = [];
            state.totalPrice = 0;
        },
        removeItem(state,action){
            state.items = state.items.filter(item=> item.id!== action.payload);
            state.totalPrice = state.items.reduce((
                acc,item)=> acc+item.price* item.count,0);
        }

    }
});

// export const seelctCart = (state)=> state.cart;

export const {
    addToCart,
    incrementCount,
    decrementCount,
    removeAllItems,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;