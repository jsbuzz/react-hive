import ReactDOM from 'react-dom';
import { NameSpace } from '../event-hive/namespace';

export const getNamespaceFromContext = (component) => {
  let node = ReactDOM.findDOMNode(component);

  while (node) {
    if (node.className === 'namespace-context') {
      return NameSpace.get(node.getAttribute('namespace'));
    }
    node = node.parentElement;
  }
};
