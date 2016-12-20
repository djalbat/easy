'use strict';

var InputElement = require('./inputElement');

class Input extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return Input.clone(this); }

  getValue() { return this.$element.val(); }
  getSelectionStart() { return this.$element[0].selectionStart; } ///
  getSelectionEnd() { return this.$element[0].selectionEnd; } ///

  setValue(value) { this.$element.val(value); }

  select() { this.$element.select(); }

  onChange(changeHandler, namespace) {
    this.on('input', function() { ///
      var value = this.getValue();

      changeHandler(value);
    }.bind(this), namespace);
  }

  offChange(namespace) {
    this.off('input', namespace); ///
  }

  static clone(selectorOrElement) {
    return InputElement.clone(Input, selectorOrElement);
  }

  static fromHTML(html) {
    return InputElement.fromHTML(Input, html);
  }

  static fromDOMElement(domElement) {
    return InputElement.fromDOMElement(Input, domElement);
  }
}

module.exports = Input;
