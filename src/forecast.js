import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Forecast extends Component {
  render() {
    if (this.props.forecast) {
      return (
        <div className="forecast">
          <ul>
            {this.props.forecast.map(day => (
              <li key={day.dt}>
                <div className="forecast-main">
                  <img className="forecast-icon" src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather icon" />
                  <div>
                    {day.weather[0].main}
                  </div>
                  <div>
                    { day.temp.day }{String.fromCharCode(176)}F
                  </div>
                </div>
              </li>
              ))}
          </ul>
        </div>
      );
    }
    return (null);
  }
}

export default Forecast;

Forecast.propTypes = {
  forecast: PropTypes.array,
};

