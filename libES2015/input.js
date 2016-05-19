'use strict';

require('jquery-textrange');

var InputElement = require('./inputElement');

class Input extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return Input.clone(this.$element); }

  onChange(handler) {
    this.$element.keydown(function() {
      setTimeout(function() {
        var value = this.getValue();

        handler(value);
      }.bind(this));
    }.bind(this));
  }

  getValue() {
    var value = this.$element.val();

    return value;
  }

  getSelectionStart() {
    var textrange = this.$element.textrange('get'),
        selectionStart = textrange['start'];  ///

    return selectionStart;
  }

  getSelectionEnd() {
    var textrange = this.$element.textrange('get'),
        selectionEnd = textrange['end'];  ///

    return selectionEnd;
  }

  setValue(value) {
    this.$element.val(value);
  }

  select() {
    this.$element.select();
  }
  
  static clone(selector) {
    return InputElement.clone(Input, selector);
  }

  static fromHTML(html) {
    return InputElement.fromHTML(Input, html);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Input, domElement);
  }
}

module.exports = Input;
