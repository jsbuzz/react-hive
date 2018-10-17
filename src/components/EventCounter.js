import React from 'react';
import Connect from '../react-signal';

const EventCounter = ({ counter }) => (
  <p>
    Events triggered: <strong>{ counter }</strong>
  </p>
);

export default Connect(
  EventCounter,
  ({ eventCount }) => ({ counter: eventCount }),
);
