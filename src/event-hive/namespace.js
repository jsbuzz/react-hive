import { basicEvent } from './event';
import { EventGateway } from './event-gateway';
import ReadOnly from './dependencies/read-only';

export const DefinedEvent = basicEvent('NameSpace:Defined');

export class NameSpace extends EventGateway {

    constructor(name) {
        super();
        this.name = name;
    }

    defineState(stateDefinition) {
        this.__state || (this.__state = new ReadOnly());
        this.state = this.__state.reader;
        Object.getOwnPropertyNames(stateDefinition).forEach((property) => {
            this.__state.addProperty(property);
            const setters = stateDefinition[property](this.__state.modifier);
            for(let i = 0; i < setters.length; i+=2) {
                this.addEventListener(setters[i], setters[i+1], true);
            }
        });

        this.trigger(new DefinedEvent());
    }

    static get(name) {
        this.namespaces || (this.namespaces = new Map());

        let namespace = this.namespaces.get(name);

        if(!namespace) {
            namespace = new NameSpace(name);
            this.namespaces.set(name, namespace);
        }
        return namespace;
    }
}
