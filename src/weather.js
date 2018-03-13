import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Weather = props => (
  <div className="weather">
    <div className="weather-icon">
      {props.iconography && <img src={props.iconography} alt="weather icon" />}
    </div>
    <div className="temp-main">
      <div id="temperature"> { props.temperature } </div>
      <div id="main"> { props.main } </div>
    </div>
    <div id="humidity"> { props.humidity } </div>
  </div>
);

export default Weather;

Weather.propTypes = {
  temperature: PropTypes.string.isRequired,
  iconography: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
};
