import React from 'react';
import './CurrentWeather.css';
import Icon from '../../images/sunny-weather-1-458138.png';

function CurrentWeather() {
    return (
        <div className="weather__box">
            <div className="weather__icon">
                <i class="fas fa-sun fa-10x"></i>
            </div>
            <div className="weather__description">
                <div className="degree">5°</div>
                <div className="desc">clear Sky</div>
            </div>
        </div>
    )
};

export default CurrentWeather
