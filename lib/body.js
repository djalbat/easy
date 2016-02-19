'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Body = function() {
  var selector = 'body';  ///

  inherits(this, new Element(selector));
};

Body.prototype = {
  clone: function() { return Body.clone(this.$element); },

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

Body.fromHTML = function(html) {
  var $element = $(html),
      button = new Body($element);

  return button;
};

Body.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Body); };

module.exports = Body;
