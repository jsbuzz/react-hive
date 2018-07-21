import React, { Component } from 'react';
import Wings4 from '../wings4';

import NameSpace from '../namespace';
import Events from '../events';

import './EventButton.css';

class EventButton extends Component {
  buttonPressed = () => {
    const { message } = this.props;
    this.on(NameSpace.Demo).trigger(
      new Events.Demo.ButtonPressed(message)
    );
  }

  componentDidMount() {
    console.log("EventButton mounted with message", this.props.message);
  }

  render() {
    const { message } = this.props;
    return (
      <button onClick={this.buttonPressed}>{message}</button>
    );
  }
}

export default Wings4(EventButton);
