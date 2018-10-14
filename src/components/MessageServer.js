import { PureComponent } from 'react';
import Connect from '../connect';

import NameSpace from '../namespace';
import Events from '../events';

class MessageServer extends PureComponent {
  serveMessage = () => {
    global.setTimeout(
      () => {
        console.log('');
        this.on(NameSpace.Demo).trigger(
          new Events.Demo.MessageResponse('message served')
        );
      },
      1000,
    );
  }

  listen() {
    this.on(NameSpace.Demo).listen(
      Events.Demo.MessageRequest, () => this.serveMessage(),
    );
  }

  render() {
    return null;
  }
}

export default Connect(MessageServer);
