import React, { Component } from 'react';
import NameSpaceContext from './react-signal/NameSpaceContext';

import NameSpace from './namespace';

import EventButton from './components/EventButton';
import TriggerButton from './components/TriggerButton';
import CleanupButton from './components/CleanupButton';
import EventCounter from './components/EventCounter';
import MessageLogger from './components/MessageLogger';
import LastMessage from './components/LastMessage';
import MessageRequestButton from './components/MessageRequestButton';

import MessageServer from './services/MessageServer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { showLoggers: true };

  render() {
    const { showLoggers } = this.state;

    return (
      <div className="App">
        <NameSpaceContext namespace={NameSpace.Demo} services={[ MessageServer ]} >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <LastMessage />
          </p>
          <p className="App-intro">
            <CleanupButton />
            <button onClick={() => this.setState({ showLoggers: !showLoggers })} >
              { showLoggers ? 'hide loggers' : 'show loggers' }
            </button>
          </p>
          <p className="App-intro">
            <EventButton message="Hello" />
            <EventButton message="Bello" />
            <TriggerButton message="Hola" />
            <MessageRequestButton />
          </p>
          { showLoggers ? <EventCounter /> : null }
          { showLoggers ? <MessageLogger /> : null }
        </NameSpaceContext>
      </div>
    );
  }
}

export default App;
