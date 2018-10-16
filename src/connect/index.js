import React from 'react';

import Control from '../event-hive/control';
import StateConnector from './StateConnector';

export const NamespaceCtx = React.createContext();

const connectComponent = (ComponentClass) => {
  const ConnectedComponent = class extends ComponentClass {
    on = (ns) => Control.withActor(this, ns);
    namespace = () => Control.withActor(this, this.props.namespace);

    componentDidMount(...stuff) {
      super.componentDidMount && super.componentDidMount(...stuff);

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
  props, (ns) => {
    ns || (ns = props.namespace);
    return Control.withActor(fn, ns)
  }
);


export default (component, selector = null, namespace = null, events = null) => {
  let ConnectedComponent;

  if (component.prototype.render) {
    ConnectedComponent = selector
      ? StateConnector(namespace, selector, events, connectComponent(component))
      : connectComponent(component)
      ;
  } else {
    const fn = connectFunction(component);
    fn.displayName = component.name;

    ConnectedComponent = selector
      ? StateConnector(namespace, selector, events, fn)
      : fn
      ;
  }

  const HiveComponent = (props) => (
    <NamespaceCtx.Consumer>
      { ctx => <ConnectedComponent {...props} namespace={ctx} /> }
    </NamespaceCtx.Consumer>
  );
  HiveComponent.displayName = `H:${ConnectedComponent.displayName}`;

  return HiveComponent;
};
