import { Component } from 'react';
import Control from '../event-hive/control';
import { getNamespaceFromContext } from './util';

export default class DataComponent extends Component {
  on = (ns) => Control.withActor(this, ns);
  namespace = () => Control.withActor(this, this.__contextNamespace);

  componentDidMount() {
    this.__contextNamespace = getNamespaceFromContext(this);

    this.listen && this.listen();
  }

  render() {
    return '';
  }
}
