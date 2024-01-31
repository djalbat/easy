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
var _string = require("../utilities/string");
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
    var customEventType = (0, _string.camelCaseToSnakeCase)(name).replace(/on-custom-/, "") + _constants.CUSTOM_EVENT_TYPE_SUFFIX, customHandler = value; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJLCBDVVNUT01fRVZFTlRfVFlQRV9TVUZGSVggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge2NhbWVsQ2FzZVRvU25ha2VDYXNlfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpLFxuICAgICAgICAgIG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lQ3VzdG9tSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEN1c3RvbUhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgaWYgKG5hbWVBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBCT09MRUFOKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gY2FtZWxDYXNlVG9TbmFrZUNhc2UobmFtZSkucmVwbGFjZSgvb24tY3VzdG9tLS8sIFwiXCIpICsgQ1VTVE9NX0VWRU5UX1RZUEVfU1VGRklYLCAvLy9cbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJhcHBseVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImNvbWJpbmUiLCJwcnVuZSIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJTVkdfTkFNRVNQQUNFX1VSSSIsInByb3BlcnRpZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm5hbWVIYW5kbGVyTmFtZSIsImlzTmFtZUhhbmRsZXJOYW1lIiwibmFtZUN1c3RvbUhhbmRsZXJOYW1lIiwiaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUiLCJhZGRIYW5kbGVyIiwiYWRkQ3VzdG9tSGFuZGxlciIsIm5hbWVBdHRyaWJ1dGVOYW1lIiwiaXNOYW1lQXR0cmlidXRlTmFtZSIsImFkZEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJCT09MRUFOIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwianN4TWl4aW5zIiwiZWxlbWVudCIsIkZVTkNUSU9OIiwiY2FsbCIsImd1YXJhbnRlZSIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsImV2ZW50VHlwZSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJjdXN0b21FdmVudFR5cGUiLCJjYW1lbENhc2VUb1NuYWtlQ2FzZSIsInJlcGxhY2UiLCJDVVNUT01fRVZFTlRfVFlQRV9TVUZGSVgiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIkNMQVNTX05BTUUiLCJDTEFTUyIsIkhUTUxfRk9SIiwiRk9SIiwiT0JKRUNUIiwia2V5IiwidGVzdCIsImlzU1ZHQXR0cmlidXRlTmFtZSIsImlzSFRNTEF0dHJpYnV0ZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNHQTs7O2VBQUE7OztzQkFwRytCO3FCQUNFO29CQUN1Qjt3QkFDYTt5QkFDb0Q7c0JBQ3RGOzs7OztBQUVuQyxTQUFTQSxnQkFBZ0JDLFVBQVUsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjs7SUFDdkUsSUFBSSxDQUFDRixVQUFVLEdBQUdHLElBQUFBLGVBQU8sRUFBQ0gsWUFBWUM7SUFFdENELGFBQWFJLElBQUFBLGFBQUssRUFBQyxJQUFJLENBQUNKLFVBQVUsRUFBRUUsb0JBQW9CLEdBQUc7SUFFM0QsSUFB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