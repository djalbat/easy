'use strict';

const Element = require('../element');

class Checkbox extends Element {
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
      handler.intermediateHandler = defaultIntermediateChangeHandler;
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

  onResize() {}

  offResize() {}

  static clone(element, changeHandler) {
    return Element.clone(Checkbox, element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return Element.fromHTML(Checkbox, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return Element.fromDOMElement(Checkbox, domElement, changeHandler);
  }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange; ///    

    return Element.fromProperties(Checkbox, properties, changeHandler, checked);
  }
}

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: [
    'onChange',
    'checked'
  ],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked(),
        preventDefault = handler(checked, targetElement);

  return preventDefault;
}
