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

  onChange(changeHandler) {
    this.on('input', function() { ///
      var value = this.getValue();

      changeHandler(value);
    }.bind(this));
  }

  getValue() { return this.$element.val(); }

  getSelectionStart() { return this.$element[0].selectionStart; } ///
  getSelectionEnd() { return this.$element[0].selectionEnd; } ///

  setValue(value) { this.$element.val(value); }

  select() { this.$element.select(); }
  
  onResize(resizeHandler) {}
  offResize(resizeHandler) {}
  
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
