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
    element.on(eventType, handler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIC9eb24vLnRlc3QobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSB7XG4gIHJldHVybiBzdmcgPyBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpXG59XG4iXSwibmFtZXMiOlsiYXBwbHlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiaWdub3JlZFByb3BlcnRpZXMiLCJjb21iaW5lIiwicHJ1bmUiLCJuYW1lc3BhY2VVUkkiLCJkb21FbGVtZW50Iiwic3ZnIiwiU1ZHX05BTUVTUEFDRV9VUkkiLCJwcm9wZXJ0aWVzS2V5cyIsIk9iamVjdCIsImtleXMiLCJuYW1lcyIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiLCJuYW1lSGFuZGxlck5hbWUiLCJpc05hbWVIYW5kbGVyTmFtZSIsImFkZEhhbmRsZXIiLCJuYW1lQXR0cmlidXRlTmFtZSIsImlzTmFtZUF0dHJpYnV0ZU5hbWUiLCJhZGRBdHRyaWJ1dGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50IiwiY29udGV4dCIsImNoaWxkRWxlbWVudCIsInVwZGF0ZUNvbnRleHQiLCJhZGQiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0Q29udGV4dCIsImFzc2lnbkNvbnRleHQiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiQk9PTEVBTiIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImpzeE1peGlucyIsImVsZW1lbnQiLCJGVU5DVElPTiIsImNhbGwiLCJndWFyYW50ZWUiLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJhc3NpZ24iLCJldmVudFR5cGUiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZXIiLCJvbiIsIkNMQVNTX05BTUUiLCJDTEFTUyIsIkhUTUxfRk9SIiwiRk9SIiwiT0JKRUNUIiwia2V5IiwidGVzdCIsImlzU1ZHQXR0cmlidXRlTmFtZSIsImlzSFRNTEF0dHJpYnV0ZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdHQTs7O2VBQUE7OztzQkE5RitCO3FCQUNFO29CQUN1Qjt3QkFDYTt5QkFDMEI7Ozs7O0FBRS9GLFNBQVNBLGdCQUFnQkMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCOztJQUN2RSxJQUFJLENBQUNGLFVBQVUsR0FBR0csSUFBQUEsZUFBTyxFQUFDSCxZQUFZQztJQUV0Q0QsYUFBYUksSUFBQUEsYUFBSyxFQUFDLElBQUksQ0FBQ0osVUFBVSxFQUFFRSxvQkFBb0IsR0FBRztJQUUzRCxJQUFNLEFBQUVHLGVBQWlCLElBQUksQ0FBQ0MsVUFBVSxDQUFoQ0QsY0FDRkUsTUFBT0YsaUJBQWlCRyw0QkFBaUIsRUFDekNDLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDWCxhQUM3QlksUUFBUUgsZ0JBQWlCLElBQUk7SUFFbkNHLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztRQUNiLElB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