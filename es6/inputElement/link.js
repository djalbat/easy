'use strict';

var InputElement = require('../inputElement');

class Link extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Link.clone(this, clickHandler); }

  onClick(clickHandler, namespace, button, allowDefault = false) {
    super.onClick(function() {
      var href = this.getAttribute('href');

      clickHandler(href);
    }.bind(this), namespace, button, allowDefault)
  }

  static clone(selectorOrElement, clickHandler) {
    return InputElement.clone(Link, selectorOrElement, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Link, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Link, domElement, clickHandler);
  }

  static fromProperties(properties) {
    var html = '<a></a>',
        { clickHandler } = properties;

    return Link.fromHTML(html, clickHandler);
  }
}

module.exports = Link;
