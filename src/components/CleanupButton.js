import React, { PureComponent } from 'react';
import Connect from '../react-signal';

import Events from '../events';

class CleanupButton extends PureComponent {
  buttonPressed = () => {
    this.namespace().trigger(
      new Events.Demo.Cleanup()
    );
  }

  render() {
    return (
      <button onClick={this.buttonPressed} className="cleanup">Cleanup</button>
    );
  }
}

export default Connect(CleanupButton);
