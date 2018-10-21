import { NameSpace, InitState } from '../react-signal/event-hive/namespace';
import Events from '../events';

export const Demo = NameSpace.get('Ns.Demo');

const AWAIT_MESSAGE = '... awaiting message';

const incrementCounter = (state, counter) => () => (state[counter] += 1);
const setLastMessage = (state) => ({ message }) => (state.lastMessage = message);
const awaitMessage = (state) => () => (state.messages.push(AWAIT_MESSAGE));
const addMessage = (state, wasAwaited = false) => ({ message }) => {
  if (wasAwaited) {
    state.messages.splice(state.messages.indexOf(AWAIT_MESSAGE), 1, message);
  } else {
    state.messages.push(message);
  }
};

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
  lastMessage: (state) => [
    InitState, setLastMessage(state),
    Events.Demo.ButtonPressed, setLastMessage(state),
    Events.Demo.MessageResponse, setLastMessage(state),
  ],
  messages: (state) => [
    InitState, () => (state.messages = []),
    Events.Demo.MessageRequest, awaitMessage(state),
    Events.Demo.ButtonPressed, addMessage(state),
    Events.Demo.MessageResponse, addMessage(state, true),
    Events.Demo.Cleanup, () => (state.messages = []),
  ],
});

export default { Demo };
