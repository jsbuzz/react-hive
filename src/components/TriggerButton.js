import React from 'react';
import Connect from '../connect';

import Events from '../events';

const TriggerButton = ({ message }, namespace) => (
    <button onClick={
        () => namespace().trigger(new Events.Demo.ButtonPressed(message))
    }>
        { message }
    </button>
);

export default Connect(TriggerButton);
