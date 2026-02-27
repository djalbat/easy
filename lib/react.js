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
const _element = /*#__PURE__*/ _interop_require_default(require("./element"));
const _array = require("./utilities/array");
const _constants = require("./constants");
const _elements = require("./utilities/elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties, ...childElements) {
    let element = null;
    if (firstArgument) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
            childElements
        }, properties);
        if (false) {
        ///
        } else if (isSubclassOf(firstArgument, _element.default)) {
            const Class = firstArgument; ///
            element = Class.fromClass(Class, properties);
        } else if (typeof firstArgument === _constants.STRING) {
            const tagName = firstArgument; ///
            element = _element.default.fromTagName(tagName, properties);
        } else if (typeof firstArgument === _constants.FUNCTION) {
            const elementFunction = firstArgument; ///
            element = elementFunction(properties);
        }
    }
    return element;
}
const React = {
    createElement
};
const _default = React;
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements); ///
    childElements = (0, _elements.removeFalseyElements)(childElements); ///
    childElements = (0, _elements.replaceStringsWithTextElements)(childElements); ///
    return childElements;
}
function isSubclassOf(argument, Class) {
    const subclassOf = argument.prototype instanceof Class;
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInNhbml0aXNlQ2hpbGRFbGVtZW50cyIsIk9iamVjdCIsImFzc2lnbiIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsImZyb21DbGFzcyIsIlNUUklORyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsIkZVTkNUSU9OIiwiZWxlbWVudEZ1bmN0aW9uIiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJhcmd1bWVudCIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7OztnRUF4Q29CO3VCQUVJOzJCQUNTOzBCQUNvQzs7Ozs7O0FBRXJFLFNBQVNBLGNBQWNDLGFBQWEsRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGFBQWE7SUFDaEUsSUFBSUMsVUFBVTtJQUVkLElBQUlILGVBQWU7UUFDakJFLGdCQUFnQkUsc0JBQXNCRjtRQUV0Q0QsYUFBYUksT0FBT0MsTUFBTSxDQUFDO1lBQ3pCSjtRQUNGLEdBQUdEO1FBRUgsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSU0sYUFBYVAsZUFBZVEsZ0JBQU8sR0FBRztZQUMvQyxNQUFNQyxRQUFRVCxlQUFnQixHQUFHO1lBRWpDRyxVQUFVTSxNQUFNQyxTQUFTLENBQUNELE9BQU9SO1FBQ25DLE9BQU8sSUFBSSxPQUFPRCxrQkFBa0JXLGlCQUFNLEVBQUU7WUFDMUMsTUFBTUMsVUFBVVosZUFBZSxHQUFHO1lBRWxDRyxVQUFVSyxnQkFBTyxDQUFDSyxXQUFXLENBQUNELFNBQVNYO1FBQ3pDLE9BQU8sSUFBSSxPQUFPRCxrQkFBa0JjLG1CQUFRLEVBQUU7WUFDNUMsTUFBTUMsa0JBQWtCZixlQUFnQixHQUFHO1lBRTNDRyxVQUFVWSxnQkFBZ0JkO1FBQzVCO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRUEsTUFBTWEsUUFBUTtJQUNaakI7QUFDRjtNQUVBLFdBQWVpQjtBQUVmLFNBQVNaLHNCQUFzQkYsYUFBYTtJQUMxQ0EsZ0JBQWdCZSxJQUFBQSxjQUFPLEVBQUNmLGdCQUFnQixHQUFHO0lBRTNDQSxnQkFBZ0JnQixJQUFBQSw4QkFBb0IsRUFBQ2hCLGdCQUFpQixHQUFHO0lBRXpEQSxnQkFBZ0JpQixJQUFBQSx3Q0FBOEIsRUFBQ2pCLGdCQUFpQixHQUFHO0lBRW5FLE9BQU9BO0FBQ1Q7QUFHQSxTQUFTSyxhQUFhYSxRQUFRLEVBQUVYLEtBQUs7SUFDbkMsTUFBTVksYUFBY0QsU0FBU0UsU0FBUyxZQUFZYjtJQUVsRCxPQUFPWTtBQUNUIn0=