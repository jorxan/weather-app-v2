import React from 'react';
import './Cwc.css';

function CurrentWeatherCard() {
    return (
        <div className="cwc__container">
            <div className="cwc__wrapper">
                <div className="top-row">
                    <div className="high">
                        <div className="numbers">
                        18°
                        </div>
                        <p className="word">High</p>
                    </div>
                    <div className="wind">
                        <div className="numbers">
                            .05mph
                        </div>
                        <div className="word">
                            Wind
                        </div>
                    </div>
                    <div className="wind">
                        <div className="numbers">
                            7:00 AM
                        </div>
                        <div className="word">
                            Sunrise
                        </div>
                    </div>
                    
                </div>

                <div className="bottom-row">
                    <div className="high">
                        <div className="numbers">
                        18°
                        </div>
                        <p className="word">High</p>
                    </div>
                    <div className="wind">
                        <div className="numbers">
                            .05mph
                        </div>
                        <div className="word">
                            Wind
                        </div>
                    </div>
                    <div className="wind">
                        <div className="numbers">
                            7:00 AM
                        </div>
                        <div className="word">
                            Sunrise
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherCard
