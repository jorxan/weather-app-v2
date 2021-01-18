import React from 'react';
import SearchBar from '../components/Search/SearchBar';
import Location from '../components/Location/Location'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import CurrentWeatherCard from '../components/CurrentWeather/CurrentWeatherCard/CurrentWeatherCard';
import './Home.css';
import Forecast from '../components/Forecast/Forecast'

function Home() {
    return (
        <div className="container">
            <SearchBar/>
            <Location/>
            <div className="todays__weather">
                
                    <div className="current__box">
                        <CurrentWeather/>
                    </div>
                    <div className="today__card">
                        <CurrentWeatherCard/>
                    </div>
                
            </div>
            <div className="forecast__wrapper">
                <div className="forecast__word">
                    Forecast
                </div>
                <div className="forecast__list">
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                    <div><Forecast/></div>
                </div>
            </div>
        </div>
    )
}

export default Home
