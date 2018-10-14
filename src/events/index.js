import { defineEventType } from '../event-hive/event-type';
import { basicEvent, defineEvent } from '../event-hive/event';
const Events = {};

export const MessageEvent = defineEventType({
    message: String,
});

Events.Demo = {};
Events.Demo.ButtonPressed = defineEvent(MessageEvent, 'Demo:ButtonPressed');
Events.Demo.Cleanup = basicEvent('Demo:Cleanup');

Events.Demo.MessageRequest = basicEvent('Demo:MessageRequest');
Events.Demo.MessageResponse = defineEvent(MessageEvent, 'Demo:MessageResponse');

export default Events;
