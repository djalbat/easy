'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Div = function(selectorOr$Element) {
  inherits(this, new Element(selectorOr$Element));
};

Div.prototype = {
  clone: function() { return Div.clone(this.$element); }
};

Div.clone = function(selectorOr$Element) {
  return Element.clone(Div, selectorOr$Element);
};

Div.fromHTML = function(html) {
  return Element.fromHTML(Div, html);
};

module.exports = Div;
