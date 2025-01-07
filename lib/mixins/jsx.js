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
var _eventTypes = require("../eventTypes");
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var DOUBLE_CLICK_EVENT_TYPE = "doubleclick", SELECTION_CHANGE_EVENT_TYPE = "selectionChange", FULL_SCREEN_CHANGE_EVENT_TYPE = "fullScreenChange";
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
        case DOUBLE_CLICK_EVENT_TYPE:
            {
                eventType = _eventTypes.DBLCLICK_EVENT_TYPE;
                break;
            }
        case SELECTION_CHANGE_EVENT_TYPE:
            {
                eventType = _eventTypes.SELECTIONCHANGE_EVENT_TYPE;
                break;
            }
        case FULL_SCREEN_CHANGE_EVENT_TYPE:
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSwgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEhUTUxfRk9SLCBDTEFTU19OQU1FLCBCT09MRUFOLCBGVU5DVElPTiwgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IERPVUJMRV9DTElDS19FVkVOVF9UWVBFID0gXCJkb3VibGVjbGlja1wiLFxuICAgICAgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJzZWxlY3Rpb25DaGFuZ2VcIixcbiAgICAgIEZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJmdWxsU2NyZWVuQ2hhbmdlXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCBuYW1lc3BhY2VVUkkgPSB0aGlzLmRvbUVsZW1lbnQubmFtZXNwYWNlVVJJLFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSksXG4gICAgICAgICAgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWVDdXN0b21IYW5kbGVyTmFtZSkge1xuICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGxldCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpOyAvLy9cblxuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IERCTENMSUNLX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21IYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IGNhbWVsQ2FzZVRvU25ha2VDYXNlKG5hbWUpLnJlcGxhY2UoL29uLWN1c3RvbS0vLCBcIlwiKSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSIsIlNFTEVDVElPTl9DSEFOR0VfRVZFTlRfVFlQRSIsIkZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFIiwiYXBwbHlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJjb21iaW5lIiwicHJ1bmUiLCJuYW1lc3BhY2VVUkkiLCJkb21FbGVtZW50Iiwic3ZnIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJwcm9wZXJ0aWVzS2V5cyIsIk9iamVjdCIsImtleXMiLCJuYW1lcyIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiLCJuYW1lSGFuZGxlck5hbWUiLCJpc05hbWVIYW5kbGVyTmFtZSIsIm5hbWVDdXN0b21IYW5kbGVyTmFtZSIsImlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiYWRkSGFuZGxlciIsImFkZEN1c3RvbUhhbmRsZXIiLCJuYW1lQXR0cmlidXRlTmFtZSIsImlzTmFtZUF0dHJpYnV0ZU5hbWUiLCJhZGRBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50IiwiY29udGV4dCIsImNoaWxkRWxlbWVudCIsInVwZGF0ZUNvbnRleHQiLCJhZGQiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0Q29udGV4dCIsImFzc2lnbkNvbnRleHQiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiQk9PTEVBTiIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImpzeE1peGlucyIsImVsZW1lbnQiLCJGVU5DVElPTiIsImNhbGwiLCJndWFyYW50ZWUiLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJhc3NpZ24iLCJldmVudFR5cGUiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkRCTENMSUNLX0VWRU5UX1RZUEUiLCJTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSIsIkZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSIsImhhbmRsZXIiLCJvbkV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiY2FtZWxDYXNlVG9TbmFrZUNhc2UiLCJyZXBsYWNlIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJDTEFTU19OQU1FIiwiQ0xBU1MiLCJIVE1MX0ZPUiIsIkZPUiIsIk9CSkVDVCIsImtleSIsInRlc3QiLCJpc1NWR0F0dHJpYnV0ZU5hbWUiLCJpc0hUTUxBdHRyaWJ1dGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyR0E7OztlQUFBOzs7c0JBekcrQjtxQkFDRTtzQkFDSTtvQkFDbUI7d0JBQ2E7MEJBQ3dCO3lCQUNFOzs7OztBQUUvRixJQUFNQSwwQkFBMEIsZUFDMUJDLDhCQUE4QixtQkFDOUJDLGdDQUFnQztBQUV0QyxTQUFTQyxnQkFBZ0JDLFVBQVUsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjs7SUFDdkUsSUFBSSxDQUFDRixVQUFVLEdBQUdHLElBQUFBLGVBQU8sRUFBQ0gsWUFBWUM7SUFFdENELGFBQWFJLElBQUFBLGFBQUssRUFBQyxJQUFJLENBQUNKLFVBQVUsRUFBRUUsb0JBQW9CLEdBQUc7SUFFM0QsSUFBTUcsZUFBZSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0QsWUFBWSxFQUMzQ0UsTUFBT0YsaUJBQWlCRyw0QkFBaUIsRUFDekNDLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDWCxhQUM3QlksUUFB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