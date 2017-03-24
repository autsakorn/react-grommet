import React, { Component } from 'react';
// import Grommet from './index-commonjs';
import {Box, Section, Title} from 'grommet/components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Title>Hello World</Title>
      </div>
    );
  }
}

export default App;
