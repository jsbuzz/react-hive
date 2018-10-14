import React from 'react';
import Connect from '../connect';

import NameSpace from '../namespace';
import Events from '../events';

const TriggerButton = ({ message }, on) => (
    <button onClick={
        () => on(NameSpace.Demo).trigger(new Events.Demo.ButtonPressed(message))
    }>
        { message }
    </button>
);

export default Connect(TriggerButton);
