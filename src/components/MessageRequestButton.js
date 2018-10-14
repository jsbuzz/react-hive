import React from 'react';
import Connect from '../connect';

import NameSpace from '../namespace';
import Events from '../events';

const MessageRequestButton = (props, on) => (
    <button onClick={
        () => on(NameSpace.Demo).trigger(new Events.Demo.MessageRequest())
    }>
        request message
    </button>
);

export default Connect(MessageRequestButton);
