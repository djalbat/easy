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
function assignContext(names) {
    var _this = this;
    if (names === undefined) {
        names = Object.keys(this.context);
    }
    names.forEach(function(name) {
        var value = _this.context[name], propertyName = name, descriptor = {
            value: value
        };
        Object.defineProperty(_this, propertyName, descriptor);
        delete _this.context[name];
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSwgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEhUTUxfRk9SLCBDTEFTU19OQU1FLCBCT09MRUFOLCBGVU5DVElPTiwgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IERPVUJMRV9DTElDS19FVkVOVF9UWVBFID0gXCJkb3VibGVjbGlja1wiLFxuICAgICAgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJzZWxlY3Rpb25DaGFuZ2VcIixcbiAgICAgIEZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJmdWxsU2NyZWVuQ2hhbmdlXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCBuYW1lc3BhY2VVUkkgPSB0aGlzLmRvbUVsZW1lbnQubmFtZXNwYWNlVVJJLFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSksXG4gICAgICAgICAgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWVDdXN0b21IYW5kbGVyTmFtZSkge1xuICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMpIHtcbiAgaWYgKG5hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dClcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gIH0pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGxldCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpOyAvLy9cblxuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IERCTENMSUNLX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21IYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IGNhbWVsQ2FzZVRvU25ha2VDYXNlKG5hbWUpLnJlcGxhY2UoL29uLWN1c3RvbS0vLCBcIlwiKSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSIsIlNFTEVDVElPTl9DSEFOR0VfRVZFTlRfVFlQRSIsIkZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFIiwiYXBwbHlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJjb21iaW5lIiwicHJ1bmUiLCJuYW1lc3BhY2VVUkkiLCJkb21FbGVtZW50Iiwic3ZnIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJwcm9wZXJ0aWVzS2V5cyIsIk9iamVjdCIsImtleXMiLCJuYW1lcyIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiLCJuYW1lSGFuZGxlck5hbWUiLCJpc05hbWVIYW5kbGVyTmFtZSIsIm5hbWVDdXN0b21IYW5kbGVyTmFtZSIsImlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiYWRkSGFuZGxlciIsImFkZEN1c3RvbUhhbmRsZXIiLCJuYW1lQXR0cmlidXRlTmFtZSIsImlzTmFtZUF0dHJpYnV0ZU5hbWUiLCJhZGRBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50IiwiY29udGV4dCIsImNoaWxkRWxlbWVudCIsInVwZGF0ZUNvbnRleHQiLCJhZGQiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0Q29udGV4dCIsImFzc2lnbkNvbnRleHQiLCJ1bmRlZmluZWQiLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJqc3hNaXhpbnMiLCJlbGVtZW50IiwiRlVOQ1RJT04iLCJjYWxsIiwiZ3VhcmFudGVlIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiYXNzaWduIiwiZXZlbnRUeXBlIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJEQkxDTElDS19FVkVOVF9UWVBFIiwiU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUiLCJGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUiLCJoYW5kbGVyIiwib25FdmVudCIsImN1c3RvbUV2ZW50VHlwZSIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwicmVwbGFjZSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50IiwiQ0xBU1NfTkFNRSIsIkNMQVNTIiwiSFRNTF9GT1IiLCJGT1IiLCJPQkpFQ1QiLCJrZXkiLCJCT09MRUFOIiwidGVzdCIsImlz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