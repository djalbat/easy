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
    if (firstArgument !== undefined) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsImZyb21DbGFzcyIsIlNUUklORyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsIkZVTkNUSU9OIiwiZWxlbWVudEZ1bmN0aW9uIiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJhcmd1bWVudCIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7Ozs4REF4Q29CO3FCQUVJO3lCQUNTO3dCQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsU0FBU0EsY0FBY0MsYUFBYSxFQUFFQyxVQUFVO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLGdCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7UUFBR0EsY0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQWdCO0lBQUQ7SUFDL0QsSUFBSUMsVUFBVTtJQUVkLElBQUlILGtCQUFrQkksV0FBVztRQUMvQkYsZ0JBQWdCRyxzQkFBc0JIO1FBRXRDRCxhQUFhSyxPQUFPQyxNQUFNLENBQUM7WUFDekJMLGVBQUFBO1FBQ0YsR0FBR0Q7UUFFSCxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJTyxhQUFhUixlQUFlUyxnQkFBTyxHQUFHO1lBQy9DLElBQU1DLFFBQVFWLGVBQWdCLEdBQUc7WUFFakNHLFVBQVVPLE1BQU1DLFNBQVMsQ0FBQ0QsT0FBT1Q7UUFDbkMsT0FBTyxJQUFJLENBQUEsT0FBT0QsOENBQVAsU0FBT0EsY0FBWSxNQUFNWSxpQkFBTSxFQUFFO1lBQzFDLElBQU1DLFVBQVViLGVBQWUsR0FBRztZQUVsQ0csVUFBVU0sZ0JBQU8sQ0FBQ0ssV0FBVyxDQUFDRCxTQUFTWjtRQUN6QyxPQUFPLElBQUksQ0FBQSxPQUFPRCw4Q0FBUCxTQUFPQSxjQUFZLE1BQU1lLG1CQUFRLEVBQUU7WUFDNUMsSUFBTUMsa0JBQWtCaEIsZUFBZ0IsR0FBRztZQUUzQ0csVUFBVWEsZ0JBQWdCZjtRQUM1QjtJQUNGO0lBRUEsT0FBT0U7QUFDVDtBQUVBLElBQU1jLFFBQVE7SUFDWmxCLGVBQUFBO0FBQ0Y7SUFFQSxXQUFla0I7QUFFZixTQUFTWixzQkFBc0JILGFBQWE7SUFDMUNBLGdCQUFnQmdCLElBQUFBLGNBQU8sRUFBQ2hCO0lBRXhCQSxnQkFBZ0JpQixJQUFBQSw4QkFBb0IsRUFBQ2pCO0lBRXJDQSxnQkFBZ0JrQixJQUFBQSx3Q0FBOEIsRUFBQ2xCO0lBRS9DLE9BQU9BO0FBQ1Q7QUFHQSxTQUFTTSxhQUFhYSxRQUFRLEVBQUVYLEtBQUs7SUFDbkMsSUFBTVksYUFBY0QsQUFBa0IsWUFBbEJBLFNBQVNFLFNBQVMsRUFBWWI7SUFFbEQsT0FBT1k7QUFDVCJ9