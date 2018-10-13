import { defineEventType } from '../event-hive/event-type';
import { basicEvent, defineEvent } from '../event-hive/event';
const Events = {};

export const DemoEvent = defineEventType({
    message: String,
});

Events.Demo = {};
Events.Demo.ButtonPressed = defineEvent(DemoEvent, 'Demo:ButtonPressed');
Events.Demo.Cleanup = basicEvent('Demo:Cleanup');

export default Events;
