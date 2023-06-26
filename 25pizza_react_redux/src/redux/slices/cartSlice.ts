import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface InterfaceItem {
    id: string;
    name: string;
    count: number;
    price: number;
};

interface ICartState{
    totalPrice: number;
    items: any[];
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
                (acc:number,item:any)=>acc + item.price * item.count,0
            );
        },
        incrementCount(state = initialState, action:PayloadAction<string>){
            const findItem = state.items.find((item:InterfaceItem)=> item.id === action.payload);
            if(findItem){
                findItem.count++;
            }
            state.totalPrice= state.items.reduce(
                (acc,item) => acc+ item.price* item.count,0
            );
        },
        decrementCount(state = initialState, action:PayloadAction<string>){
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
        removeItem(state,action:PayloadAction<string>){
            state.items = state.items.filter(item=> item.id!== action.payload);
            state.totalPrice = state.items.reduce((
                acc,item)=> acc+item.price* item.count,0);
        }

    }
});

export const selectCart = (state = initialState)=> state;

export const selectCartItemById = (id:string)=> (state:any)=> state.cart.items.find((item:InterfaceItem)=> item.id === id)

export const {
    addToCart,
    incrementCount,
    decrementCount,
    removeAllItems,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;