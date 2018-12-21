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

  onChange(changeHandler, object, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on('click', changeHandler, object, intermediateChangeHandler);  ///
  }
  
  offChange(changeHandler, object) {
    this.off('click', changeHandler, object);  ///
  }

  check(checked = true) {
    const domElement = this.getDOMElement();

    domElement.checked = checked;
  }

  isChecked() {
    const domElement = this.getDOMElement(),
        checked = domElement.checked;

    return checked;
  }

  onResize() {}

  offResize() {}

  static clone(element, changeHandler) { return Element.clone(Checkbox, element, changeHandler); }

  static fromHTML(html, changeHandler) { return Element.fromHTML(Checkbox, html, changeHandler); }

  static fromDOMElement(domElement, changeHandler) { return Element.fromDOMElement(Checkbox, domElement, changeHandler); }

  static fromProperties(properties) {
    const { onChange, checked } = properties,
          changeHandler = onChange, ///    
          checkbox = Element.fromProperties(Checkbox, properties, changeHandler, checked);
    
    return checkbox;
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

function defaultIntermediateChangeHandler(changeHandler, event, element) {
  const checkbox = element, ///
        checked = checkbox.isChecked();
  
  changeHandler.call(checkbox, checked, event);
}
