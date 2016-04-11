'use strict';

var InputElement = require('./inputElement');

class Checkbox extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Checkbox.clone(this.$element, changeHandler); }

  onChange(handler) {
    this.$element.click(function() {
      var checked = this.isChecked();

      handler(checked);
    }.bind(this))
  }

  check(checked) {
    if (arguments.length === 0) {
      checked = true;
    }

    if (checked) {
      this.$element.attr('checked', 'checked');
    } else {
      this.$element.removeAttr('checked');
    }
  }

  isChecked() {
    return this.$element.is(':checked');
  }

  static clone(selectorOr$Element, changeHandler) {
    return InputElement.clone(Checkbox, selectorOr$Element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Checkbox, html, changeHandler);
  }

  static fromDOMElement(domElement) {
    return Element.fromDOMElement(Checkbox, domElement);
  }
}

module.exports = Checkbox;
