import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ resultAPI }) => {

    const { name, main } = resultAPI;

    if (!name) return null;

    // Kelvin grades
    const gradesKelvin = 273.15

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Wheater of {name} is: </h2>
                <p className="temperature">
                    {parseInt(main.temp - gradesKelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Temperature Max
                    {parseInt(main.temp_max - gradesKelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Temperature Min
                    {parseInt(main.temp_min - gradesKelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Weather.propTypes = {
    resultAPI: PropTypes.object.isRequired
}

export default Weather;
