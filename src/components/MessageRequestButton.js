import React from 'react';
import Connect from '../react-signal';

import Events from '../events';

const { MessageRequest } = Events.Demo;
const MessageRequestButton = (props, namespace) => (
    <button onClick={() => namespace().trigger(new MessageRequest())}>
        request message
    </button>
);

export default Connect(MessageRequestButton);
