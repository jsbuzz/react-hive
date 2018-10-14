import React, { Component } from 'react';

import EventButton from './components/EventButton';
import TriggerButton from './components/TriggerButton';
import CleanupButton from './components/CleanupButton';
import EventLogger from './components/EventLogger';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { showLogger: true };

  render() {
    const { showLogger } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button
            onClick={() => this.setState(state => ({showLogger: !state.showLogger}))}
          >
            { showLogger ? 'hide logger' : 'show logger' }
          </button>
        </p>
        <p className="App-intro">
          <CleanupButton />
        </p>
        <p className="App-intro">
          <EventButton message="Hello" />
          <EventButton message="Bello" />
          <TriggerButton message="Hola" />
        </p>
        { showLogger ? <EventLogger /> : null }
      </div>
    );
  }
}

export default App;
