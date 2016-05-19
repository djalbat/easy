'use strict';

var InputElement = require('./inputElement');

class Button extends InputElement {
  constructor(selector, clickHandler) {
    super(selector);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Button.clone(this.$element, clickHandler); }

  onClick(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  }

  onDoubleClick(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }

  static clone(selector, clickHandler) {
    return InputElement.clone(Button, selector, clickHandler);
  }

  static fromHTML(html, clickHandler) {
    return InputElement.fromHTML(Button, html, clickHandler);
  }

  static fromDOMElement(domElement, clickHandler) {
    return InputElement.fromDOMElement(Button, domElement, clickHandler);
  }
}

module.exports = Button;
