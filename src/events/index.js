// import { defineEventType } from '../react-signal/event-hive/event-type';
import { Event, basicEvent, defineEvent } from '../react-signal/event-hive/event';
const Events = {};

export const MessageEvent = class extends Event {
    constructor(message) {
      super();
      this.message = message;
    }
};

Events.Demo = {};
Events.Demo.ButtonPressed = MessageEvent.withAlias('Demo:ButtonPressed');
Events.Demo.Cleanup = basicEvent('Demo:Cleanup');

Events.Demo.MessageRequest = basicEvent('Demo:MessageRequest');
Events.Demo.MessageResponse = defineEvent(MessageEvent, 'Demo:MessageResponse');

export default Events;
