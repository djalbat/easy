'use strict';

var InputElement = require('./inputElement');

class Input extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Input.clone(this, changeHandler); }

  getValue() { return this.$element.val(); }
  getSelectionStart() { return this.$element[0].selectionStart; } ///
  getSelectionEnd() { return this.$element[0].selectionEnd; } ///

  setValue(value) { this.$element.val(value); }

  select() { this.$element.select(); }

  onChange(changeHandler, namespace) {
    this.on('change', function() { ///
      var value = this.getValue();

      changeHandler(value);
    }.bind(this), namespace);
  }

  offChange(namespace) {
    this.off('change', namespace); ///
  }

  static clone(selectorOrElement, changeHandler) {
    return InputElement.clone(Input, selectorOrElement, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Input, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Input, domElement, changeHandler);
  }
}

module.exports = Input;
