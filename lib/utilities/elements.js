"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeFalseyElements = removeFalseyElements;
exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
var _textElement = _interopRequireDefault(require("../textElement"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function removeFalseyElements(elements1) {
    elements1 = elements1.reduce(function(elements, element) {
        if (element) {
            elements.push(element);
        }
        return elements;
    }, []);
    return elements1;
}
function replaceStringsWithTextElements(elements) {
    elements = elements.map(function(element) {
        if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === _constants.STRING) {
            var text = element, textElement = new _textElement.default(text);
            element = textElement; ///
        }
        return element;
    });
    return elements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwibWFwIiwiU1RSSU5HIiwidGV4dCIsInRleHRFbGVtZW50IiwiVGV4dEVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OztRQU1HQSxvQkFBb0IsR0FBcEJBLG9CQUFvQjtRQVlwQkMsOEJBQThCLEdBQTlCQSw4QkFBOEI7QUFoQnRCLElBQUEsWUFBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBRWpCLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7OztBQUU5QixTQUFTRCxvQkFBb0IsQ0FBQ0UsU0FBUSxFQUFFO0lBQzdDQSxTQUFRLEdBQUdBLFNBQVEsQ0FBQ0MsTUFBTSxDQUFDLFNBQUNELFFBQVEsRUFBRUUsT0FBTyxFQUFLO1FBQ2hELElBQUlBLE9BQU8sRUFBRTtZQUNYRixRQUFRLENBQUNHLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPRixRQUFRLENBQUM7S0FDakIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU9BLFNBQVEsQ0FBQztDQUNqQjtBQUVNLFNBQVNELDhCQUE4QixDQUFDQyxRQUFRLEVBQUU7SUFDdkRBLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxHQUFHLENBQUMsU0FBQ0YsT0FBTyxFQUFLO1FBQ25DLElBQUksQ0FBQSxPQUFPQSxPQUFPLGlDQUFkLE9BQWMsQ0FBUEEsT0FBTyxDQUFBLENBQUEsS0FBS0csVUFBTSxPQUFBLEVBQUU7WUFDN0IsSUFBTUMsSUFBSSxHQUFHSixPQUFPLEVBQ2RLLFdBQVcsR0FBRyxJQUFJQyxZQUFXLFFBQUEsQ0FBQ0YsSUFBSSxDQUFDLEFBQUM7WUFFMUNKLE9BQU8sR0FBR0ssV0FBVyxDQUFDLENBQUMsR0FBRztTQUMzQjtRQUVELE9BQU9MLE9BQU8sQ0FBQztLQUNoQixDQUFDLENBQUM7SUFFSCxPQUFPRixRQUFRLENBQUM7Q0FDakIifQ==