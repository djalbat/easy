'use strict';

const InputElement = require('../inputElement');

class Checkbox extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Checkbox.clone(this, changeHandler); }

  onChange(handler) {
    const preventDefault = false;

    this.on('click', handler, preventDefault, intermediateChangeHandler.bind(this));  ///
  }

  check(checked = true) {
    checked ?
      this.setAttribute('checked', 'checked') :
        this.clearAttribute('checked');
  }

  isChecked() { return this.domElement.checked; }

  static clone(element, changeHandler) {
    return InputElement.clone(Checkbox, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Checkbox, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const html = '<input type="checkbox" />',
          { onChange } = properties,
          changeHandler = onChange;  ///

    return Checkbox.fromHTML(html, changeHandler);
  }
}

module.exports = Checkbox;

function intermediateChangeHandler(handler, event) {
  const checked = this.isChecked();

  handler(checked);
}