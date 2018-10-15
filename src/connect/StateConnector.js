import React, { Component } from 'react';
import Control from '../event-hive/control';
import { StateChanged } from '../event-hive/namespace';

import { getNamespaceFromContext } from './util';

const StateConnector = (NameSpace, selector, events, WrappedComponent) => {
  const Connector = class extends Component {
    namespace = (ns) => Control.withActor(
      this,
      ns || this.__contextNamespace
    );
    propSelector = typeof selector === 'function' ? selector : props => props
    watchedProps = null

    componentDidMount() {
      this.displayName = `StateConnector(${WrappedComponent.displayName || WrappedComponent.name})`;

      this.__contextNamespace = getNamespaceFromContext(this);

      if (events && events.length) {
        events.forEach( Event => this.namespace(NameSpace).listen(
          Event, () => this.checkState(),
        ));
      } else {
        this.namespace(NameSpace).listen(
          StateChanged, () => this.checkState(),
        );
        this.extractProps();
      }

      global.setTimeout(() => this.forceUpdate(), 0);
    }

    checkState() {
      if (this.watchedProps) {
        for (let prop of this.watchedProps) {
          if (this.namespace(NameSpace).__propsChanged.includes(prop)) {
            this.forceUpdate();
            break ;
          }
        }
        return ;
      }
      this.forceUpdate();
    }

    extractProps() {
      const strSelector = selector.toString();
      const arrowFunction = strSelector.includes('=>');
      let propList = null;

      if (arrowFunction) {
        propList = strSelector
          .split('=>').shift().trim()
          .replace(/[(){}\s]/g, '').split(',')
          ;
      } else {
        propList = strSelector
          .split('return').pop().trim()
          .replace(/[(){};\s]/g, '').split(',')
          .map(prop => prop.split(':').pop())
          ;
      }

      if (propList.length) {
        this.watchedProps = propList;
      }
    }

    componentWillUnmount(...stuff) {
      Control.cleanup(this);
    }

    render() {
      const ns = this.namespace(NameSpace);
      return <WrappedComponent {...this.props} {...this.propSelector((ns && ns.state) || {})} />;
    }
  };
  Connector.displayName = `StateConnector(${WrappedComponent.displayName || WrappedComponent.name})`;

  return Connector;
};

export default StateConnector;
