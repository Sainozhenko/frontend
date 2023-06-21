import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const WeatherInfo:React.FC = () => {

    const {data, error,loading} = useSelector((state: RootState)=> state.weather);

    if(loading) {
        return <div>Loading...</div>
    };
    if(error){
        return <div>Error: {error}</div>
    };
    if(!data){
        return null;
    }
  return (
    <div>
        <h2>
    WeatherInfo  </h2>
    <p>City:{data.name}</p>
    <p>Temparature: {(data.main.temp-273.15).toFixed(1)}°C</p>
    <p>Description:{data.weather[0].description}</p>
    </div>
  )
}

export default WeatherInfo;
