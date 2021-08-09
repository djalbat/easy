"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _object = require("../utilities/object");
var _array = require("../utilities/array");
var _name = require("../utilities/name");
var _elements = require("../utilities/elements");
var _constants = require("../constants");
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function applyProperties(properties, defaultProperties, ignoredProperties) {
    this.properties = properties;
    properties = Object.assign({
    }, properties); ///
    (0, _object).combine(properties, defaultProperties);
    var childElements = childElementsFromElement(this) || properties.childElements; ///
    (0, _object).prune(properties, ignoredProperties);
    var _domElement = this.domElement, namespaceURI = _domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, names = Object.keys(properties); ///
    names.forEach((function(name) {
        var value = properties[name];
        if (false) {
        ///
        } else if (isHandlerName(name)) {
            addHandler(this, name, value);
        } else if (isAttributeName(name, svg)) {
            addAttribute(this, name, value);
        } else {
        ///
        }
    }).bind(this));
    var context = {
    };
    childElements.forEach((function(childElement) {
        updateContext(childElement, context);
        this.add(childElement);
    }).bind(this));
    this.context = context;
}
function getProperties() {
    return this.properties;
}
function getContext() {
    return this.context;
}
function assignContext(names, thenDelete) {
    var argumentsLength = arguments.length;
    if (argumentsLength === 1) {
        var firstArgument = (0, _array).first(arguments);
        if (_typeof(firstArgument) === _constants.BOOLEAN) {
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
    names.forEach((function(name) {
        var value = this.context[name], propertyName = name, descriptor = {
            value: value
        };
        Object.defineProperty(this, propertyName, descriptor);
        if (thenDelete) {
            delete this.context[name];
        }
    }).bind(this), []);
}
var jsxMixins = {
    applyProperties: applyProperties,
    getProperties: getProperties,
    getContext: getContext,
    assignContext: assignContext
};
var _default = jsxMixins;
exports.default = _default;
function childElementsFromElement(element) {
    var childElements = null;
    if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array).guarantee(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        childElements = (0, _elements).replaceStringsWithTextElements(childElements);
    }
    return childElements;
}
function updateContext(childElement, context) {
    var parentContext = _typeof(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context; ///
    Object.assign(context, parentContext);
}
function addHandler(element, name, value) {
    var eventType = name.substr(2).toLowerCase(), handler = value; ///
    element.on(eventType, handler);
}
function addAttribute(element, name, value) {
    if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
    }
    if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
    }
    if (_typeof(value) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            element.domElement[name][key] = value[key];
        });
    } else if (_typeof(value) === _constants.BOOLEAN) {
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
    return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
}
