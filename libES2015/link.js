'use strict';

var InputElement = require('./inputElement');

class Link extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Link.clone(this.$element, clickHandler); }

  onClick(handler) {
    this.$element.click(function() {
      var href = this.$element.attr('href');

      handler(href);

      return false;
    }.bind(this))
  }

  static clone(selector, clickHandler) {
    return InputElement.clone(Link, selector, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Link, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return Element.fromDOMElement(Link, domElement, clickHandler);
  }
}

module.exports = Link;
