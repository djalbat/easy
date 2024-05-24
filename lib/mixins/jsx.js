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
var _eventTypes = require("../eventTypes");
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
    var eventType = name.substring(2).toLowerCase(); ///
    if (eventType === _eventTypes.DOUBLE_CLICK_EVENT_TYPE) {
        eventType = _eventTypes.DBLCLICK_EVENT_TYPE;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBEQkxDTElDS19FVkVOVF9UWVBFLCBET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgbmFtZXNwYWNlVVJJID0gdGhpcy5kb21FbGVtZW50Lm5hbWVzcGFjZVVSSSxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpLFxuICAgICAgICAgIG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lQ3VzdG9tSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEN1c3RvbUhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgaWYgKG5hbWVBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBCT09MRUFOKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBsZXQgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTsgLy8vXG5cbiAgaWYgKGV2ZW50VHlwZSA9PT0gRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEUpIHtcbiAgICBldmVudFR5cGUgPSBEQkxDTElDS19FVkVOVF9UWVBFO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gY2FtZWxDYXNlVG9TbmFrZUNhc2UobmFtZSkucmVwbGFjZSgvb24tY3VzdG9tLS8sIFwiXCIpLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGFuZGxlck5hbWUgPSAgL15vbig/IUN1c3RvbSkvLnRlc3QobmFtZSk7ICAvLy9cblxuICByZXR1cm4gbmFtZUhhbmRsZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IHN2ZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcblxuICByZXR1cm4gbmFtZUF0dHJpYnV0ZU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gL15vbkN1c3RvbS8udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUN1c3RvbUhhbmRsZXJOYW1lO1xufVxuIl0sIm5hbWVzIjpbImFwcGx5UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiY29tYmluZSIsInBydW5lIiwibmFtZXNwYWNlVVJJIiwiZG9tRWxlbWVudCIsInN2ZyIsIlNWR19OQU1FU1BBQ0VfVVJJIiwicHJvcGVydGllc0tleXMiLCJPYmplY3QiLCJrZXlzIiwibmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwibmFtZUhhbmRsZXJOYW1lIiwiaXNOYW1lSGFuZGxlck5hbWUiLCJuYW1lQ3VzdG9tSGFuZGxlck5hbWUiLCJpc05hbWVDdXN0b21IYW5kbGVyTmFtZSIsImFkZEhhbmRsZXIiLCJhZGRDdXN0b21IYW5kbGVyIiwibmFtZUF0dHJpYnV0ZU5hbWUiLCJpc05hbWVBdHRyaWJ1dGVOYW1lIiwiYWRkQXR0cmlidXRlIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCIsImNvbnRleHQiLCJjaGlsZEVsZW1lbnQiLCJ1cGRhdGVDb250ZXh0IiwiYWRkIiwiZ2V0UHJvcGVydGllcyIsImdldENvbnRleHQiLCJhc3NpZ25Db250ZXh0IiwidGhlbkRlbGV0ZSIsImFyZ3VtZW50c0xlbmd0aCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZpcnN0QXJndW1lbnQiLCJmaXJzdCIsIkJPT0xFQU4iLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJqc3hNaXhpbnMiLCJlbGVtZW50IiwiRlVOQ1RJT04iLCJjYWxsIiwiZ3VhcmFudGVlIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJwYXJlbnRDb250ZXh0IiwiYXNzaWduIiwiZXZlbnRUeXBlIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSIsIkRCTENMSUNLX0VWRU5UX1RZUEUiLCJoYW5kbGVyIiwib25FdmVudCIsImN1c3RvbUV2ZW50VHlwZSIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwicmVwbGFjZSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50IiwiQ0xBU1NfTkFNRSIsIkNMQVNTIiwiSFRNTF9GT1IiLCJGT1IiLCJPQkpFQ1QiLCJrZXkiLCJ0ZXN0IiwiaXNTVkdBdHRyaWJ1dGVOYW1lIiwiaXNIVE1MQXR0cmlidXRlTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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