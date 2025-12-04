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
var _array = require("../utilities/array");
var _object = require("../utilities/object");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBjYW1lbENhc2VUb1NuYWtlQ2FzZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lLCBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEQkxDTElDS19FVkVOVF9UWVBFLCBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgSFRNTF9GT1IsIENMQVNTX05BTUUsIEJPT0xFQU4sIEZVTkNUSU9OLCBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEUgPSBcImRvdWJsZWNsaWNrXCIsXG4gICAgICBTRUxFQ1RJT05fQ0hBTkdFX0VWRU5UX1RZUEUgPSBcInNlbGVjdGlvbkNoYW5nZVwiLFxuICAgICAgRlVMTF9TQ1JFRU5fQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImZ1bGxTY3JlZW5DaGFuZ2VcIjtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBwcm9wZXJ0aWVzID0gcHJ1bmUodGhpcy5wcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7IC8vL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVVSSSA9IHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkksXG4gICAgICAgIHN2ZyA9IChuYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIHByb3BlcnRpZXNLZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksXG4gICAgICAgIG5hbWVzID0gcHJvcGVydGllc0tleXM7ICAvLy89XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXSxcbiAgICAgICAgICBuYW1lSGFuZGxlck5hbWUgPSBpc05hbWVIYW5kbGVyTmFtZShuYW1lKSxcbiAgICAgICAgICBuYW1lQ3VzdG9tSGFuZGxlck5hbWUgPSBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChuYW1lSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobmFtZUN1c3RvbUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRDdXN0b21IYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zyk7XG5cbiAgICAgIGlmIChuYW1lQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCh0aGlzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMsICAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG5cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcykge1xuICBpZiAobmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KVxuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgfSk7XG59XG5cbmNvbnN0IGpzeE1peGlucyA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzLFxuICBnZXRQcm9wZXJ0aWVzLFxuICBnZXRDb250ZXh0LFxuICBhc3NpZ25Db250ZXh0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqc3hNaXhpbnM7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5jaGlsZEVsZW1lbnRzLmNhbGwoZWxlbWVudCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgbGV0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7IC8vL1xuXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gREJMQ0xJQ0tfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RJT05fQ0hBTkdFX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgY29uc3QgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gY2FtZWxDYXNlVG9TbmFrZUNhc2UobmFtZSkucmVwbGFjZSgvb24tY3VzdG9tLS8sIFwiXCIpLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGFuZGxlck5hbWUgPSAgL15vbig/IUN1c3RvbSkvLnRlc3QobmFtZSk7ICAvLy9cblxuICByZXR1cm4gbmFtZUhhbmRsZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IHN2ZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcblxuICByZXR1cm4gbmFtZUF0dHJpYnV0ZU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gL15vbkN1c3RvbS8udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUN1c3RvbUhhbmRsZXJOYW1lO1xufVxuIl0sIm5hbWVzIjpbIkRPVUJMRV9DTElDS19FVkVOVF9UWVBFIiwiU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFIiwiRlVMTF9TQ1JFRU5fQ0hBTkdFX0VWRU5UX1RZUEUiLCJhcHBseVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImNvbWJpbmUiLCJwcnVuZSIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJTVkdfTkFNRVNQQUNFX1VSSSIsInByb3BlcnRpZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm5hbWVIYW5kbGVyTmFtZSIsImlzTmFtZUhhbmRsZXJOYW1lIiwibmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUiLCJhZGRIYW5kbGVyIiwiYWRkQ3VzdG9tSGFuZGxlciIsIm5hbWVBdHRyaWJ1dGVOYW1lIiwiaXNOYW1lQXR0cmlidXRlTmFtZSIsImFkZEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInVuZGVmaW5lZCIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImpzeE1peGlucyIsImVsZW1lbnQiLCJGVU5DVElPTiIsImNhbGwiLCJndWFyYW50ZWUiLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJhc3NpZ24iLCJldmVudFR5cGUiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkRCTENMSUNLX0VWRU5UX1RZUEUiLCJTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSIsIkZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSIsImhhbmRsZXIiLCJvbkV2ZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiY2FtZWxDYXNlVG9TbmFrZUNhc2UiLCJyZXBsYWNlIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJDTEFTU19OQU1FIiwiQ0xBU1MiLCJIVE1MX0ZPUiIsIkZPUiIsIk9CSkVDVCIsImtleSIsIkJPT0xFQU4iLCJ0ZXN0IiwiaXNTVkdBdHRyaWJ1dGVOYW1lIiwiaXNIVE1MQXR0cmlidXRlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUZBOzs7ZUFBQTs7O3FCQXZGMEI7c0JBQ0s7c0JBQ007b0JBQ21CO3dCQUNhOzBCQUN3Qjt5QkFDRTs7Ozs7QUFFL0YsSUFBTUEsMEJBQTBCLGVBQzFCQyw4QkFBOEIsbUJBQzlCQyxnQ0FBZ0M7QUFFdEMsU0FBU0MsZ0JBQWdCQyxVQUFVLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7O0lBQ3ZFLElBQUksQ0FBQ0YsVUFBVSxHQUFHRyxJQUFBQSxlQUFPLEVBQUNILFlBQVlDO0lBRXRDRCxhQUFhSSxJQUFBQSxhQUFLLEVBQUMsSUFBSSxDQUFDSixVQUFVLEVBQUVFLG9CQUFvQixHQUFHO0lBRTNELElBQU1HLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNELFlBQVksRUFDM0NFLE1BQU9GLGlCQUFpQkcsNEJBQWlCLEVBQ3pDQyxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ1gsYUFDN0JZLFFBQVFILGdCQUFpQixJQUFJO0lBRW5DRyxNQUFNQyxPQUFPLENBQUMsU0FBQ0M7UUFDYixJQUFNQyxRQUFRZixVQUFVLENBQUNjLEtBQUssRUFDeEJFLGtCQUFrQkMsa0JBQWtCSCxPQUNwQ0ksd0JBQXdCQyx3QkFBd0JMO1FBRXRELElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlFLGlCQUFpQjtZQUMxQkksa0JBQWlCTixNQUFNQztRQUN6QixPQUFPLElBQUlHLHVCQUF1QjtZQUNoQ0csd0JBQXVCUCxNQUFNQztRQUMvQixPQUFPO1lBQ0wsSUFBTU8sb0JBQW9CQyxvQkFBb0JULE1BQU1QO1lBRXBELElBQUllLG1CQUFtQjtnQkFDckJFLG9CQUFtQlYsTUFBTUM7WUFDM0I7UUFDRjtJQUNGO0lBRUEsSUFBTVUsZ0JBQWdCQyx5QkFBeUIsSUFBSSxLQUFLMUIsV0FBV3lCLGFBQWEsRUFDMUVFLFVBQVUsQ0FBQztJQUVqQkYsY0FBY1osT0FBTyxDQUFDLFNBQUNlO1FBQ3JCQyxjQUFjRCxjQUFjRDtRQUU1QixNQUFLRyxHQUFHLENBQUNGO0lBQ1g7SUFFQSxJQUFJLENBQUNELE9BQU8sR0FBR0E7QUFDakI7QUFFQSxTQUFTSTtJQUNQLE9BQU8sSUFBSSxDQUFDL0IsVUFBVTtBQUN4QjtBQUVBLFNBQVNnQztJQUNQLE9BQU8sSUFBSSxDQUFDTCxPQUFPO0FBQ3JCO0FBRUEsU0FBU00sY0FBY3JCLEtBQUs7O0lBQzFCLElBQUlBLFVBQVVzQixXQUFXO1FBQ3ZCdEIsUUFBUUYsT0FBT0MsSUFBSSxDQUFDLElBQUksQ0FBQ2dCLE9BQU87SUFDbEM7SUFFQWYsTUFBTUMsT0FBTyxDQUFDLFNBQUNDO1FBQ2IsSUFBTUMsUUFBUSxNQUFLWSxPQUFPLENBQUNiLEtBQUssRUFDMUJxQixlQUFlckIsTUFDZnNCLGFBQWE7WUFDWHJCLE9BQU9BO1FBQ1Q7UUFFTkwsT0FBTzJCLGNBQWMsUUFBT0YsY0FBY0M7UUFFMUMsT0FBTyxNQUFLVCxPQUFPLENBQUNiLEtBQUs7SUFDM0I7QUFDRjtBQUVBLElBQU13QixZQUFZO0lBQ2hCdkMsaUJBQUFBO0lBQ0FnQyxlQUFBQTtJQUNBQyxZQUFBQTtJQUNBQyxlQUFBQTtBQUNGO0lBRUEsV0FBZUs7QUFFZixTQUFTWix5QkFBeUJhLE9BQU87SUFDdkMsSUFBSWQsZ0JBQWdCO0lBRXBCLElBQUksU0FBT2MsUUFBUWQsYUFBYSxNQUFLZSxtQkFBUSxFQUFFO1FBQzdDZixnQkFBZ0JjLFFBQVFkLGFBQWEsQ0FBQ2dCLElBQUksQ0FBQ0Y7UUFFM0NkLGdCQUFnQmlCLElBQUFBLGdCQUFTLEVBQUNqQjtRQUUxQkEsZ0JBQWdCa0IsSUFBQUEsOEJBQW9CLEVBQUNsQjtRQUVyQ0EsZ0JBQWdCbUIsSUFBQUEsd0NBQThCLEVBQUNuQjtJQUNqRDtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTSSxjQUFjRCxZQUFZLEVBQUVELE9BQU87SUFDMUMsSUFBTWtCLGdCQUFnQixBQUFDLFNBQU9qQixhQUFhaUIsYUFBYSxNQUFLTCxtQkFBUSxHQUM3Q1osYUFBYWlCLGFBQWEsS0FDeEJqQixhQUFhRCxPQUFPLEVBQUUsR0FBRztJQUVuRGpCLE9BQU9vQyxNQUFNLENBQUNuQixTQUFTa0I7QUFDekI7QUFFQSxTQUFTekIsV0FBV21CLE9BQU8sRUFBRXpCLElBQUksRUFBRUMsS0FBSztJQUN0QyxJQUFJZ0MsWUFBWWpDLEtBQUtrQyxTQUFTLENBQUMsR0FBR0MsV0FBVyxJQUFJLEdBQUc7SUFFcEQsT0FBUUY7UUFDTixLQUFLbkQ7WUFBeUI7Z0JBQzVCbUQsWUFBWUcsK0JBQW1CO2dCQUUvQjtZQUNGO1FBRUEsS0FBS3JEO1lBQTZCO2dCQUNoQ2tELFlBQVlJLHNDQUEwQjtnQkFFdEM7WUFDRjtRQUVBLEtBQUtyRDtZQUErQjtnQkFDbENpRCxZQUFZSyx1Q0FBMkI7Z0JBRXZDO1lBQ0Y7SUFFRjtJQUVBLElBQU1DLFVBQVV0QyxPQUFRLEdBQUc7SUFFM0J3QixRQUFRZSxPQUFPLENBQUNQLFdBQVdNO0FBQzdCO0FBRUEsU0FBU2hDLGlCQUFpQmtCLE9BQU8sRUFBRXpCLElBQUksRUFBRUMsS0FBSztJQUM1QyxJQUFNd0Msa0JBQWtCQyxJQUFBQSw0QkFBb0IsRUFBQzFDLE1BQU0yQyxPQUFPLENBQUMsY0FBYyxLQUNuRUMsZ0JBQWdCM0MsT0FBUSxHQUFHO0lBRWpDd0IsUUFBUW9CLGFBQWEsQ0FBQ0osaUJBQWlCRztBQUN6QztBQUVBLFNBQVNsQyxhQUFhZSxPQUFPLEVBQUV6QixJQUFJLEVBQUVDLEtBQUs7SUFDeEMsSUFBSUQsU0FBUzhDLHFCQUFVLEVBQUU7UUFDdkI5QyxPQUFPK0MsZ0JBQUs7SUFDZDtJQUVBLElBQUkvQyxTQUFTZ0QsbUJBQVEsRUFBRTtRQUNyQmhELE9BQU9pRCxjQUFHO0lBQ1o7SUFFQSxJQUFJLENBQUEsT0FBT2hELHNDQUFQLFNBQU9BLE1BQUksTUFBTWlELGlCQUFNLEVBQUU7UUFDM0IsSUFBTXJELE9BQU9ELE9BQU9DLElBQUksQ0FBQ0k7UUFFekJKLEtBQUtFLE9BQU8sQ0FBQyxTQUFDb0Q7WUFDWjFCLFFBQVFqQyxVQUFVLENBQUNRLEtBQUssQ0FBQ21ELElBQUksR0FBR2xELEtBQUssQ0FBQ2tELElBQUk7UUFDNUM7SUFDRixPQUFPLElBQUksQ0FBQSxPQUFPbEQsc0NBQVAsU0FBT0EsTUFBSSxNQUFNbUQsa0JBQU8sRUFBRTtRQUNuQyxJQUFJbkQsT0FBTztZQUNUQSxRQUFRRCxNQUFNLEdBQUc7WUFFakJ5QixRQUFRZixZQUFZLENBQUNWLE1BQU1DO1FBQzdCO0lBQ0YsT0FBTztRQUNMd0IsUUFBUWYsWUFBWSxDQUFDVixNQUFNQztJQUM3QjtBQUNGO0FBRUEsU0FBU0Usa0JBQWtCSCxJQUFJO0lBQzdCLElBQU1FLGtCQUFtQixnQkFBZ0JtRCxJQUFJLENBQUNyRCxPQUFRLEdBQUc7SUFFekQsT0FBT0U7QUFDVDtBQUVBLFNBQVNPLG9CQUFvQlQsSUFBSSxFQUFFUCxHQUFHO0lBQ3BDLElBQU1lLG9CQUFvQmYsTUFDQzZELElBQUFBLHdCQUFrQixFQUFDdEQsUUFDakJ1RCxJQUFBQSx5QkFBbUIsRUFBQ3ZEO0lBRWpELE9BQU9RO0FBQ1Q7QUFFQSxTQUFTSCx3QkFBd0JMLElBQUk7SUFDbkMsSUFBTUksd0JBQXdCLFlBQVlpRCxJQUFJLENBQUNyRDtJQUUvQyxPQUFPSTtBQUNUIn0=