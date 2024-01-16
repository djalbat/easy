"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object = require("../utilities/object");
var _array = require("../utilities/array");
var _name = require("../utilities/name");
var _elements = require("../utilities/elements");
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function applyProperties(properties, defaultProperties, ignoredProperties) {
    var _this = this;
    this.properties = (0, _object.combine)(properties, defaultProperties);
    properties = (0, _object.prune)(this.properties, ignoredProperties); ///
    var namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys; ///=
    names.forEach(function(name) {
        var value = properties[name], nameHandlerName = isNameHandlerName(name), nameCustomHandlerName = isNameCustomHandlerName(name);
        if (false) {
        ///
        } else if (nameHandlerName) {
            addHandler(_this, name, value);
        } else if (nameCustomHandlerName) {
            addCustomHandler(_this, name, value);
        } else {
            var nameAttributeName = isNameAttributeName(name, svg);
            if (nameAttributeName) {
                addAttribute(_this, name, value);
            }
        }
    });
    var childElements = childElementsFromElement(this) || properties.childElements, context = {};
    childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        _this.add(childElement);
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
    var _this = this;
    var argumentsLength = arguments.length;
    if (argumentsLength === 1) {
        var firstArgument = (0, _array.first)(arguments);
        if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.BOOLEAN) {
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
    names.forEach(function(name) {
        var value = _this.context[name], propertyName = name, descriptor = {
            value: value
        };
        Object.defineProperty(_this, propertyName, descriptor);
        if (thenDelete) {
            delete _this.context[name];
        }
    }, []);
}
var jsxMixins = {
    applyProperties: applyProperties,
    getProperties: getProperties,
    getContext: getContext,
    assignContext: assignContext
};
var _default = jsxMixins;
function childElementsFromElement(element) {
    var childElements = null;
    if (_type_of(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array.guarantee)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
    }
    return childElements;
}
function updateContext(childElement, context) {
    var parentContext = _type_of(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context; ///
    Object.assign(context, parentContext);
}
function addHandler(element, name, value) {
    var eventType = name.substring(2).toLowerCase(), handler = value; ///
    element.onEvent(eventType, handler);
}
function addCustomHandler(element, name, value) {
    var customEventType = name.substring(8).toLowerCase() + _constants.CUSTOM_EVENT_TYPE_SUFFIX, customHandler = value; ///
    element.onCustomEvent(customEventType, customHandler);
}
function addAttribute(element, name, value) {
    if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
    }
    if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
    }
    if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            element.domElement[name][key] = value[key];
        });
    } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN) {
        if (value) {
            value = name; ///
            element.addAttribute(name, value);
        }
    } else {
        element.addAttribute(name, value);
    }
}
function isNameHandlerName(name) {
    var nameHandlerName = /^on(?!Custom)/.test(name); ///
    return nameHandlerName;
}
function isNameAttributeName(name, svg) {
    var nameAttributeName = svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
    return nameAttributeName;
}
function isNameCustomHandlerName(name) {
    var nameCustomHandlerName = /^onCustom/.test(name);
    return nameCustomHandlerName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJLCBDVVNUT01fRVZFTlRfVFlQRV9TVUZGSVggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCB7IG5hbWVzcGFjZVVSSSB9ID0gdGhpcy5kb21FbGVtZW50LFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSksXG4gICAgICAgICAgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWVDdXN0b21IYW5kbGVyTmFtZSkge1xuICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZyg4KS50b0xvd2VyQ2FzZSgpICsgQ1VTVE9NX0VWRU5UX1RZUEVfU1VGRklYLCAvLy9cbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJhcHBseVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImNvbWJpbmUiLCJwcnVuZSIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJTVkdfTkFNRVNQQUNFX1VSSSIsInByb3BlcnRpZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm5hbWVIYW5kbGVyTmFtZSIsImlzTmFtZUhhbmRsZXJOYW1lIiwibmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUiLCJhZGRIYW5kbGVyIiwiYWRkQ3VzdG9tSGFuZGxlciIsIm5hbWVBdHRyaWJ1dGVOYW1lIiwiaXNOYW1lQXR0cmlidXRlTmFtZSIsImFkZEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJCT09MRUFOIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwianN4TWl4aW5zIiwiZWxlbWVudCIsIkZVTkNUSU9OIiwiY2FsbCIsImd1YXJhbnRlZSIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsImV2ZW50VHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJjdXN0b21FdmVudFR5cGUiLCJDVVNUT01fRVZFTlRfVFlQRV9TVUZGSVgiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIkNMQVNTX05BTUUiLCJDTEFTUyIsIkhUTUxfRk9SIiwiRk9SIiwiT0JKRUNUIiwia2V5IiwidGVzdCIsImlzU1ZHQXR0cmlidXRlTmFtZSIsImlzSFRNTEF0dHJpYnV0ZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFHQTs7O2VBQUE7OztzQkFuRytCO3FCQUNFO29CQUN1Qjt3QkFDYTt5QkFDb0Q7Ozs7O0FBRXpILFNBQVNBLGdCQUFnQkMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCOztJQUN2RSxJQUFJLENBQUNGLFVBQVUsR0FBR0csSUFBQUEsZUFBTyxFQUFDSCxZQUFZQztJQUV0Q0QsYUFBYUksSUFBQUEsYUFBSyxFQUFDLElBQUksQ0FBQ0osVUFBVSxFQUFFRSxvQkFBb0IsR0FBRztJQUUzRCxJQUFNLEFBQUVHLGVBQWlCLElBQUksQ0FBQ0MsVUFBVSxDQUFoQ0QsY0FDRkUsTUFBT0YsaUJBQWlCRyw0QkFBaUIsRUFDekNDLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDWCxhQUM3QlksUUFBUUgsZ0JBQWlCLElBQUk7SUFF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