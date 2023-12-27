import './Charts.css'
import search from '../Assets/search.png';
import drizzle from '../Assets/drizzle.png';
import snow from '../Assets/snow.png';
import rain from '../Assets/rain.png';
import wind from '../Assets/wind.png';
import humidity from '../Assets/humidity.png';
import clear from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import { useState } from 'react';

const Charts = () => {

        let api_key= "f1418a9fdbdab17ba211a75b2007d99a";

        const [wicon, setWicon ] = useState(cloud)

        const search = async () => {
            const element = document.getElementsByClassName("cityInput");
            if (element.length === 0 || element[0].value === "") {
                return 0;
            }
        
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
            let response = await fetch(url);
            let data = await response.json();
        
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temperature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");
        
            if (humidity.length > 0) {
                humidity[0].innerHTML = data.main.humidity+"%";
            }
        
            if (wind.length > 0) {
                wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
            }
        
            if (temperature.length > 0) {
                temperature[0].innerHTML = Math.floor(data.main.temp)+"°C";
            }
        
            if (location.length > 0) {
                location[0].innerHTML = data.name;
            }

            if(data.weather[0].icon ==="01d" || data.weather[0].icon==="01n"){
                setWicon(clear);
            }
            else if(data.weather[0].icon ==="02d" || data.weather[0].icon==="02n"){
                setWicon(cloud);
            }
            else if(data.weather[0].icon ==="03d" || data.weather[0].icon==="03n"){
                setWicon(drizzle);
            }
            else if(data.weather[0].icon ==="04d" || data.weather[0].icon==="04n"){
                setWicon(drizzle);
            }
            else if(data.weather[0].icon ==="09d" || data.weather[0].icon==="09n"){
                setWicon(rain);
            }
            else if(data.weather[0].icon ==="10d" || data.weather[0].icon==="10n"){
                setWicon(rain);
            }
            else if(data.weather[0].icon ==="13d" || data.weather[0].icon==="13n"){
                setWicon(snow);
            }
            else{
                setWicon(clear);
            }
        };
        


    return(
        <div>
            <div className='container-one'>
                <div className='top-bar'>
                    <input type='text' className='cityInput' placeholder='search'/>
                    <div className='search-icon' onClick={() => {search ()}}>
                        <img src={search}/>
                    </div>
                </div>
                <div className='weather-image'>
                    <img src={wicon} alt="" />
                </div>
                <div className='weather-temp'>
                    24c
                </div>
                <div className='weather-location'>
                    London
                </div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidity} alt='' className='icon'/>
                        <div className='data'>
                            <div className='humidity-percent'>60%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={wind} alt='' className='icon'/>
                        <div className='data'>
                            <div className='humidity-percent'>18km</div>
                            <div className='text'>Wind speed</div>
                        </div>
                    </div>
                    

                </div>

            

            </div>
        </div>

    )
}


export default Charts