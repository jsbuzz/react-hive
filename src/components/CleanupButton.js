import React, { PureComponent } from 'react';
import Connect from '../connect';

import NameSpace from '../namespace';
import Events from '../events';

class CleanupButton extends PureComponent {
  buttonPressed = () => {
    this.on(NameSpace.Demo).trigger(
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
