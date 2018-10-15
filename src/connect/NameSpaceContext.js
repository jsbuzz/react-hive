import React, { Component } from 'react';

class NameSpaceContext extends Component {
  render() {
    let { namespace } = this.props;
    if (typeof namespace !== 'string') {
      namespace = namespace.name;
    }
    return (
      <div className="namespace-context" namespace={ namespace }>{this.props.children}</div>
    );
  }
}

export default NameSpaceContext;
