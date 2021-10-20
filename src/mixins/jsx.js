"use strict";

import { first, guarantee } from "../utilities/array";
import { isHTMLAttributeName, isSVGAttributeName } from "../utilities/name";
import { removeFalseyElements, replaceStringsWithTextElements } from "../utilities/elements";
import { FOR, CLASS, OBJECT, HTML_FOR, CLASS_NAME, BOOLEAN, FUNCTION, SVG_NAMESPACE_URI } from "../constants";

function applyProperties(properties, defaultProperties, ignoredProperties) {
  this.properties = Object.assign({}, properties, defaultProperties); ///

  const { namespaceURI } = this.domElement,
        svg = (namespaceURI === SVG_NAMESPACE_URI), ///
        propertiesKeys = Object.keys(this.properties),
        ignoredNames = ignoredProperties, ///
        names = propertiesKeys;  ///

  names.forEach((name) => {
    const ignoredNamesIncludesName = ignoredNames.includes(name);

    if (!ignoredNamesIncludesName) {
      const value = this.properties[name],
            nameHandlerName = isNameHandlerName(name);

      if (nameHandlerName) {
        addHandler(this, name, value);
      } else {
        const nameAttributeName = isNameAttributeName(name, svg);

        if (nameAttributeName) {
          addAttribute(this, name, value);
        }
      }
    }
  });

  const childElements = childElementsFromElement(this) || this.properties.childElements,  ///
        context = {};

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

    if (typeof firstArgument === BOOLEAN) {
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

  if (typeof element.childElements === FUNCTION) {
    childElements = element.childElements.call(element);

    childElements = guarantee(childElements);

    childElements = removeFalseyElements(childElements);

    childElements = replaceStringsWithTextElements(childElements);
  }

  return childElements;
}

function updateContext(childElement, context) {
  const parentContext = (typeof childElement.parentContext === FUNCTION) ?
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
  if (name === CLASS_NAME) {
    name = CLASS;
  }

  if (name === HTML_FOR) {
    name = FOR;
  }

  if (typeof value === OBJECT) {
    const keys = Object.keys(value);

    keys.forEach((key) => {
      element.domElement[name][key] = value[key];
    });
  } else if (typeof value === BOOLEAN) {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isNameHandlerName(name) {
  return name.match(/^on/);
}

function isNameAttributeName(name, svg) {
  return svg ? isSVGAttributeName(name) : isHTMLAttributeName(name)
}
