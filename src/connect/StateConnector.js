import React, { Component } from 'react';
import Control from '../event-hive/control';
import { StateChanged } from '../event-hive/namespace';

const StateConnector = (NameSpace, events, WrappedComponent) => class extends Component {
  on = (ns) => Control.withActor(this, ns);

  constructor(...stuff) {
    super(...stuff);

    if (events && events.length) {
      events.forEach( Event => this.on(NameSpace).listen(
        Event, () => this.forceUpdate(),
      ));
    } else {
      this.on(NameSpace).listen(
        StateChanged, () => this.forceUpdate(),
      );
    }

    this.displayName = `StateConnector(${WrappedComponent.displayName || WrappedComponent.name})`;
  }

  componentWillUnmount(...stuff) {
    Control.cleanup(this);
  }

  render() {
    return <WrappedComponent {...this.props} {...NameSpace.state} />;
  }
};

export default StateConnector;
