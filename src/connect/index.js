import Control from '../event-hive/control';
import StateConnector from './StateConnector';

const connectComponent = (ComponentClass) => {
  const ConnectedComponent = class extends ComponentClass {
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
  ConnectedComponent.displayName = ComponentClass.name;

  return ConnectedComponent;
};

const connectFunction = (fn, namespace, events) => (props) => fn(
  props, (ns) => Control.withActor(fn, ns)
);


export default (component, namespace = null, events = null) => {
  if (component.prototype.render) {
    return namespace
      ? StateConnector(namespace, events, connectComponent(component))
      : connectComponent(component)
      ;
  }
  const fn = connectFunction(component);
  fn.displayName = component.name;

  return namespace
    ? StateConnector(namespace, events, fn)
    : fn
    ;
};
