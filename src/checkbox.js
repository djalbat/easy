'use strict';

var Element = require('./element');

class Checkbox extends Element {
  constructor(selectorOr$Element, clickHandler) {
    super(selectorOr$Element);

    if (clickHandler) {
      this.onClick(clickHandler);
    }
  }

  clone(clickHandler) { return Checkbox.clone(this.$element, clickHandler); }

  onClick(handler) {
    this.$element.click(function() {
      var checked = this.isChecked();

      handler(checked);
    }.bind(this))
  }

  check(checked) {
    if (arguments.length === 0) {
      checked = true;
    }

    if (checked) {
      this.$element.attr('checked', 'checked');
    } else {
      this.$element.removeAttr('checked');
    }
  }

  isChecked() {
    return this.$element.is(':checked');
  }
}

Checkbox.clone = function(selectorOr$Element, clickHandler) {
  return Element.clone(Checkbox, selectorOr$Element, clickHandler);
};

Checkbox.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(Checkbox, html, clickHandler);
};

module.exports = Checkbox;
