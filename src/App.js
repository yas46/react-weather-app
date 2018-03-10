import React, { Component } from 'react';
import Header from './header';
import Location from './location';
import Weather from './weather';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Header />
        <Location />
        <Weather />
      </div>
    );
  }
}

export default App;