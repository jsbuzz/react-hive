import Control from './control';
import { EventPool } from './event-pool';

export class EventGateway {
    constructor() {
        this.eventPool = new EventPool();
    }

    trigger(hiveEvent) {
        return new Promise(
            resolve => resolve(this.triggerSync(hiveEvent))
        );
    }

    triggerSync(hiveEvent) {
        Control.triggerSync(hiveEvent);
        return this.eventPool.dispatchEvent(hiveEvent);
    }

    listen(...listeners) {
        for(let i=0; i < listeners.length; i+=2) {
            this.addEventListener(listeners[i], listeners[i+1]);
        }
    }

    addEventListener(fiberEvent, eventHandler, prepend = false) {
        this.eventPool.addEventListener(
            fiberEvent.EventName,
            eventHandler,
            prepend
        );

        Control.registerListener(this.eventPool, fiberEvent.EventName, eventHandler);
    }
}
