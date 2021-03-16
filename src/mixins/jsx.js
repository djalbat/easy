"use strict";

import { combine, prune } from "../utilities/object";
import { first, guarantee } from "../utilities/array";
import { SVG_NAMESPACE_URI } from "../constants";
import { isHTMLAttributeName, isSVGAttributeName } from "../utilities/name";
import { removeFalseyElements, replaceStringsWithTextElements } from "../utilities/elements";

function applyProperties(properties, defaultProperties, ignoredProperties) {
  this.properties = properties;

  properties = Object.assign({}, properties); ///

  combine(properties, defaultProperties);

  const childElements = childElementsFromElement(this) || properties.childElements;  ///

  prune(properties, ignoredProperties);

  const { namespaceURI } = this.domElement,
        svg = (namespaceURI === SVG_NAMESPACE_URI), ///
        names = Object.keys(properties);  ///

  names.forEach((name) => {
    const value = properties[name];

    if (false) {
      ///
    } else if (isHandlerName(name)) {
      addHandler(this, name, value);
    } else if (isAttributeName(name, svg)) {
      addAttribute(this, name, value);
    } else {
      ///
    }
  });

  const context = {};

  childElements.forEach((childElement) => {
    updateContext(childElement, context);

    this.add(childElement);
  });

  this.context = context;
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function assignContext(names, thenDelete) {
  const argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    const firstArgument = first(arguments);

    if (typeof firstArgument === "boolean") {
      names = Object.keys(this.context);

      thenDelete = firstArgument;
    } else {
      thenDelete = true;
    }
  }

  if (argumentsLength === 0) {
    names = Object.keys(this.context);

    thenDelete = true;
  }

  names.forEach((name) => {
    const value = this.context[name],
          propertyName = name,  ///
          descriptor = {
            value: value
          };

    Object.defineProperty(this, propertyName, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }, []);
}

const jsxMixins = {
  applyProperties,
  getProperties,
  getContext,
  assignContext
};

export default jsxMixins;

function childElementsFromElement(element) {
  let childElements = null;

  if (typeof element.childElements === "function") {
    childElements = element.childElements.call(element);

    childElements = guarantee(childElements);

    childElements = removeFalseyElements(childElements);

    childElements = replaceStringsWithTextElements(childElements);
  }

  return childElements;
}

function updateContext(childElement, context) {
  const parentContext = (typeof childElement.parentContext === "function") ?
                          childElement.parentContext() :
                            childElement.context; ///

  Object.assign(context, parentContext);
}

function addHandler(element, name, value) {
  const eventType = name.substr(2).toLowerCase(), ///
        handler = value;  ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === "className") {
    name = "class";
  }

  if (name === "htmlFor") {
    name = "for";
  }

  if (typeof value === "object") {
    const keys = Object.keys(value);

    keys.forEach((key) => {
      element.domElement[name][key] = value[key];
    });
  } else if (typeof value === "boolean") {
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

function isAttributeName(name, svg) {
  return svg ? isSVGAttributeName(name) : isHTMLAttributeName(name)
}
