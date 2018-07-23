import React, { Component } from 'react';
import Fiber from 'fiber-framework';

import EventButton from './components/EventButton';
import CleanupButton from './components/CleanupButton';
import EventLogger from './components/EventLogger';

import logo from './logo.svg';
import './App.css';

Fiber.Debugger.init();
window.Fiber = Fiber;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CleanupButton />
        </p>
        <p className="App-intro">
          <EventButton message="Hello" />
          <EventButton message="Bello" />
          <EventButton message="Hola" />
        </p>
        <EventLogger />
      </div>
    );
  }
}

export default App;
