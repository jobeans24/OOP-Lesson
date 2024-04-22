class Component {
  constructor(children = []) {
    this.children = children;
  }
  render() {
    throw new Error('Child class must implement a render() method.');
  }
  renderInnerHtml() {
    // Loop over children and convert any children that aren't strings to an
    // html string by calling its render method.
    
  }
}

module.exports = Component;
