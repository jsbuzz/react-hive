import HoneyComb, { event, events } from 'honeycomb';
import { DefinedEvent } from 'event-hive';

export default HoneyComb({
  messages : (state) => [
    events(DefinedEvent, Events.Demo.ClearMessages)
      .on(NameSpace.Demo)
      .triggers(
        () => (state.messages = [])
      ),
    event(Events.Demo.ButtonPressed)
      .on(NameSpace.Demo)
      .triggers(
        ({ message }) => state.messages.push(message)
      ),
  ],
});
