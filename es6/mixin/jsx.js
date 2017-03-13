'use strict';

function applyProperties(properties) {
  const names = Object.keys(properties);

  names.forEach(function(name) {
    if (name === 'childElements') {
      const childElements = properties['childElements'];

      childElements.forEach(function(childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      const value = properties[name];

      if (isHandlerName(name)) {
        const eventType = eventTypeFromName(name),
              handler = value;  ///

        this.on(eventType, handler);
      } else {
        applyPropertyAsAttribute(this, name, value);
      }
    }
  }.bind(this));
}

const jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

function applyPropertyAsAttribute(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if (typeof value === 'object') {
    const keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}
