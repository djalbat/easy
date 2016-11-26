'use strict';

var InputElement = require('./inputElement');

class Checkbox extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Checkbox.clone(this, changeHandler); }

  onChange(changeHandler) {
    var button = undefined,
        allowDefault = true;

    this.onClick(function() {
      var checked = this.isChecked();

      changeHandler(checked);
    }.bind(this), button, allowDefault)
  }

  check(checked = true) {
    checked ?
      this.addAttribute('checked', 'checked') :
        this.removeAttribute('checked');
  }

  isChecked() {
    var checked = this.$element.is(':checked'); ///
    
    return checked;
  }

  static clone(selectorOrElement, changeHandler) {
    return InputElement.clone(Checkbox, selectorOrElement, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Checkbox, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
  }
}

module.exports = Checkbox;
