import React, { Component } from 'react';
import Wings4 from '../wings4';

import NameSpace from '../namespace';
import Events from '../events';

import './EventLogger.css';

class EventLogger extends Component {
  state = {
    events: [],
  }

  logEvent = (event) => {
    const { events } = this.state;
    this.setState({
      events: [
        ...events,
        {
          event,
          time: new Date().toISOString().substr(11, 12),
        }
      ]
    });
  }

  listen() {
    this.on(NameSpace.Demo).listen(
      Events.Demo.ButtonPressed, (event) => this.logEvent(event),
    );
  }

  render() {
    const { events } = this.state;
    return (
      <ul className="event-logger">
        { events.map( ({event, time}) => <li key={time}>[{time}] {event.message}</li> ) }
      </ul>
    );
  }
}

export default Wings4(EventLogger);
