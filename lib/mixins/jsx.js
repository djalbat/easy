"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _object = require("../utilities/object");
var _array = require("../utilities/array");
var _constants = require("../constants");
var _name = require("../utilities/name");
var _elements = require("../utilities/elements");
function applyProperties(properties, defaultProperties, ignoredProperties) {
    this.properties = properties;
    properties = Object.assign({
    }, properties); ///
    _object.combine(properties, defaultProperties);
    var childElements = childElementsFromElement(this) || properties.childElements; ///
    _object.prune(properties, ignoredProperties);
    var _domElement = this.domElement, namespaceURI = _domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, names = Object.keys(properties); ///
    names.forEach((function(name) {
        var value = properties[name];
        if (false) {
        } else if (isHandlerName(name)) {
            addHandler(this, name, value);
        } else if (isAttributeName(name, svg)) {
            addAttribute(this, name, value);
        } else {
        }
    }).bind(this));
    var context = {
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
        var firstArgument = _array.first(arguments);
        if (typeof firstArgument === "boolean") {
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
    if (typeof element.childElements === "function") {
        childElements = element.childElements.call(element);
        childElements = _array.guarantee(childElements);
        childElements = _elements.removeFalseyElements(childElements);
        childElements = _elements.replaceStringsWithTextElements(childElements);
    }
    return childElements;
}
function updateContext(childElement, context) {
    var parentContext = typeof childElement.parentContext === "function" ? childElement.parentContext() : childElement.context; ///
    Object.assign(context, parentContext);
}
function addHandler(element, name, value) {
    var eventType = name.substr(2).toLowerCase(), handler = value; ///
    element.on(eventType, handler);
}
function addAttribute(element, name, value) {
    if (name === "className") {
        name = "class";
    }
    if (name === "htmlFor") {
        name = "for";
    }
    if (typeof value === "object") {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            element.domElement[name][key] = value[key];
        });
    } else if (typeof value === "boolean") {
        if (value) {
            value = name; ///
            element.addAttribute(name, value);
        }
    } else {
        element.addAttribute(name, value);
    }
}
function isHandlerName(name) {
    return name.match(/^on/);
}
function isAttributeName(name, svg) {
    return svg ? _name.isSVGAttributeName(name) : _name.isHTMLAttributeName(name);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvanN4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lLCBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcyk7IC8vL1xuXG4gIGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgcHJ1bmUocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IHsgbmFtZXNwYWNlVVJJIH0gPSB0aGlzLmRvbUVsZW1lbnQsXG4gICAgICAgIHN2ZyA9IChuYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2ZykpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG5cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgbmFtZSA9IFwiY2xhc3NcIjtcbiAgfVxuXG4gIGlmIChuYW1lID09PSBcImh0bWxGb3JcIikge1xuICAgIG5hbWUgPSBcImZvclwiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgcmV0dXJuIHN2ZyA/IGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6IGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSlcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLEtBQUE7SUFDQSxTQUFBO1NBRUEsZUFBQSxDQUFBLFVBQUEsRUFBQSxpQkFBQSxFQUFBLGlCQUFBO1NBQ0EsVUFBQSxHQUFBLFVBQUE7QUFFQSxjQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUE7T0FBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7QUFUQSxXQUFBLFNBV0EsVUFBQSxFQUFBLGlCQUFBO1FBRUEsYUFBQSxHQUFBLHdCQUFBLFVBQUEsVUFBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQWJBLFdBQUEsT0FlQSxVQUFBLEVBQUEsaUJBQUE7UUFFQSxXQUFBLFFBQUEsVUFBQSxFQUFBLFlBQUEsR0FBQSxXQUFBLENBQUEsWUFBQSxFQUNBLEdBQUEsR0FBQSxZQUFBLEtBaEJBLFVBQUEsb0JBaUJBLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTtBQUVB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