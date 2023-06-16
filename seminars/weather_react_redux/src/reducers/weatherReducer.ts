import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import axios from 'axios';

interface DataWeather{
    name: string,
    main:{
        temp: number,
    };
    weather:{
        description: string,
    }[];
};

interface WeatherState{
    loading: boolean,
    error: string | null,
    data: DataWeather | null;
};


const initialState: WeatherState = {
    loading: false,
    error: null,
    data: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        fetchWeatherStart(state){
            state.loading = true;
            state.error = null;
            state.data =  null;
        },
        fetchWeatherSucess(state, action: PayloadAction<DataWeather>) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchWeatherFailure(state,action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const{
    fetchWeatherStart,
    fetchWeatherSucess,
    fetchWeatherFailure
} = weatherSlice.actions;

export const fetchWeather = (city:string) => {
    return async(dispatch:AppDispatch) => {
        try{
           dispatch(fetchWeatherStart());
           const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f83b4a5abe3124721c54d692a3cdf0b2`
            );
            dispatch(fetchWeatherSucess(response.data))
        }catch(error:any){
            dispatch(fetchWeatherFailure(error.message));
        }
    }
}

export const weatherReducer = weatherSlice.reducer;