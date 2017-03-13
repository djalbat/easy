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

  onClick(handler) {
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
    }
    
    this.on('click', handler);
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
    return InputElement.fromTagNameAndProperties(Link, 'a', properties); ///
  }
}

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  const href = this.getAttribute('href'),
        preventDefault = handler(href);

  return preventDefault;
}