import React, { Component } from 'react';
import Header from './header';
import Location from './location';
import Weather from './weather';
import './App.css';

const API_key = "b87ef13e00bc9136960cd7c0541a91b3";

class App extends Component {

  getWeather = async (long, lat) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`);
    const data = await api_call.json();
    console.log(data);
  }

  getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = await position.coords.latitude; 
        const longitude = await position.coords.longitude;
        console.log(latitude + " " + longitude);
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
          <Location />
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;