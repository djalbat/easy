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
        if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.BOOLEAN) {
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
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            element.domElement[name][key] = value[key];
        });
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmUiLCJwcnVuZSIsImZpcnN0IiwiZ3VhcmFudGVlIiwiaXNIVE1MQXR0cmlidXRlTmFtZSIsImlzU1ZHQXR0cmlidXRlTmFtZSIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwiRk9SIiwiQ0xBU1MiLCJPQkpFQ1QiLCJIVE1MX0ZPUiIsIkNMQVNTX05BTUUiLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJTVkdfTkFNRVNQQUNFX1VSSSIsImFwcGx5UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJuYW1lcyIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwiaXNIYW5kbGVyTmFtZSIsImFkZEhhbmRsZXIiLCJpc0F0dHJpYnV0ZU5hbWUiLCJhZGRBdHRyaWJ1dGUiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwianN4TWl4aW5zIiwiZWxlbWVudCIsImNhbGwiLCJwYXJlbnRDb250ZXh0IiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwib24iLCJrZXkiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIs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