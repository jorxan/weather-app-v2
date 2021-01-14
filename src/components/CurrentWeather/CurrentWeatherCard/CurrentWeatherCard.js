import React from 'react'

function CurrentWeatherCard() {
    return (
        <div className="cwc__wrapper">
            <div className="row">
                <div className="col-lg-4 high">
                    <div className="row">
                        <div className="col-lg-12">
                            7
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            High
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wind">
                <div className="row">
                        <div className="col-lg-12">
                            40mph
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            Wind
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 sunrise">
                <div className="row">
                        <div className="col-lg-12">
                            7am
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            Sunrise
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 low">
                <div className="row">
                        <div className="col-lg-12">
                            4
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            Low
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 rain">
                <div className="row">
                        <div className="col-lg-12">
                            30%
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            Rain
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 sunset">
                <div className="row">
                        <div className="col-lg-12">
                            7pm
                        </div>
                    </div><div className="row">
                        <div className="col-lg-12">
                            Sunset
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherCard
