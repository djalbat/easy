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

  onClick(handler, mouseButton, allowDefault = false) {
    super.onClick(function() {
      const href = this.getAttribute('href');

      handler(href);
    }.bind(this), mouseButton, allowDefault)
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
