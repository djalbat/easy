'use strict';

const TextElement = require('../textElement');

function appendTo(parentElement) {
  const parentContext = this.parentContext ?
                          this.parentContext() :
                            this.context;

  if (parentContext !== undefined) {
    if (!parentElement.hasOwnProperty('context')) {
      const context = {};

      Object.assign(parentElement, {
        context: context
      });
    }

    parentElement.context = Object.assign(parentElement.context, parentContext);
  }

  parentElement.append(this);
}

function removeFrom(parentElement) {
  parentElement.remove(this);
}

function assignContext(names = Object.keys(this.context), thenDelete = true) {
  names.forEach(function(name) {
    const value = this.context[name],
          descriptor = {
            value: value
          };

    Object.defineProperty(this, name, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }.bind(this));
}

function applyProperties(properties = {}, defaultProperties, ignoredProperties) {
  assign(properties, defaultProperties);

  const childElements = childElementsFromElementAndProperties(this, properties);

  unassign(properties, ignoredProperties);

  const names = Object.keys(properties);

  names.forEach(function(name) {
    const value = properties[name];

    if (false) {

    } else if (isHandlerName(name)) {
      addHandler(this, name, value);
    } else if (isAttributeName(name)) {
      addAttribute(this, name, value);
    } else {
      if (!this.hasOwnProperty('properties')) {
        const properties = {};

        Object.assign(this, {
          properties: properties
        });
      }

      this.properties[name] = value;
    }
  }.bind(this));

  const parentElement = this; ///

  childElements.forEach(function(childElement) {
    childElement.appendTo(parentElement);
  }.bind(this));
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

const jsxMixin = {
  appendTo: appendTo,
  removeFrom: removeFrom,
  assignContext: assignContext,
  applyProperties: applyProperties,
  getProperties: getProperties,
  getContext: getContext,
  getState: getState,
  setState: setState
};

module.exports = jsxMixin;

function childElementsFromElementAndProperties(element, properties) {
  let childElements = element.childElements ?
                        element.childElements(properties) :
                          properties.childElements;

  childElements = (childElements !== undefined) ?
                   ((childElements instanceof Array) ?
                       childElements :
                        [childElements]) :
                          [];

  childElements = childElements.map(function(childElement) {
    if (typeof childElement === 'string') {
      const text = childElement,  ///
            textElement = new TextElement(text);

      childElement = textElement; ///
    }

    return childElement;
  });

  return childElements;
}

function unassign(properties, ignoredProperties = []) {
  const ignoredPropertyNames = ignoredProperties; ///

  ignoredPropertyNames.forEach(function(ignoredPropertyName) {
    if (properties.hasOwnProperty(ignoredPropertyName)) {
      delete properties[ignoredPropertyName];
    }
  });
}

function assign(properties, defaultProperties = {}) {
  const defaultPropertyNames = Object.keys(defaultProperties);

  defaultPropertyNames.forEach(function(defaultPropertyName) {
    if (!properties.hasOwnProperty(defaultPropertyName)) {
      const defaultPropertyValue = defaultProperties[defaultPropertyName];

      properties[defaultPropertyName] = defaultPropertyValue;
    }
  });
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
