import { Component } from 'react';
import Control from '../event-hive/control';

const connectComponent = (ComponentClass) => class extends ComponentClass {
  on = (ns) => Control.withActor(this, ns);

  constructor(...stuff) {
    super(...stuff);

    this.listen && this.listen();
    this.displayName = ComponentClass.name;
  }

  componentWillUnmount(...stuff) {
    super.componentWillUnmount && super.componentWillUnmount(...stuff);
    Control.cleanup(this);
  }
};

const connectFunction = (fn) => (props) => fn(
  props, (ns) => Control.withActor(fn, ns)
);

export default (component) => {
  return component.prototype instanceof Component
    ? connectComponent(component)
    : connectFunction(component)
    ;
};
