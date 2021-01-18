import React from 'react';
import "./Forecast.css";

function Forecast() {
    return (
        <div className="forecast__card">
            <div className="forecast">
                <div className="forecast__top">
                    <div className="forecast__day">
                        Sunday 1/17
                    </div>
                    <div className="forecast__time">
                        7:00 AM
                    </div>
                </div>

                <div className="forecast__temp">
                    5°
                </div>
            </div>
        </div>
        
    )
}

export default Forecast
