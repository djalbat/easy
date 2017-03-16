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
      handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
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

  static fromProperties(Class, properties) {
    if (arguments.length === 1) {
      properties = Class;
      Class = Checkbox;
    }

    return InputElement.fromProperties(Class, properties);
  }
}

Object.assign(Checkbox, {
  tagName: 'input',
  customHandlerNames: [
    'onChange'
  ],
  additionalProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  const checked = this.isChecked(),
        preventDefault = handler(checked);

  return preventDefault;
}
