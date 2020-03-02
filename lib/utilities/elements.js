'use strict';

var TextElement = require('../textElement');

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
    if (typeof element === 'string') {
      var text = element,
          ///
      textElement = new TextElement(text);

      element = textElement; ///
    }

    return element;
  });

  return elements;
}

module.exports = {
  removeFalseyElements: removeFalseyElements,
  replaceStringsWithTextElements: replaceStringsWithTextElements
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvZWxlbWVudHMuanMiXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJyZXF1aXJlIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiLCJlbGVtZW50cyIsInJlZHVjZSIsImVsZW1lbnQiLCJwdXNoIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIiwibWFwIiwidGV4dCIsInRleHRFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsY0FBY0MsUUFBUSxnQkFBUixDQUFwQjs7QUFFQSxTQUFTQyxvQkFBVCxDQUE4QkMsUUFBOUIsRUFBd0M7QUFDdENBLGFBQVdBLFNBQVNDLE1BQVQsQ0FBZ0IsVUFBU0QsUUFBVCxFQUFtQkUsT0FBbkIsRUFBNEI7QUFDckQsUUFBSUEsT0FBSixFQUFhO0FBQ1hGLGVBQVNHLElBQVQsQ0FBY0QsT0FBZDtBQUNEOztBQUVELFdBQU9GLFFBQVA7QUFDRCxHQU5VLEVBTVIsRUFOUSxDQUFYOztBQVFBLFNBQU9BLFFBQVA7QUFDRDs7QUFFRCxTQUFTSSw4QkFBVCxDQUF3Q0osUUFBeEMsRUFBa0Q7QUFDaERBLGFBQVdBLFNBQVNLLEdBQVQsQ0FBYSxVQUFTSCxPQUFULEVBQWtCO0FBQUc7QUFDM0MsUUFBSSxPQUFPQSxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CLFVBQU1JLE9BQU9KLE9BQWI7QUFBQSxVQUF1QjtBQUNqQkssb0JBQWMsSUFBSVYsV0FBSixDQUFnQlMsSUFBaEIsQ0FEcEI7O0FBR0FKLGdCQUFVSyxXQUFWLENBSitCLENBSVI7QUFDeEI7O0FBRUQsV0FBT0wsT0FBUDtBQUNELEdBVFUsQ0FBWDs7QUFXQSxTQUFPRixRQUFQO0FBQ0Q7O0FBRURRLE9BQU9DLE9BQVAsR0FBaUI7QUFDZlYsNENBRGU7QUFFZks7QUFGZSxDQUFqQiIsImZpbGUiOiJlbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuLi90ZXh0RWxlbWVudCcpO1xuXG5mdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVtb3ZlRmFsc2V5RWxlbWVudHMsXG4gIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50c1xufTtcbiJdfQ==