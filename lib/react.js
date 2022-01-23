"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
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
function sanitiseChildElements(childElements) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzc09mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICBzdWJjbGFzc09mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJzYW5pdGlzZUNoaWxkRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJpc1N1YmNsYXNzT2YiLCJDbGFzcyIsImZyb21DbGFzcyIsInRhZ05hbWUiLCJmcm9tVGFnTmFtZSIsImVsZW1lbnRGdW5jdGlvbiIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwibmFtZSIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVcsQ0FBWCxRQUFXO0FBRUUsR0FBYSxDQUFiLFVBQWE7QUFDdUIsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7OztTQUVsRkEsYUFBYSxDQUFDQyxhQUFhLEVBQUVDLFVBQVUsRUFBb0IsQ0FBQztJQUFuQixHQUFHQyxDQUFILEdBQWdCLENBQWhCLElBQWdCLEdBQWhCLFNBQWdCLENBQWhCLE1BQWdCLEVBQWJBLGFBQWEsR0FBaEIsR0FBZ0IsT0FBaEIsSUFBZ0IsR0FBaEIsQ0FBZ0IsR0FBaEIsSUFBZ0IsR0FBaEIsQ0FBZ0IsR0FBaEIsQ0FBZ0IsR0FBaEIsSUFBZ0IsR0FBaEIsQ0FBZ0IsRUFBaEIsSUFBZ0IsR0FBaEIsSUFBZ0IsRUFBaEIsSUFBZ0IsR0FBaEIsQ0FBQztRQUFFQSxhQUFhLENBQWhCLElBQWdCLEdBQWhCLENBQWdCLElBQWhCLFNBQWdCLENBQWhCLElBQWdCO0lBQUQsQ0FBQztJQUNoRSxHQUFHLENBQUNDLE9BQU8sR0FBRyxJQUFJO0lBRWxCLEVBQUUsRUFBRUgsYUFBYSxLQUFLSSxTQUFTLEVBQUUsQ0FBQztRQUNoQ0YsYUFBYSxHQUFHRyxxQkFBcUIsQ0FBQ0gsYUFBYTtRQUVuREQsVUFBVSxHQUFHSyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCTCxhQUFhLEVBQWJBLGFBQWE7UUFDZixDQUFDLEVBQUVELFVBQVU7UUFFYixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDVixFQUFHLEFBQUgsQ0FBRztRQUNMLENBQUMsTUFBTSxFQUFFLEVBQUVPLFlBQVksQ0FBQ1IsYUFBYSxFQWpCckIsUUFBVyxXQWlCc0IsQ0FBQztZQUNoRCxHQUFLLENBQUNTLEtBQUssR0FBR1QsYUFBYSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztZQUVqQ0csT0FBTyxHQUFHTSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFUixVQUFVO1FBQzdDLENBQUMsTUFBTSxFQUFFLFVBQVNELGFBQWEsaUNBQXBCLE9BQW9CLENBQWJBLGFBQWEsT0FuQkYsVUFBYSxTQW1CRSxDQUFDO1lBQzNDLEdBQUssQ0FBQ1csT0FBTyxHQUFHWCxhQUFhLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBRWxDRyxPQUFPLEdBeEJPLFFBQVcsU0F3QlBTLFdBQVcsQ0FBQ0QsT0FBTyxFQUFFVixVQUFVO1FBQ25ELENBQUMsTUFBTSxFQUFFLFVBQVNELGFBQWEsaUNBQXBCLE9BQW9CLENBQWJBLGFBQWEsT0F2QkYsVUFBYSxXQXVCSSxDQUFDO1lBQzdDLEdBQUssQ0FBQ2EsZUFBZSxHQUFHYixhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBRTNDRyxPQUFPLEdBQUdVLGVBQWUsQ0FBQ1osVUFBVTtRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0UsT0FBTztBQUNoQixDQUFDO0FBRUQsR0FBSyxDQUFDVyxLQUFLLEdBQUcsQ0FBQztJQUNiZixhQUFhLEVBQWJBLGFBQWE7QUFDZixDQUFDO2VBRWNlLEtBQUs7O1NBRVhULHFCQUFxQixDQUFDSCxhQUFhLEVBQUUsQ0FBQztJQUM3Q0EsYUFBYSxPQXZDc0QsU0FBc0IsdUJBdUNwREEsYUFBYTtJQUVsREEsYUFBYSxPQXpDc0QsU0FBc0IsaUNBeUMxQ0EsYUFBYTtJQUU1RCxNQUFNLENBQUNBLGFBQWE7QUFDdEIsQ0FBQztTQUVRTSxZQUFZLENBQUNPLFFBQVEsRUFBRU4sS0FBSyxFQUFFLENBQUM7SUFDdEMsR0FBRyxDQUFDTyxVQUFVLEdBQUcsS0FBSztJQUV0QixFQUFFLEVBQUVELFFBQVEsQ0FBQ0UsSUFBSSxLQUFLUixLQUFLLENBQUNRLElBQUksRUFBRSxDQUFDO1FBQ2pDRCxVQUFVLEdBQUcsSUFBSTtJQUNuQixDQUFDLE1BQU0sQ0FBQztRQUNORCxRQUFRLEdBQUdULE1BQU0sQ0FBQ1ksY0FBYyxDQUFDSCxRQUFRLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRS9DLEVBQUUsRUFBRUEsUUFBUSxFQUFFLENBQUM7WUFDYkMsVUFBVSxHQUFHUixZQUFZLENBQUNPLFFBQVEsRUFBRU4sS0FBSztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ08sVUFBVTtBQUNuQixDQUFDIn0=