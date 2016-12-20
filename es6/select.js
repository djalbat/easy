'use strict';

var InputElement = require('./inputElement');

class Select extends InputElement {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Select.clone(this, changeHandler); }

  onChange(changeHandler, namespace) {
    this.on('change', function() {
      var selectedOptionValue = this.getSelectedOptionValue();

      changeHandler(selectedOptionValue);
    }.bind(this), namespace);
  }
  
  offChange(namespace) {
    this.off('change', namespace);
  }

  getSelectedOptionValue() {
    var $selectedOption = this.$element.find(':selected'),  ///
        selectedOptionValue = $selectedOption.val();  ///

    return selectedOptionValue;
  }

  setSelectedOptionByValue(value) { this.$element.val(value); }

  static clone(selectorOrElement, changeHandler) {
    return InputElement.clone(Select, selectorOrElement, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Select, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Select, domElement, changeHandler);
  }
}

module.exports = Select;
