"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFalseyElements = removeFalseyElements;
exports.replaceStringsWithTextElements = replaceStringsWithTextElements;

var _textElement = _interopRequireDefault(require("../textElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function removeFalseyElements(elements) {
  elements = elements.reduce(function (elements, element) {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);
  return elements;
}

function replaceStringsWithTextElements(elements) {
  elements = elements.map(function (element) {
    ///
    if (typeof element === "string") {
      var text = element,
          ///
      textElement = new _textElement["default"](text);
      element = textElement; ///
    }

    return element;
  });
  return elements;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlbW92ZUZhbHNleUVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZWR1Y2UiLCJlbGVtZW50IiwicHVzaCIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyIsIm1hcCIsInRleHQiLCJ0ZXh0RWxlbWVudCIsIlRleHRFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUVPLFNBQVNBLG9CQUFULENBQThCQyxRQUE5QixFQUF3QztBQUM3Q0EsRUFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQ0QsUUFBRCxFQUFXRSxPQUFYLEVBQXVCO0FBQ2hELFFBQUlBLE9BQUosRUFBYTtBQUNYRixNQUFBQSxRQUFRLENBQUNHLElBQVQsQ0FBY0QsT0FBZDtBQUNEOztBQUVELFdBQU9GLFFBQVA7QUFDRCxHQU5VLEVBTVIsRUFOUSxDQUFYO0FBUUEsU0FBT0EsUUFBUDtBQUNEOztBQUVNLFNBQVNJLDhCQUFULENBQXdDSixRQUF4QyxFQUFrRDtBQUN2REEsRUFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUNLLEdBQVQsQ0FBYSxVQUFDSCxPQUFELEVBQWE7QUFBRztBQUN0QyxRQUFJLE9BQU9BLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0IsVUFBTUksSUFBSSxHQUFHSixPQUFiO0FBQUEsVUFBdUI7QUFDakJLLE1BQUFBLFdBQVcsR0FBRyxJQUFJQyx1QkFBSixDQUFnQkYsSUFBaEIsQ0FEcEI7QUFHQUosTUFBQUEsT0FBTyxHQUFHSyxXQUFWLENBSitCLENBSVI7QUFDeEI7O0FBRUQsV0FBT0wsT0FBUDtBQUNELEdBVFUsQ0FBWDtBQVdBLFNBQU9GLFFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iXX0=