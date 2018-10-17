import Events from '../events';

class MessageServer {
  messages = ['Oh lala', 'voila', 'whatever', 'dingo', 'bonjour', 'ciao']

  serveMessage = () => {
    global.setTimeout(
      () => {
        console.log('');
        this.namespace().trigger(
          new Events.Demo.MessageResponse(
            this.messages[parseInt((Math.random() * 10000) % this.messages.length, 10)]
          )
        );
      },
      1000,
    );
  }

  listen() {
    this.namespace().listen(
      Events.Demo.MessageRequest, () => this.serveMessage(),
    );
  }
}

export default MessageServer;
