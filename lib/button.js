'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Button = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Button.prototype = {
  clone: function() { return Button.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      handler();

      return false;
    })
  },

  onDoubleClick: function(handler) {
    this.$element.dblclick(function() {
      handler();

      return false;
    })
  }
};

Button.fromHTML = function(html) {
  var $element = $(html),
      button = new Button($element);

  return button;
};

Button.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Button); };

module.exports = Button;
