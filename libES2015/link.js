'use strict';

var InputElement = require('./inputElement');

class Link extends InputElement {
  constructor(selectorOr$Element, clickHandler) {
    super(selectorOr$Element);

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

  static clone(selectorOr$Element, clickHandler) {
    return InputElement.clone(Link, selectorOr$Element, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Link, html, clickHandler);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Link, domElement);
  }
}

module.exports = Link;
