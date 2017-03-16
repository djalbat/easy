'use strict';

function applyProperties(properties, customHandlerNames, additionalProperties) {
  this.properties = {};
  
  Object.assign(properties, additionalProperties);

  const names = Object.keys(properties);

  names.forEach(function(name) {
    if (name === 'childElements') {
      const childElements = properties['childElements'];

      childElements.forEach(function(childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      const value = properties[name];

      if (false) {

      } else if (isCustomHandlerName(name, customHandlerNames)) {
        addCustomHandler(this, name, value);
      } else if (isHandlerName(name)) {
        addHandler(this, name, value);
      } else if (isAttributeName(name)) {
        addAttribute(this, name, value);
      } else {
        this.properties[name] = value;
      }
    }
  }.bind(this));
}

const jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

function addCustomHandler(element, name, value) {
  const customHandlerName = name, ///
        customHandler = value;  ///

  element[customHandlerName](customHandler);
}

function addHandler(element, name, value) {
  const eventType = name.substr(2).toLowerCase(), ///
        handler = value;  ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
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

function isCustomHandlerName(name, customHandlerNames) {
  return (customHandlerNames && customHandlerNames.includes(name));
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

const attributeNames = [
  'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay',
  'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin',
  'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable',
  'encType',
  'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder',
  'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv',
  'icon', 'id', 'inputMode', 'integrity', 'is',
  'keyParams', 'keyType', 'kind',
  'label', 'lang', 'list', 'loop', 'low',
  'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
  'name', 'noValidate', 'nonce',
  'open', 'optimum',
  'pattern', 'placeholder', 'poster', 'preload', 'profile',
  'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows',
  'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary',
  'tabIndex', 'target', 'title', 'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap'
];
