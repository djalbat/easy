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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwibWFwIiwidGV4dCIsInRleHRFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBTUlBLG9CQUFvQixHQUFwQkEsb0JBQW9CO1FBWXBCQyw4QkFBOEIsR0FBOUJBLDhCQUE4QjtBQWhCdEIsR0FBZ0IsQ0FBaEIsWUFBZ0I7QUFFakIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7U0FFckJELG9CQUFvQixDQUFDRSxTQUFRLEVBQUUsQ0FBQztJQUM5Q0EsU0FBUSxHQUFHQSxTQUFRLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQVBELFFBQVEsRUFBRUUsT0FBTyxFQUFLLENBQUM7UUFDakQsRUFBRSxFQUFFQSxPQUFPLEVBQUUsQ0FBQztZQUNaRixRQUFRLENBQUNHLElBQUksQ0FBQ0QsT0FBTztRQUN2QixDQUFDO1FBRUQsTUFBTSxDQUFDRixRQUFRO0lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLENBQUNBLFNBQVE7QUFDakIsQ0FBQztTQUVlRCw4QkFBOEIsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7SUFDeERBLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFQRixPQUFPLEVBQUssQ0FBQztRQUNwQyxFQUFFLFVBQVNBLE9BQU8saUNBQWQsT0FBYyxDQUFQQSxPQUFPLE9BaEJDLFVBQWMsU0FnQkYsQ0FBQztZQUM5QixHQUFLLENBQUNHLElBQUksR0FBR0gsT0FBTyxFQUNkSSxXQUFXLEdBQUcsR0FBRyxDQXBCTCxZQUFnQixTQW9CRUQsSUFBSTtZQUV4Q0gsT0FBTyxHQUFHSSxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUNKLE9BQU87SUFDaEIsQ0FBQztJQUVELE1BQU0sQ0FBQ0YsUUFBUTtBQUNqQixDQUFDIn0=