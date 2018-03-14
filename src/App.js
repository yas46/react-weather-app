import React, { Component } from 'react';
import Forecast from './forecast';
import Header from './header';
import Location from './location';
import Weather from './weather';
import './App.css';

const API_key = "b87ef13e00bc9136960cd7c0541a91b3";

class App extends Component {

  state = {
    city: "loading location...",
    temperature: null,
    iconography: null,
    main: null,
    humidity: null,
    forecast: null,
  }

  getWeather = async (long, lat) => {
    const api_weather_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${API_key}`);
    const weatherData = await api_weather_call.json();
    const api_forecast_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=5&units=imperial&appid=${API_key}`);
    const forecastData = await api_forecast_call.json();
    const dayList = forecastData.list;
    console.log(weatherData);
    console.log(dayList);
    this.setState({
      city: weatherData.name,
      temperature: Math.round(weatherData.main.temp).toString() + String.fromCharCode(176) + "F",
      iconography: "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + weatherData.weather[0].icon + ".png",
      main: weatherData.weather[0].main,
      humidity: "Humidity: " + weatherData.main.humidity + "%",
      forecast: dayList
    });
  }

  getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = await position.coords.latitude; 
        const longitude = await position.coords.longitude;
        this.getWeather(longitude, latitude);
      }.bind(this));
    } else {
      console.log("error fetching location");
    }
  }

  componentWillMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className="App"> 
        <div className="App-header">
          <Header />
        </div>
        <div className="App-weather">
          <Location city={this.state.city} />
          <Weather 
            temperature={this.state.temperature} 
            iconography={this.state.iconography}
            main={this.state.main}
            humidity={this.state.humidity}
          />
        </div>
        <Forecast forecast={this.state.forecast}/>
      </div>
    );
  }
}

export default App;