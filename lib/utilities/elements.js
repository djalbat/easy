"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    removeFalseyElements: function() {
        return removeFalseyElements;
    },
    replaceStringsWithTextElements: function() {
        return replaceStringsWithTextElements;
    }
});
var _textElement = /*#__PURE__*/ _interopRequireDefault(require("../textElement"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwibWFwIiwiU1RSSU5HIiwidGV4dCIsInRleHRFbGVtZW50IiwiVGV4dEVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsb0JBQW9CO2VBQXBCQTs7SUFZQUMsOEJBQThCO2VBQTlCQTs7O2dFQWhCUTt5QkFFRDs7Ozs7Ozs7OztBQUVoQixTQUFTRCxxQkFBcUJFLFFBQVEsRUFBRTtJQUM3Q0EsV0FBV0EsU0FBU0MsTUFBTSxDQUFDLFNBQUNELFVBQVVFLFNBQVk7UUFDaEQsSUFBSUEsU0FBUztZQUNYRixTQUFTRyxJQUFJLENBQUNEO1FBQ2hCLENBQUM7UUFFRCxPQUFPRjtJQUNULEdBQUcsRUFBRTtJQUVMLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTRCwrQkFBK0JDLFFBQVEsRUFBRTtJQUN2REEsV0FBV0EsU0FBU0ksR0FBRyxDQUFDLFNBQUNGLFNBQVk7UUFDbkMsSUFBSSxDQUFBLE9BQU9BLHdDQUFQLFFBQU9BLFFBQU8sQUFBRCxNQUFNRyxpQkFBTSxFQUFFO1lBQzdCLElBQU1DLE9BQU9KLFNBQ1BLLGNBQWMsSUFBSUMsb0JBQVcsQ0FBQ0Y7WUFFcENKLFVBQVVLLGFBQWEsR0FBRztRQUM1QixDQUFDO1FBRUQsT0FBT0w7SUFDVDtJQUVBLE9BQU9GO0FBQ1QifQ==