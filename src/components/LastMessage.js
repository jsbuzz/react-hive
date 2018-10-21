import React from 'react';
import Connect from '../react-signal';

export const LastMessage = ({ lastMessage }) => (
  <span>
    last message: <strong>{ lastMessage }</strong>
  </span>
);

export default Connect(
  LastMessage,
  ({ lastMessage }) => ({ lastMessage }),
);
