"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _array = require("./utilities/array");
var _elements = require("./utilities/elements");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var element = null;
    if (firstArgument !== undefined) {
        var childElements = childElementsFromRemainingArguments(remainingArguments);
        properties = Object.assign({
            childElements: childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
            var Class = firstArgument; ///
            element = Class.fromClass(Class, properties);
        } else if (typeof firstArgument === "string") {
            var tagName = firstArgument; ///
            element = _element.default.fromTagName(tagName, properties);
        } else if (typeof firstArgument === "function") {
            var elementFunction = firstArgument; ///
            element = elementFunction(properties);
        }
    }
    return element;
}
var React = {
    createElement: createElement
};
var _default = React;
exports.default = _default;
function childElementsFromRemainingArguments(remainingArguments) {
    remainingArguments = _array.flatten(remainingArguments); ///
    var childElements = remainingArguments; ///
    childElements = _elements.removeFalseyElements(childElements);
    childElements = _elements.replaceStringsWithTextElements(childElements);
    return childElements;
}
function isSubclassOf(argument, Class) {
    var typeOf = false;
    if (argument.name === Class.name) {
        typeOf = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument) {
            typeOf = isSubclassOf(argument, Class);
        }
    }
    return typeOf;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBsZXQgY2hpbGRFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50czsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFFBQUE7SUFFQSxNQUFBO0lBQ0EsU0FBQTs7Ozs7O1NBRUEsYUFBQSxDQUFBLGFBQUEsRUFBQSxVQUFBO1lBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsa0JBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsMEJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztRQUNBLE9BQUEsR0FBQSxJQUFBO1FBRUEsYUFBQSxLQUFBLFNBQUE7WUFDQSxhQUFBLEdBQUEsbUNBQUEsQ0FBQSxrQkFBQTtBQUVBLGtCQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUE7QUFDQSx5QkFBQSxFQUFBLGFBQUE7V0FDQSxVQUFBO1lBRUEsS0FBQTttQkFFQSxZQUFBLENBQUEsYUFBQSxFQWpCQSxRQUFBO2dCQWtCQSxLQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsbUJBQUEsR0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBLEtBQUEsRUFBQSxVQUFBOzBCQUNBLGFBQUEsTUFBQSxNQUFBO2dCQUNBLE9BQUEsR0FBQSxhQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxtQkFBQSxHQXhCQSxRQUFBLFNBd0JBLFdBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQTswQkFDQSxhQUFBLE1BQUEsUUFBQTtnQkFDQSxlQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsbUJBQUEsR0FBQSxlQUFBLENBQUEsVUFBQTs7O1dBSUEsT0FBQTs7SUFHQSxLQUFBO0FBQ0EsaUJBQUEsRUFBQSxhQUFBOztlQUdBLEtBQUE7O1NBRUEsbUNBQUEsQ0FBQSxrQkFBQTtBQUNBLHNCQUFBLEdBeENBLE1BQUEsU0F3Q0Esa0JBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTtRQUVBLGFBQUEsR0FBQSxrQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsaUJBQUEsR0EzQ0EsU0FBQSxzQkEyQ0EsYUFBQTtBQUVBLGlCQUFBLEdBN0NBLFNBQUEsZ0NBNkNBLGFBQUE7V0FFQSxhQUFBOztTQUdBLFlBQUEsQ0FBQSxRQUFBLEVBQUEsS0FBQTtRQUNBLE1BQUEsR0FBQSxLQUFBO1FBRUEsUUFBQSxDQUFBLElBQUEsS0FBQSxLQUFBLENBQUEsSUFBQTtBQUNBLGNBQUEsR0FBQSxJQUFBOztBQUVBLGdCQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUE7WUFFQSxRQUFBO0FBQ0Esa0JBQUEsR0FBQSxZQUFBLENBQUEsUUFBQSxFQUFBLEtBQUE7OztXQUlBLE1BQUEifQ==