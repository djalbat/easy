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
    if (handler.intermediateHandler === undefined) {
      handler.intermediateHandler = function(handler, event) {
        const checked = this.isChecked(),
              preventDefault = handler(checked);
        
        return preventDefault;
      }.bind(this);
    }

    this.on('click', handler);  ///
  }
  
  offChange(handler) {
    this.off('click', handler);  ///
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

