import { Component } from 'react';

import Control from '../event-hive/control';
import StateConnector from './StateConnector';
import { getNamespaceFromContext } from './util';

const connectComponent = (ComponentClass) => {
  const ConnectedComponent = class extends ComponentClass {
    on = (ns) => Control.withActor(this, ns);
    namespace = () => Control.withActor(this, this.__contextNamespace);

    componentDidMount(...stuff) {
      super.componentDidMount && super.componentDidMount(...stuff);
      this.__contextNamespace = getNamespaceFromContext(this);

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

const connectFunction = (fn, namespace, events) => {
  const connectedFn = class extends Component {
    on = (ns) => Control.withActor(this, ns || this.__contextNamespace);

    componentDidMount() {
      this.displayName = fn.name;
      this.__contextNamespace = getNamespaceFromContext(this);
    }

    render() {
      return fn(this.props, this.on);
    }
  };
  connectedFn.displayName = fn.name;

  return connectedFn;
};


export default (component, selector = null, namespace = null, events = null) => {
  if (component.prototype.render) {
    return selector
      ? StateConnector(namespace, selector, events, connectComponent(component))
      : connectComponent(component)
      ;
  }

  return selector
    ? StateConnector(namespace, selector, events, connectFunction(component))
    : connectFunction(component)
    ;
};
