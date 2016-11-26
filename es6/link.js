'use strict';

var InputElement = require('./inputElement');

class Link extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Link.clone(this, clickHandler); }

  onClick(clickHandler, button, allowDefault = false) {
    super.onClick(function() {
      var href = this.getAttribute('href');

      clickHandler(href);
    }.bind(this), button, allowDefault)
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
}

module.exports = Link;
