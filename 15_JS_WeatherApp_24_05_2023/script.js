const API_KEY = 'f83b4a5abe3124721c54d692a3cdf0b2';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWEatherButton');
const weatherContainer = document.getElementById('weatherContainer');


// getWeatherButton.addEventListener('keydown', (e)=>{
//     console.log(e);
//     if(e.code=== 'Enter'){
//         console.log('Мы нажали Enter');
//     }
// })



getWeatherButton.addEventListener('click',()=>{
    const location = locationInput.value.trim();
    if(location){
        //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`;
        fetch(apiUrl)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            displayWeather(data);
    })
    .catch(error=>{
        console.log(error);
        weatherContainer.innerHTML= 'Failed to fetch weather data';
    });
    }
})

function displayWeather(weatherData){
    console.log(weatherData);
    const { name, sys:{country}, main,main: {humidity}, weather, wind: {speed}, visibility} = weatherData;
    
    // const county = sys.country;
    const temperatureC = Math.round(main.temp-273.15);
    const temperatureMax = Math.floor(main.temp_max-273.15);
    const temperatureMin = (main.temp_min-273.15).toFixed(1);
    const weatherMain = weather[0].main;
    const weatherDescription = weather[0].description;
    // const humidity = main.humidity;
    // const windSpeed = wind.speed;
    const visibilityDistance = visibility/1000;

    const weatherCard = document.createElement('div');

    weatherCard.classList.add('weather-card');
    weatherContainer.innerHTML = '';
    weatherCard.innerHTML = `
    <h2>${name},${country}</h2>
    <p>Temperature:${temperatureC}</p>
    <p>TempatureMax: ${temperatureMax}</p>
    <p>TempatureMin${temperatureMin}</p>
    <p>Weather:${weatherMain}</p>
    <p>Description:${weatherDescription}</p>
    <p>Humidity:${humidity}</p>
    <p>Wind Speed:${speed}</p>
    <p>VisibilityDistance:${visibilityDistance}km/h</p>
    `;
    weatherContainer.append(weatherCard);
}