import React from 'react';
import Connect from '../connect';

const EventCounter = ({ counter }) => (
  <p>
    Events triggered: <strong>{ counter }</strong>
  </p>
);

export default Connect(
  EventCounter,
  ({ eventCount }) => ({ counter: eventCount }),
);
