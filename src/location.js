import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Location = props => (
  <div className="location">
    <h1>{ props.city }</h1>
  </div>
);

export default Location;

Location.propTypes = {
  city: PropTypes.string.isRequired,
};
