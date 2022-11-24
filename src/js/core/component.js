export default class Component {
  constructor($target, state = { total: '', digitCount: 0, operation: '' }) {
    this.$target = $target;
    this.state = state;
  }
  render() {}
  setState(newState) {
    this.state = newState;
    this.render();
  }
}
