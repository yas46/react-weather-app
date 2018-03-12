import React, { Component } from 'react';
import logo from './Logo/MultiColoredLOGO.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Header-logo" src={logo} alt="logo"/>
      </div>
    );
  }
}

export default Header;