import React from 'react';
import Connect from '../react-signal';

import './MessageLogger.css';

const MessageList = ({ messageCount, messages }) => (
  <div>
    Messages logged: { messages.length } / { messageCount }
    <ul className="event-logger">
      { messages.map( (message, index) => <li key={index}>{message}</li> ) }
    </ul>
  </div>
);

export default Connect(
  MessageList,
  ({ messageCount, messages }) => ({ messageCount, messages }),
);
