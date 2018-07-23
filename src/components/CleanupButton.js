import React, { Component } from 'react';
import Wings4 from '../wings4';

import NameSpace from '../namespace';
import Events from '../events';

class CleanupButton extends Component {
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

export default Wings4(CleanupButton);
