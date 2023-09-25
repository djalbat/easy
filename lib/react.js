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
var _element = /*#__PURE__*/ _interop_require_default(require("./element"));
var _array = require("./utilities/array");
var _constants = require("./constants");
var _elements = require("./utilities/elements");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    var element = null;
    if (firstArgument) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
            childElements: childElements
        }, properties);
        if (false) {
        ///
        } else if (isSubclassOf(firstArgument, _element.default)) {
            var Class = firstArgument; ///
            element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.STRING) {
            var tagName = firstArgument; ///
            element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
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
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
    return childElements;
}
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJmcm9tQ2xhc3MiLCJTVFJJTkciLCJ0YWdOYW1lIiwiZnJvbVRhZ05hbWUiLCJGVU5DVElPTiIsImVsZW1lbnRGdW5jdGlvbiIsIlJlYWN0IiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUVsZW1lbnRzIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQ0E7OztlQUFBOzs7OERBeENvQjtxQkFFSTt5QkFDUzt3QkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJFLFNBQVNBLGNBQWNDLGFBQWEsRUFBRUMsVUFBVTtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxnQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLGNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFnQjtJQUFEO0lBQy9ELElBQUlDLFVBQVU7SUFFZCxJQUFJSCxlQUFlO1FBQ2pCRSxnQkFBZ0JFLHNCQUFzQkY7UUFFdENELGFBQWFJLE9BQU9DLE1BQU0sQ0FBQztZQUN6QkosZUFBQUE7UUFDRixHQUFHRDtRQUVILElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlNLGFBQWFQLGVBQWVRLGdCQUFPLEdBQUc7WUFDL0MsSUFBTUMsUUFBUVQsZUFBZ0IsR0FBRztZQUVqQ0csVUFBVU0sTUFBTUMsU0FBUyxDQUFDRCxPQUFPUjtRQUNuQyxPQUFPLElBQUksQ0FBQSxPQUFPRCw4Q0FBUCxTQUFPQSxjQUFZLE1BQU1XLGlCQUFNLEVBQUU7WUFDMUMsSUFBTUMsVUFBVVosZUFBZSxHQUFHO1lBRWxDRyxVQUFVSyxnQkFBTyxDQUFDSyxXQUFXLENBQUNELFNBQVNYO1FBQ3pDLE9BQU8sSUFBSSxDQUFBLE9BQU9ELDhDQUFQLFNBQU9BLGNBQVksTUFBTWMsbUJBQVEsRUFBRTtZQUM1QyxJQUFNQyxrQkFBa0JmLGVBQWdCLEdBQUc7WUFFM0NHLFVBQVVZLGdCQUFnQmQ7UUFDNUI7SUFDRjtJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxJQUFNYSxRQUFRO0lBQ1pqQixlQUFBQTtBQUNGO0lBRUEsV0FBZWlCO0FBRWYsU0FBU1osc0JBQXNCRixhQUFhO0lBQzFDQSxnQkFBZ0JlLElBQUFBLGNBQU8sRUFBQ2Y7SUFFeEJBLGdCQUFnQmdCLElBQUFBLDhCQUFvQixFQUFDaEI7SUFFckNBLGdCQUFnQmlCLElBQUFBLHdDQUE4QixFQUFDakI7SUFFL0MsT0FBT0E7QUFDVDtBQUdBLFNBQVNLLGFBQWFhLFFBQVEsRUFBRVgsS0FBSztJQUNuQyxJQUFNWSxhQUFjRCxBQUFrQixZQUFsQkEsU0FBU0UsU0FBUyxFQUFZYjtJQUVsRCxPQUFPWTtBQUNUIn0=