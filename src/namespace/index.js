import { NameSpace, InitState } from '../event-hive/namespace';
import Events from '../events';

export const Demo = NameSpace.get('Ns.Demo');

const incrementCounter = (state, counter) => () => (state[counter] += 1);

Demo.defineState({
  eventCount: (state) => [
    InitState, () => (state.eventCount = 0),
    Events.Demo.ButtonPressed, incrementCounter(state, 'eventCount'),
    Events.Demo.Cleanup, incrementCounter(state, 'eventCount'),
    Events.Demo.MessageRequest, incrementCounter(state, 'eventCount'),
    Events.Demo.MessageResponse, incrementCounter(state, 'eventCount'),
  ],
  messageCount: (state) => [
    InitState, () => (state.messageCount = 0),
    Events.Demo.ButtonPressed, incrementCounter(state, 'messageCount'),
    Events.Demo.MessageResponse, incrementCounter(state, 'messageCount'),
  ],
});

export default { Demo };
