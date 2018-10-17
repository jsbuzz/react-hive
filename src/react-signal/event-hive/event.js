let eventId = 0;

export class Event {
    constructor() {
        this.name = this.constructor.EventName;
    }

    static alias(name) {
        this.EventName = name;
        return this;
    }
}

export function basicEvent(name) {
    return (
        class extends Event {}
    ).alias(name || `Event${++eventId}`);
};

export function defineEvent(EventType, name) {
    return (
        class extends EventType {}
    ).alias(name || `Event${++eventId}`);
};
