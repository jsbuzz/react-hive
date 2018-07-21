import Fiber from 'fiber-framework';
const Events = {};

export const DemoEvent = Fiber.defineEventType({
    message: String,
});

Events.Demo = {};
Events.Demo.ButtonPressed = Fiber.defineEvent(DemoEvent, 'Demo:ButtonPressed');

export default Events;
