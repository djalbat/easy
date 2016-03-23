'use strict';

var Element = require('./element');

class Input extends Element {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone() { return Input.clone(this.$element); }

  onChange(handler) {
    this.$element.change(function() {
      var value = this.getValue();

      handler(value);
    }.bind(this));
  }

  getValue() {
    var value = this.$element.val();

    return value;
  }

  setValue(value) {
    this.$element.val(value);
  }

  select() {
    this.$element.select();
  }
}

Input.clone = function(selectorOr$Element) {
  return Element.clone(Input, selectorOr$Element);
};

Input.fromHTML = function(html) {
  return Element.fromHTML(Input, html);
};

module.exports = Input;
