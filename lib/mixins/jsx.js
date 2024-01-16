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
        var value = properties[name], nameHandlerName = isNameHandlerName(name);
        if (nameHandlerName) {
            addHandler(_this, name, value);
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
    var eventType = name.substr(2).toLowerCase(), handler = value; ///
    element.onEvent(eventType, handler);
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
    return /^on/.test(name);
}
function isNameAttributeName(name, svg) {
    return svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gL15vbi8udGVzdChuYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgcmV0dXJuIHN2ZyA/IGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6IGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSlcbn1cbiJdLCJuYW1lcyI6WyJhcHBseVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJpZ25vcmVkUHJvcGVydGllcyIsImNvbWJpbmUiLCJwcnVuZSIsIm5hbWVzcGFjZVVSSSIsImRvbUVsZW1lbnQiLCJzdmciLCJTVkdfTkFNRVNQQUNFX1VSSSIsInByb3BlcnRpZXNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWVzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsIm5hbWVIYW5kbGVyTmFtZSIsImlzTmFtZUhhbmRsZXJOYW1lIiwiYWRkSGFuZGxlciIsIm5hbWVBdHRyaWJ1dGVOYW1lIiwiaXNOYW1lQXR0cmlidXRlTmFtZSIsImFkZEF0dHJpYnV0ZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50IiwidXBkYXRlQ29udGV4dCIsImFkZCIsImdldFByb3BlcnRpZXMiLCJnZXRDb250ZXh0IiwiYXNzaWduQ29udGV4dCIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJCT09MRUFOIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwianN4TWl4aW5zIiwiZWxlbWVudCIsIkZVTkNUSU9OIiwiY2FsbCIsImd1YXJhbnRlZSIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsImV2ZW50VHlwZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJDTEFTU19OQU1FIiwiQ0xBU1MiLCJIVE1MX0ZPUiIsIkZPUiIsIk9CSkVDVCIsImtleSIsInRlc3QiLCJpc1NWR0F0dHJpYnV0ZU5hbWUiLCJpc0hUTUxBdHRyaWJ1dGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR0E7OztlQUFBOzs7c0JBOUYrQjtxQkFDRTtvQkFDdUI7d0JBQ2E7eUJBQzBCOzs7OztBQUUvRixTQUFTQSxnQkFBZ0JDLFVBQVUsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjs7SUFDdkUsSUFBSSxDQUFDRixVQUFVLEdBQUdHLElBQUFBLGVBQU8sRUFBQ0gsWUFBWUM7SUFFdENELGFBQWFJLElBQUFBLGFBQUssRUFBQyxJQUFJLENBQUNKLFVBQVUsRUFBRUUsb0JBQW9CLEdBQUc7SUFFM0QsSUFBTSxBQUFFRyxlQUFpQixJQUFJLENBQUNDLFVBQVUsQ0FBaENELGNBQ0ZFLE1BQU9GLGlCQUFpQkcsNEJBQWlCLEVBQ3pDQyxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ1gsYUFDN0JZLFFBQVFILGdCQUFpQixJQUFJO0lBRW5DRyxNQUFNQyxPQUFPLENBQUMsU0FB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