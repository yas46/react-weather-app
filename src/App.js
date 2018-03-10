import React, { Component } from 'react';
import Header from './header';
import Weather from './weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div> 
        <Header />
        <Weather />
      </div>
    );
  }
}

export default App;