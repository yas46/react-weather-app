import React, { Component } from 'react';
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
    humidity: null
  }

  getWeather = async (long, lat) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.name,
      temperature: ((9/5)*(data.main.temp - 273) + 32).toFixed(2).toString() + String.fromCharCode(176) + "F",
      iconography: "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + data.weather[0].icon + ".png",
      main: data.weather[0].main,
      humidity: "Humidity: " + data.main.humidity + "%"
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
      </div>
    );
  }
}

export default App;