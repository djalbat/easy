"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _name = require("../utilities/name");
var _elements = require("../utilities/elements");
var _constants = require("../constants");
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function applyProperties(properties, defaultProperties, ignoredProperties) {
    this.properties = Object.assign({
    }, properties, defaultProperties); ///
    var _domElement = this.domElement, namespaceURI = _domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(this.properties), ignoredNames = ignoredProperties, names = propertiesKeys; ///
    names.forEach((function(name) {
        var ignoredNamesIncludesName = ignoredNames.includes(name);
        if (!ignoredNamesIncludesName) {
            var value = this.properties[name], nameHandlerName = isNameHandlerName(name);
            if (nameHandlerName) {
                addHandler(this, name, value);
            } else {
                var nameAttributeName = isNameAttributeName(name, svg);
                if (nameAttributeName) {
                    addAttribute(this, name, value);
                }
            }
        }
    }).bind(this));
    var childElements = childElementsFromElement(this) || this.properties.childElements, context = {
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
        if (_typeof(firstArgument) === _constants.BOOLEAN) {
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
    if (_typeof(value) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            element.domElement[name][key] = value[key];
        });
    } else if (_typeof(value) === _constants.BOOLEAN) {
        if (value) {
            value = name; ///
            element.addAttribute(name, value);
        }
    } else {
        element.addAttribute(name, value);
    }
}
function isNameHandlerName(name) {
    return name.match(/^on/);
}
function isNameAttributeName(name, svg) {
    return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnRpZXMpLFxuICAgICAgICBpZ25vcmVkTmFtZXMgPSBpZ25vcmVkUHJvcGVydGllcywgLy8vXG4gICAgICAgIG5hbWVzID0gcHJvcGVydGllc0tleXM7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgaWdub3JlZE5hbWVzSW5jbHVkZXNOYW1lID0gaWdub3JlZE5hbWVzLmluY2x1ZGVzKG5hbWUpO1xuXG4gICAgaWYgKCFpZ25vcmVkTmFtZXNJbmNsdWRlc05hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChuYW1lSGFuZGxlck5hbWUpIHtcbiAgICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHRoaXMucHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICByZXR1cm4gc3ZnID8gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpIDogaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRXFCLE1BQW9CO0lBQ0csS0FBbUI7SUFDTixTQUF1QjtJQUNHLFVBQWM7Ozs7U0FFcEcsZUFBZSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUI7U0FDbEUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNO09BQUssVUFBVSxFQUFFLGlCQUFpQixFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUU5QyxXQUFlLFFBQVYsVUFBVSxFQUFoQyxZQUFZLEdBQUssV0FBZSxDQUFoQyxZQUFZLEVBQ2QsR0FBRyxHQUFJLFlBQVksS0FOb0UsVUFBYyxv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