import Fiber from 'fiber-framework';
import ReactDOM from 'react-dom';

export default (ComponentClass) => class extends ComponentClass {
  on = (...params) => this.$component.on(...params);

  constructor(...stuff) {
    super(...stuff);

    this.$component = new Fiber.DataComponent();
    this.$component.displayName = ComponentClass.name;

    this.listen && this.listen();
    this.mounted = false;
  }

  componentDidMount(...stuff) {
    super.componentDidMount && super.componentDidMount(...stuff);

    this.$component.view = ReactDOM.findDOMNode(this);
    Fiber.GC.registerComponent(this.$component);
  }
};
