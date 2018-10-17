import React from 'react';
import Connect from '../react-signal';

const LastMessage = ({ lastMessage }) => (
  <span>
    last message: <strong>{ lastMessage }</strong>
  </span>
);

export default Connect(
  LastMessage,
  ({ lastMessage }) => ({ lastMessage }),
);
