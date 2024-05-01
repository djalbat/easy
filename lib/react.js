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
    childElements = (0, _array.flatten)(childElements); ///
    childElements = (0, _elements.removeFalseyElements)(childElements); ///
    childElements = (0, _elements.replaceStringsWithTextElements)(childElements); ///
    return childElements;
}
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsImZyb21DbGFzcyIsIlNUUklORyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsIkZVTkNUSU9OIiwiZWxlbWVudEZ1bmN0aW9uIiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJhcmd1bWVudCIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7Ozs4REF4Q29CO3FCQUVJO3lCQUNTO3dCQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsU0FBU0EsY0FBY0MsYUFBYSxFQUFFQyxVQUFVO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLGdCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLGNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFnQjs7SUFDaEUsSUFBSUMsVUFBVTtJQUVkLElBQUlILGVBQWU7UUFDakJFLGdCQUFnQkUsc0JBQXNCRjtRQUV0Q0QsYUFBYUksT0FBT0MsTUFBTSxDQUFDO1lBQ3pCSixlQUFBQTtRQUNGLEdBQUdEO1FBRUgsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSU0sYUFBYVAsZUFBZVEsZ0JBQU8sR0FBRztZQUMvQyxJQUFNQyxRQUFRVCxlQUFnQixHQUFHO1lBRWpDRyxVQUFVTSxNQUFNQyxTQUFTLENBQUNELE9BQU9SO1FBQ25DLE9BQU8sSUFBSSxDQUFBLE9BQU9ELDhDQUFQLFNBQU9BLGNBQVksTUFBTVcsaUJBQU0sRUFBRTtZQUMxQyxJQUFNQyxVQUFVWixlQUFlLEdBQUc7WUFFbENHLFVBQVVLLGdCQUFPLENBQUNLLFdBQVcsQ0FBQ0QsU0FBU1g7UUFDekMsT0FBTyxJQUFJLENBQUEsT0FBT0QsOENBQVAsU0FBT0EsY0FBWSxNQUFNYyxtQkFBUSxFQUFFO1lBQzVDLElBQU1DLGtCQUFrQmYsZUFBZ0IsR0FBRztZQUUzQ0csVUFBVVksZ0JBQWdCZDtRQUM1QjtJQUNGO0lBRUEsT0FBT0U7QUFDVDtBQUVBLElBQU1hLFFBQVE7SUFDWmpCLGVBQUFBO0FBQ0Y7SUFFQSxXQUFlaUI7QUFFZixTQUFTWixzQkFBc0JGLGFBQWE7SUFDMUNBLGdCQUFnQmUsSUFBQUEsY0FBTyxFQUFDZixnQkFBZ0IsR0FBRztJQUUzQ0EsZ0JBQWdCZ0IsSUFBQUEsOEJBQW9CLEVBQUNoQixnQkFBaUIsR0FBRztJQUV6REEsZ0JBQWdCaUIsSUFBQUEsd0NBQThCLEVBQUNqQixnQkFBaUIsR0FBRztJQUVuRSxPQUFPQTtBQUNUO0FBR0EsU0FBU0ssYUFBYWEsUUFBUSxFQUFFWCxLQUFLO0lBQ25DLElBQU1ZLGFBQWNELEFBQWtCLFlBQWxCQSxTQUFTRSxTQUFTLEVBQVliO0lBRWxELE9BQU9ZO0FBQ1QifQ==