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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZsYXR0ZW4ocmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG5cbiAgbGV0IGNoaWxkRWxlbWVudHMgPSByZW1haW5pbmdBcmd1bWVudHM7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzc09mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3NPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgc3ViY2xhc3NPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50c0Zyb21SZW1haW5pbmdBcmd1bWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJpc1N1YmNsYXNzT2YiLCJDbGFzcyIsImZyb21DbGFzcyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsImVsZW1lbnRGdW5jdGlvbiIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwibmFtZSIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVcsQ0FBWCxRQUFXO0FBRVAsR0FBbUIsQ0FBbkIsTUFBbUI7QUFDVixHQUFhLENBQWIsVUFBYTtBQUN1QixHQUFzQixDQUF0QixTQUFzQjs7Ozs7Ozs7O1NBRWxGQSxhQUFhLENBQUNDLGFBQWEsRUFBRUMsVUFBVSxFQUF5QixDQUFDO0lBQXhCLEdBQUdDLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEJBLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO1FBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtJQUFELENBQUM7SUFDckUsR0FBRyxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUVsQixFQUFFLEVBQUVILGFBQWEsS0FBS0ksU0FBUyxFQUFFLENBQUM7UUFDaEMsR0FB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