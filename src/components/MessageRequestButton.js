import React from 'react';
import Connect from '../connect';

import Events from '../events';

const MessageRequestButton = (props, ctx) => (
    <button onClick={
        () => ctx().trigger(new Events.Demo.MessageRequest())
    }>
        request message
    </button>
);

export default Connect(MessageRequestButton);
