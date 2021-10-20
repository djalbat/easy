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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function removeFalseyElements(elements) {
    elements = elements.reduce(function(elements, element) {
        if (element) {
            elements.push(element);
        }
        return elements;
    }, []);
    return elements;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwibWFwIiwidGV4dCIsInRleHRFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBTUlBLG9CQUFvQixHQUFwQkEsb0JBQW9CO1FBWXBCQyw4QkFBOEIsR0FBOUJBLDhCQUE4QjtBQWhCdEIsR0FBZ0IsQ0FBaEIsWUFBZ0I7QUFFakIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7OztTQUVyQkQsb0JBQW9CLENBQUNFLFFBQVEsRUFBRSxDQUFDO0lBQzlDQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUEQsUUFBUSxFQUFFRSxPQUFPLEVBQUssQ0FBQztRQUNqRCxFQUFFLEVBQUVBLE9BQU8sRUFBRSxDQUFDO1lBQ1pGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDRCxPQUFPO1FBQ3ZCLENBQUM7UUFFRCxNQUFNLENBQUNGLFFBQVE7SUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sQ0FBQ0EsUUFBUTtBQUNqQixDQUFDO1NBRWVELDhCQUE4QixDQUFDQyxRQUFRLEVBQUUsQ0FBQztJQUN4REEsUUFBUSxHQUFHQSxRQUFRLENBQUNJLEdBQUcsQ0FBQyxRQUFRLENBQVBGLE9BQU8sRUFBSyxDQUFDO1FBQ3BDLEVBQUUsVUFBU0EsT0FBTyxpQ0FBZCxPQUFjLENBQVBBLE9BQU8sT0FoQkMsVUFBYyxTQWdCRixDQUFDO1lBQzlCLEdBQUssQ0FBQ0csSUFBSSxHQUFHSCxPQUFPLEVBQ2RJLFdBQVcsR0FBRyxHQUFHLENBcEJMLFlBQWdCLFNBb0JFRCxJQUFJO1lBRXhDSCxPQUFPLEdBQUdJLFdBQVcsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDNUIsQ0FBQztRQUVELE1BQU0sQ0FBQ0osT0FBTztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDRixRQUFRO0FBQ2pCLENBQUMifQ==