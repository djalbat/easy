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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwibWFwIiwiU1RSSU5HIiwidGV4dCIsInRleHRFbGVtZW50IiwiVGV4dEVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFNR0Esb0JBQW9CO2VBQXBCQSxvQkFBb0I7O0lBWXBCQyw4QkFBOEI7ZUFBOUJBLDhCQUE4Qjs7O2dFQWhCdEIsZ0JBQWdCO3lCQUVqQixjQUFjOzs7Ozs7Ozs7O0FBRTlCLFNBQVNELG9CQUFvQixDQUFDRSxRQUFRLEVBQUU7SUFDN0NBLFFBQVEsR0FBR0EsUUFBUSxDQUFDQyxNQUFNLENBQUMsU0FBQ0QsUUFBUSxFQUFFRSxPQUFPLEVBQUs7UUFDaEQsSUFBSUEsT0FBTyxFQUFFO1lBQ1hGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU9GLFFBQVEsQ0FBQztLQUNqQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBT0EsUUFBUSxDQUFDO0NBQ2pCO0FBRU0sU0FBU0QsOEJBQThCLENBQUNDLFFBQVEsRUFBRTtJQUN2REEsUUFBUSxHQUFHQSxRQUFRLENBQUNJLEdBQUcsQ0FBQyxTQUFDRixPQUFPLEVBQUs7UUFDbkMsSUFBSSxDQUFBLE9BQU9BLE9BQU8saUNBQWQsT0FBYyxDQUFQQSxPQUFPLENBQUEsQ0FBQSxLQUFLRyxVQUFNLE9BQUEsRUFBRTtZQUM3QixJQUFNQyxJQUFJLEdBQUdKLE9BQU8sRUFDZEssV0FBVyxHQUFHLElBQUlDLFlBQVcsUUFBQSxDQUFDRixJQUFJLENBQUMsQUFBQztZQUUxQ0osT0FBTyxHQUFHSyxXQUFXLENBQUMsQ0FBQyxHQUFHO1NBQzNCO1FBRUQsT0FBT0wsT0FBTyxDQUFDO0tBQ2hCLENBQUMsQ0FBQztJQUVILE9BQU9GLFFBQVEsQ0FBQztDQUNqQiJ9