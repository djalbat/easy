'use strict';

const InputElement = require('../inputElement');

class Checkbox extends InputElement {
  constructor(selector, changeHandler, checked) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
    
    if (checked !== undefined) {
      this.check(checked);
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

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange; ///    

    return InputElement.fromProperties(Checkbox, properties, changeHandler, checked);
  }
}

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: [
    'onChange'
  ],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const checked = this.isChecked(),
        preventDefault = handler(checked, targetElement);

  return preventDefault;
}
