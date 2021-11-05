"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _array = require("./utilities/array");
var _constants = require("./constants");
var _elements = require("./utilities/elements");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
        ///
        } else if (isSubclassOf(firstArgument, _element.default)) {
            var Class = firstArgument; ///
            element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
            var tagName = firstArgument; ///
            element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
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
    remainingArguments = (0, _array).flatten(remainingArguments); ///
    var childElements = remainingArguments; ///
    childElements = (0, _elements).removeFalseyElements(childElements);
    childElements = (0, _elements).replaceStringsWithTextElements(childElements);
    return childElements;
}
function isSubclassOf(argument, Class) {
    var subclassOf = false;
    if (argument.name === Class.name) {
        subclassOf = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument) {
            subclassOf = isSubclassOf(argument, Class);
        }
    }
    return subclassOf;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiZmxhdHRlbiIsIlNUUklORyIsIkZVTkNUSU9OIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNTdWJjbGFzc09mIiwiQ2xhc3MiLCJmcm9tQ2xhc3MiLCJ0YWdOYW1lIiwiZnJvbVRhZ05hbWUiLCJlbGVtZW50RnVuY3Rpb24iLCJSZWFjdCIsImFyZ3VtZW50Iiwic3ViY2xhc3NPZiIsIm5hbWUiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFXLENBQVgsUUFBVztBQUVQLEdBQW1CLENBQW5CLE1BQW1CO0FBQ1YsR0FBYSxDQUFiLFVBQWE7QUFDdUIsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7OztTQUVsRixhQUFhLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBeUIsQ0FBQztJQUF4QixHQUFHLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7UUFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7SUFBRCxDQUFDO0lBQ3JFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUVsQixFQUFFLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLEdBQUssQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUMsa0JBQWtCO1FBRTVFLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsYUFBYSxFQUFiLGFBQWE7UUFDZixDQUFDLEVBQUUsVUFBVTtRQUViLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNWLEVBQUcsQUFBSCxDQUFHO1FBQ0wsQ0FBQyxNQUFNLEVBQUUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQWxCckIsUUFBVyxXQWtCc0IsQ0FBQztZQUNoRCxHQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFakMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7UUFDN0MsQ0FBQyxNQUFNLEVBQUUsVUFBUyxhQUFhLGlDQUFwQixPQUFvQixDQUFiLGFBQWEsT0FuQkYsVUFBYSxTQW1CRSxDQUFDO1lBQzNDLEdBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztZQUVsQyxPQUFPLEdBekJPLFFBQVcsU0F5QlAsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVO1FBQ25ELENBQUMsTUFBTSxFQUFFLFVBQVMsYUFBYSxpQ0FBcEIsT0FBb0IsQ0FBYixhQUFhLE9BdkJGLFVBQWEsV0F1QkksQ0FBQztZQUM3QyxHQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFM0MsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87QUFDaEIsQ0FBQztBQUVELEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNiLGFBQWEsRUFBYixhQUFhO0FBQ2YsQ0FBQztlQUVjLEtBQUs7O1NBRVgsbUNBQW1DLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNoRSxrQkFBa0IsT0F6Q0ksTUFBbUIsVUF5Q1osa0JBQWtCLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXJELEdBQUcsQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNDLGFBQWEsT0EzQ3NELFNBQXNCLHVCQTJDcEQsYUFBYTtJQUVsRCxhQUFhLE9BN0NzRCxTQUFzQixpQ0E2QzFDLGFBQWE7SUFFNUQsTUFBTSxDQUFDLGFBQWE7QUFDdEIsQ0FBQztTQUVRLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdEMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLO0lBRXRCLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxVQUFVLEdBQUcsSUFBSTtJQUNuQixDQUFDLE1BQU0sQ0FBQztRQUNOLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFL0MsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ2IsVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZsYXR0ZW4ocmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG5cbiAgbGV0IGNoaWxkRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzc09mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3NPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgc3ViY2xhc3NPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl19