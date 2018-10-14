import React from 'react';
import Connect from '../connect';

import NameSpace from '../namespace';
// import Events from '../events';

const EventCounter = ({ eventCount }) => (
  <p>
    Events triggered: <strong>{ eventCount }</strong>
  </p>
);

export default Connect(
  EventCounter,
  NameSpace.Demo,
  // [ Events.Demo.ButtonPressed, Events.Demo.Cleanup ],
);
