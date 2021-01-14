import React from 'react';
import SearchBar from '../components/Search/SearchBar';
import Location from '../components/Location/Location'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import CurrentWeatherCard from '../components/CurrentWeather/CurrentWeatherCard/CurrentWeatherCard';

function Home() {
    return (
        <div>
            <SearchBar/>
            <Location/>
            <div className="todays__weather">
                <div className="row">
                    <div className="col-lg-6">
                        <CurrentWeather/>
                    </div>
                    <div className="col-lg-6">
                        <CurrentWeatherCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
