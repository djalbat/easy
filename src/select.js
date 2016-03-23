'use strict';

var Element = require('./element');

class Select extends Element {
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
}

Select.clone = function(selectorOr$Element, changeHandler) {
  return Element.clone(Select, selectorOr$Element, changeHandler);
};

Select.fromHTML = function(html, changeHandler) {
  return Element.fromHTML(Select, html, changeHandler);
};

module.exports = Select;
