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
        } else if (_element.default.isPrototypeOf(firstArgument)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKEVsZW1lbnQuaXNQcm90b3R5cGVPZihmaXJzdEFyZ3VtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJFbGVtZW50IiwiaXNQcm90b3R5cGVPZiIsIkNsYXNzIiwiZnJvbUNsYXNzIiwiU1RSSU5HIiwidGFnTmFtZSIsImZyb21UYWdOYW1lIiwiRlVOQ1RJT04iLCJlbGVtZW50RnVuY3Rpb24iLCJSZWFjdCIsImZsYXR0ZW4iLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMENBOzs7ZUFBQTs7O2dFQXhDb0I7dUJBRUk7MkJBQ1M7MEJBQ29DOzs7Ozs7QUFFckUsU0FBU0EsY0FBY0MsYUFBYSxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsYUFBYTtJQUNoRSxJQUFJQyxVQUFVO0lBRWQsSUFBSUgsZUFBZTtRQUNqQkUsZ0JBQWdCRSxzQkFBc0JGO1FBRXRDRCxhQUFhSSxPQUFPQyxNQUFNLENBQUM7WUFDekJKO1FBQ0YsR0FBR0Q7UUFFSCxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJTSxnQkFBTyxDQUFDQyxhQUFhLENBQUNSLGdCQUFnQjtZQUMvQyxNQUFNUyxRQUFRVCxlQUFnQixHQUFHO1lBRWpDRyxVQUFVTSxNQUFNQyxTQUFTLENBQUNELE9BQU9SO1FBQ25DLE9BQU8sSUFBSSxPQUFPRCxrQkFBa0JXLGlCQUFNLEVBQUU7WUFDMUMsTUFBTUMsVUFBVVosZUFBZSxHQUFHO1lBRWxDRyxVQUFVSSxnQkFBTyxDQUFDTSxXQUFXLENBQUNELFNBQVNYO1FBQ3pDLE9BQU8sSUFBSSxPQUFPRCxrQkFBa0JjLG1CQUFRLEVBQUU7WUFDNUMsTUFBTUMsa0JBQWtCZixlQUFnQixHQUFHO1lBRTNDRyxVQUFVWSxnQkFBZ0JkO1FBQzVCO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRUEsTUFBTWEsUUFBUTtJQUNaakI7QUFDRjtNQUVBLFdBQWVpQjtBQUVmLFNBQVNaLHNCQUFzQkYsYUFBYTtJQUMxQ0EsZ0JBQWdCZSxJQUFBQSxjQUFPLEVBQUNmLGdCQUFnQixHQUFHO0lBRTNDQSxnQkFBZ0JnQixJQUFBQSw4QkFBb0IsRUFBQ2hCLGdCQUFpQixHQUFHO0lBRXpEQSxnQkFBZ0JpQixJQUFBQSx3Q0FBOEIsRUFBQ2pCLGdCQUFpQixHQUFHO0lBRW5FLE9BQU9BO0FBQ1QifQ==