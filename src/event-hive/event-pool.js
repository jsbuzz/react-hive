import ListenerChain from './listener-chain';

export class EventPool {
    constructor() {
        this.eventPool = new Map();
    }

    addEventListener(eventName, listener, prepend = false) {
        // console.log('addEventListener', eventName, listener);
        if (prepend) {
            return this.eventPool.set(
                eventName,
                ListenerChain.with(
                    listener, this.eventPool.get(eventName)
                )
            );
        }
        if (this.eventPool.has(eventName)) {
            this.eventPool.get(eventName).add(listener);
        } else {
            this.eventPool.set(eventName, ListenerChain.with(listener))
        }
    }

    removeEventListener(eventName, listener) {
        // console.log('removeEventListener', eventName, listener);
        let chain = this.eventPool.get(eventName);

        if(chain) {
            let newChain = chain.without(listener);

            if(newChain) {
                this.eventPool.set(eventName, newChain);
            } else {
                this.eventPool.delete(eventName);
            }
        }
    }

    dispatchEvent(fiberEvent) {
        const chain = this.eventPool.get(fiberEvent.name);
        chain && chain.execute(fiberEvent);
    }
}
