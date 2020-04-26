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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlbW92ZUZhbHNleUVsZW1lbnRzIiwiZWxlbWVudHMiLCJyZWR1Y2UiLCJlbGVtZW50IiwicHVzaCIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyIsIm1hcCIsInRleHQiLCJ0ZXh0RWxlbWVudCIsIlRleHRFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUVPLFNBQVNBLG9CQUFULENBQThCQyxRQUE5QixFQUF3QztBQUM3Q0EsRUFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBU0QsUUFBVCxFQUFtQkUsT0FBbkIsRUFBNEI7QUFDckQsUUFBSUEsT0FBSixFQUFhO0FBQ1hGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxPQUFkO0FBQ0Q7O0FBRUQsV0FBT0YsUUFBUDtBQUNELEdBTlUsRUFNUixFQU5RLENBQVg7QUFRQSxTQUFPQSxRQUFQO0FBQ0Q7O0FBRU0sU0FBU0ksOEJBQVQsQ0FBd0NKLFFBQXhDLEVBQWtEO0FBQ3ZEQSxFQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQVNILE9BQVQsRUFBa0I7QUFBRztBQUMzQyxRQUFJLE9BQU9BLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0IsVUFBTUksSUFBSSxHQUFHSixPQUFiO0FBQUEsVUFBdUI7QUFDakJLLE1BQUFBLFdBQVcsR0FBRyxJQUFJQyx1QkFBSixDQUFnQkYsSUFBaEIsQ0FEcEI7QUFHQUosTUFBQUEsT0FBTyxHQUFHSyxXQUFWLENBSitCLENBSVI7QUFDeEI7O0FBRUQsV0FBT0wsT0FBUDtBQUNELEdBVFUsQ0FBWDtBQVdBLFNBQU9GLFFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbihlbGVtZW50KSB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIl19