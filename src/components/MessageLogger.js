import React, { PureComponent } from 'react';
import Connect from '../react-signal';

import Events from '../events';

import './MessageLogger.css';

class MessageLogger extends PureComponent {
  state = {
    events: [],
  }

  logEvent = (event) => {
    const { events } = this.state;
    events.push({
      event,
      time: new Date().toISOString().substr(11, 12),
    });
    this.setState({ events });
  }

  clearEvents = () => {
    this.setState({ events: [] });
  }

  listen() {
    this.namespace().listen(
      Events.Demo.ButtonPressed, (event) => this.logEvent(event),
      Events.Demo.MessageResponse, (event) => this.logEvent(event),
      Events.Demo.Cleanup, () => this.clearEvents(),
    );
  }

  render() {
    const { messageCount } = this.props;
    const { events } = this.state;
    return (
      <div>
        Messages logged: { events.length } / { messageCount }
        <ul className="event-logger">
          { events.map( ({event, time}) => <li key={time}>[{time}] {event.message}</li> ) }
        </ul>
      </div>
    );
  }
}

export default Connect(
  MessageLogger,
  ({ messageCount }) => ({ messageCount }),
);
