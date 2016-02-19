'use strict';

var inherits = require('../inherits');

var Element = require('./element');

var Link = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  if (clickHandler) {
    this.onClick(clickHandler);
  }
};

Link.prototype = {
  clone: function() { return Link.clone(this.$element); },

  onClick: function(handler) {
    this.$element.click(function() {
      var href = this.$element.attr('href');

      handler(href);

      return false;
    }.bind(this))
  }
};

Link.fromHTML = function(html) {
  var $element = $(html),
      link = new Link($element);

  return  link;
};

Link.clone = function(selectorOr$Element) { return Element.clone(selectorOr$Element, Link); };

module.exports = Link;
