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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiZmxhdHRlbiIsIlNUUklORyIsIkZVTkNUSU9OIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNTdWJjbGFzc09mIiwiQ2xhc3MiLCJmcm9tQ2xhc3MiLCJ0YWdOYW1lIiwiZnJvbVRhZ05hbWUiLCJlbGVtZW50RnVuY3Rpb24iLCJSZWFjdCIsImFyZ3VtZW50Iiwic3ViY2xhc3NPZiIsIm5hbWUiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFXLENBQVgsUUFBVztBQUVQLEdBQW1CLENBQW5CLE1BQW1CO0FBQ1YsR0FBYSxDQUFiLFVBQWE7QUFDdUIsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7OztTQUVsRixhQUFhLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBeUIsQ0FBQztJQUF4QixHQUFHLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEIsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7UUFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7SUFBRCxDQUFDO0lBQ3JFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUVsQixFQUFFLEVBQUUsYUFBYSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLEdBQUssQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUMsa0JBQWtCO1FBRTVFLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUIsYUFBYSxFQUFiLGFBQWE7UUFDZixDQUFDLEVBQUUsVUFBVTtRQUViLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNWLEVBQUcsQUFBSCxDQUFHO1FBQ0wsQ0FBQyxNQUFNLEVBQUUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQWxCckIsUUFBVyxXQWtCc0IsQ0FBQztZQUNoRCxHQUFLLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFakMsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVU7UUFDN0MsQ0FBQyxNQUFNLEVBQUUsVUFBUyxhQUFhLGlDQUFwQixPQUFvQixDQUFiLGFBQWEsT0FuQkYsVUFBYSxTQW1CRSxDQUFDO1lBQzNDLEdBQUssQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztZQUVsQyxPQUFPLEdBekJPLFFBQVcsU0F5QlAsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVO1FBQ25ELENBQUMsTUFBTSxFQUFFLFVBQVMsYUFBYSxpQ0FBcEIsT0FBb0IsQ0FBYixhQUFhLE9BdkJGLFVBQWEsV0F1QkksQ0FBQztZQUM3QyxHQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFFM0MsT0FBTyxHQUFHLGVBQWUsQ0FBQyxVQUFVO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87QUFDaEIsQ0FBQztBQUVELEdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNiLGFBQWEsRUFBYixhQUFhO0FBQ2YsQ0FBQztlQUVjLEtBQUs7O1NBRVgsbUNBQW1DLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNoRSxrQkFBa0IsT0F6Q0ksTUFBbUIsVUF5Q1osa0JBQWtCLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXJELEdBQUcsQ0FBQyxhQUFhLEdBQUcsa0JBQWtCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNDLGFBQWEsT0EzQ3NELFNBQXNCLHVCQTJDcEQsYUFBYTtJQUVsRCxhQUFhLE9BN0NzRCxTQUFzQixpQ0E2QzFDLGFBQWE7SUFFNUQsTUFBTSxDQUFDLGFBQWE7QUFDdEIsQ0FBQztTQUVRLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdEMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLO0lBRXRCLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxVQUFVLEdBQUcsSUFBSTtJQUNuQixDQUFDLE1BQU0sQ0FBQztRQUNOLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFL0MsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ2IsVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVO0FBQ25CLENBQUMifQ==