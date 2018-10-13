import Control from '../event-hive/control';

export default (ComponentClass) => class extends ComponentClass {
  on = (ns) => Control.withActor(this, ns);

  constructor(...stuff) {
    super(...stuff);

    this.listen && this.listen();
    this.displayName = ComponentClass.name;
  }

  componentWillUnmount(...stuff) {
    super.componentWillUnmount && super.componentWillUnmount(...stuff);

    Control.cleanup(this);
  }
};
