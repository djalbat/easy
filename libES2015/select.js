'use strict';

var InputElement = require('./inputElement');

class Select extends InputElement {
  constructor(selectorOr$Element, changeHandler) {
    super(selectorOr$Element);

    if (changeHandler) {
      this.onChange(changeHandler);
    }
  }

  clone(changeHandler) { return Select.clone(this.$element, changeHandler); }

  onChange(handler) {
    this.$element.change(function() {
      var selectedOptionValue = this.getSelectedOptionValue();

      handler(selectedOptionValue);
    }.bind(this));
  }

  getSelectedOptionValue() {
    var $selectedOption = this.$element.find(':selected'),
        selectedOptionValue = $selectedOption.val();

    return selectedOptionValue;
  }

  setSelectedOptionByValue(value) {
    this.$element.val(value);
  }

  static clone(selectorOr$Element, changeHandler) {
    return InputElement.clone(Select, selectorOr$Element, changeHandler);
  }

  static fromHTML(html, changeHandler) {
    return InputElement.fromHTML(Select, html, changeHandler);
  }

  static fromDOMElement(domElement, changeHandler) {
    return InputElement.fromDOMElement(Select, domElement, changeHandler);
  }
}

module.exports = Select;
