'use strict';

const InputElement = require('../inputElement');

class Link extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Link.clone(this, clickHandler); }

  onClick(handler, preventDefault = true, intermediateChangeHandler = defaultIntermediateChangeHandler.bind(this)) {
    this.on('click', handler, preventDefault, intermediateChangeHandler);
  }
  
  offClick(handler) {
    this.off('click', handler);
  }

  static clone(element, clickHandler) {
    return InputElement.clone(Link, element, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Link, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Link, domElement, clickHandler);
  }

  static fromProperties(properties) {
    const html = '<a></a>',
          { onClick } = properties,
          clickHandler = onClick; ///

    return Link.fromHTML(html, clickHandler);
  }
}

module.exports = Link;

function defaultIntermediateChangeHandler(handler, event) {
  const href = this.getAttribute('href');

  handler(href);
}
