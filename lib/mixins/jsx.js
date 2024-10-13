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
var _string = require("../utilities/string");
var _name = require("../utilities/name");
var _elements = require("../utilities/elements");
var _constants = require("../constants");
var _eventTypes = require("../eventTypes");
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
    var eventType = name.substring(2).toLowerCase(); ///
    switch(eventType){
        case _eventTypes.DOUBLE_CLICK_EVENT_TYPE:
            {
                eventType = _eventTypes.DBLCLICK_EVENT_TYPE;
                break;
            }
        case _eventTypes.SELECTION_CHANGE_EVENT_TYPE:
            {
                eventType = _eventTypes.SELECTIONCHANGE_EVENT_TYPE;
                break;
            }
        case _eventTypes.FULL_SCREEN_CHANGE_EVENT_TYPE:
            {
                eventType = _eventTypes.FULLSCREENCHANGE_EVENT_TYPE;
                break;
            }
    }
    var handler = value; ///
    element.onEvent(eventType, handler);
}
function addCustomHandler(element, name, value) {
    var customEventType = (0, _string.camelCaseToSnakeCase)(name).replace(/on-custom-/, ""), customHandler = value; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgICAgICAgIERPVUJMRV9DTElDS19FVkVOVF9UWVBFLFxuICAgICAgICAgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICAgICBTRUxFQ1RJT05fQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICAgICBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICAgICBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCBuYW1lc3BhY2VVUkkgPSB0aGlzLmRvbUVsZW1lbnQubmFtZXNwYWNlVVJJLFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSksXG4gICAgICAgICAgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWVDdXN0b21IYW5kbGVyTmFtZSkge1xuICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGxldCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpOyAvLy9cblxuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IERCTENMSUNLX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21IYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IGNhbWVsQ2FzZVRvU25ha2VDYXNlKG5hbWUpLnJlcGxhY2UoL29uLWN1c3RvbS0vLCBcIlwiKSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJhcHBseVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImNvbWJpbmUiLCJwcnVuZSIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJTVkdfTkFNRVNQQUNFX1VSSSIsInByb3BlcnRpZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm5hbWVIYW5kbGVyTmFtZSIsImlzTmFtZUhhbmRsZXJOYW1lIiwibmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUiLCJhZGRIYW5kbGVyIiwiYWRkQ3VzdG9tSGFuZGxlciIsIm5hbWVBdHRyaWJ1dGVOYW1lIiwiaXNOYW1lQXR0cmlidXRlTmFtZSIsImFkZEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJCT09MRUFOIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwianN4TWl4aW5zIiwiZWxlbWVudCIsIkZVTkNUSU9OIiwiY2FsbCIsImd1YXJhbnRlZSIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsImV2ZW50VHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEUiLCJEQkxDTElDS19FVkVOVF9UWVBFIiwiU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFIiwiU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUiLCJGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRSIsIkZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSIsImhhbmRsZXIiLCJvbkV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiY2FtZWxDYXNlVG9TbmFrZUNhc2UiLCJyZXBsYWNlIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJDTEFTU19OQU1FIiwiQ0xBU1MiLCJIVE1MX0ZPUiIsIkZPUiIsIk9CSkVDVCIsImtleSIsInRlc3QiLCJpc1NWR0F0dHJpYnV0ZU5hbWUiLCJpc0hUTUxBdHRyaWJ1dGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0R0E7OztlQUFBOzs7c0JBMUcrQjtxQkFDRTtzQkFDSTtvQkFDbUI7d0JBQ2E7eUJBQzBCOzBCQU1qRDs7Ozs7QUFFOUMsU0FBU0EsZ0JBQWdCQyxVQUFVLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7O0lBQ3ZFLElBQUksQ0FBQ0YsVUFBVSxHQUFHRyxJQUFBQSxlQUFPLEVBQUNILFlBQVlDO0lBRXRDRCxhQUFhSSxJQUFBQSxhQUFLLEVBQUMsSUFBSSxDQUFDSixVQUFVLEVBQUVFLG9CQUFvQixHQUFHO0lBRTNELElBQU1HLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNELFlBQVksRUFDM0NFLE1BQU9GLGlCQUFpQkcsNEJBQWlCLEVBQ3pDQyxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ1gsYUFDN0JZLFFBQVFILGdCQUFpQixJQUFJO0lBRW5DRyxNQUFNQyxPQUFPLENBQUMsU0FBQ0M7UUFDYixJQUFNQyxRQUFRZixVQUFVLENBQUNjLEtBQUssRUFDeEJF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