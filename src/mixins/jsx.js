"use strict";

import { combine, prune } from "../utilities/object";
import { first, guarantee } from "../utilities/array";
import { camelCaseToSnakeCase } from "../utilities/string";
import { isHTMLAttributeName, isSVGAttributeName } from "../utilities/name";
import { removeFalseyElements, replaceStringsWithTextElements } from "../utilities/elements";
import { DBLCLICK_EVENT_TYPE, SELECTIONCHANGE_EVENT_TYPE, FULLSCREENCHANGE_EVENT_TYPE } from "../eventTypes";
import { FOR, CLASS, OBJECT, HTML_FOR, CLASS_NAME, BOOLEAN, FUNCTION, SVG_NAMESPACE_URI } from "../constants";

const DOUBLE_CLICK_EVENT_TYPE = "doubleclick",
      SELECTION_CHANGE_EVENT_TYPE = "selectionChange",
      FULL_SCREEN_CHANGE_EVENT_TYPE = "fullScreenChange";

function applyProperties(properties, defaultProperties, ignoredProperties) {
  this.properties = combine(properties, defaultProperties);

  properties = prune(this.properties, ignoredProperties); ///

  const namespaceURI = this.domElement.namespaceURI,
        svg = (namespaceURI === SVG_NAMESPACE_URI), ///
        propertiesKeys = Object.keys(properties),
        names = propertiesKeys;  ///=

  names.forEach((name) => {
    const value = properties[name],
          nameHandlerName = isNameHandlerName(name),
          nameCustomHandlerName = isNameCustomHandlerName(name);

    if (false) {
      ///
    } else if (nameHandlerName) {
      addHandler(this, name, value);
    } else if (nameCustomHandlerName) {
      addCustomHandler(this, name, value);
    } else {
      const nameAttributeName = isNameAttributeName(name, svg);

      if (nameAttributeName) {
        addAttribute(this, name, value);
      }
    }
  });

  const childElements = childElementsFromElement(this) || properties.childElements,  ///
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

function assignContext(names) {
  if (names === undefined) {
    names = Object.keys(this.context)
  }

  names.forEach((name) => {
    const value = this.context[name],
          propertyName = name,  ///
          descriptor = {
            value: value
          };

    Object.defineProperty(this, propertyName, descriptor);

    delete this.context[name];
  });
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
  let eventType = name.substring(2).toLowerCase(); ///

  switch (eventType) {
    case DOUBLE_CLICK_EVENT_TYPE: {
      eventType = DBLCLICK_EVENT_TYPE;

      break;
    }

    case SELECTION_CHANGE_EVENT_TYPE: {
      eventType = SELECTIONCHANGE_EVENT_TYPE;

      break;
    }

    case FULL_SCREEN_CHANGE_EVENT_TYPE: {
      eventType = FULLSCREENCHANGE_EVENT_TYPE;

      break;
    }

  }

  const handler = value;  ///

  element.onEvent(eventType, handler);
}

function addCustomHandler(element, name, value) {
  const customEventType = camelCaseToSnakeCase(name).replace(/on-custom-/, ""),
        customHandler = value;  ///

  element.onCustomEvent(customEventType, customHandler);
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
  const nameHandlerName =  /^on(?!Custom)/.test(name);  ///

  return nameHandlerName;
}

function isNameAttributeName(name, svg) {
  const nameAttributeName = svg ?
                             isSVGAttributeName(name) :
                               isHTMLAttributeName(name);

  return nameAttributeName;
}

function isNameCustomHandlerName(name) {
  const nameCustomHandlerName = /^onCustom/.test(name);

  return nameCustomHandlerName;
}
