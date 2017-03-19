'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element'),
    TextElement = require('./textElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      var element = null;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var childElements = childElementsFromChildArguments(childArguments);

        properties = Object.assign({
          childElements: childElements
        }, properties);

        if (false) {} else if (typeof firstArgument === 'string') {
          var tagName = firstArgument,
              ///
          html = '<' + tagName + '></' + tagName + '>';

          element = Element.fromHTML(html);

          element.applyProperties(properties);
        } else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

          element = elementFunction(properties);
        }
      }

      return element;
    }
  }]);

  return React;
}();

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var childElements = childArguments.map(function (childArgument) {
    var childElement = void 0;

    if (childArgument instanceof Element || childArgument instanceof TextElement) {
      childElement = childArgument; ///
    } else {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    }

    return childElement;
  });

  return childElements;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEFyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsImVsZW1lbnRGdW5jdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEFyZ3VtZW50IiwiY29uY2F0IiwibWFwIiwiY2hpbGRFbGVtZW50IiwidGV4dCIsInRleHRFbGVtZW50IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZUFBUixDQURwQjs7SUFHTUUsSzs7Ozs7OztrQ0FDaUJDLGEsRUFBZUMsVSxFQUErQjtBQUNqRSxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSUYsa0JBQWtCRyxTQUF0QixFQUFpQztBQUFBLDBDQUhnQkMsY0FHaEI7QUFIZ0JBLHdCQUdoQjtBQUFBOztBQUMvQixZQUFNQyxnQkFBZ0JDLGdDQUFnQ0YsY0FBaEMsQ0FBdEI7O0FBRUFILHFCQUFhTSxPQUFPQyxNQUFQLENBQWM7QUFDekJILHlCQUFlQTtBQURVLFNBQWQsRUFFVkosVUFGVSxDQUFiOztBQUlBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksT0FBT0QsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUM1QyxjQUFNUyxVQUFVVCxhQUFoQjtBQUFBLGNBQWdDO0FBQzFCVSx1QkFBV0QsT0FBWCxXQUF3QkEsT0FBeEIsTUFETjs7QUFHQVAsb0JBQVVOLFFBQVFlLFFBQVIsQ0FBaUJELElBQWpCLENBQVY7O0FBRUFSLGtCQUFRVSxlQUFSLENBQXdCWCxVQUF4QjtBQUNELFNBUE0sTUFPQSxJQUFJWSxTQUFTYixhQUFULEVBQXdCSixPQUF4QixDQUFKLEVBQXNDO0FBQzNDLGNBQU1rQixRQUFRZCxhQUFkLENBRDJDLENBQ2I7O0FBRTlCRSxvQkFBVVksTUFBTUMsY0FBTixDQUFxQmQsVUFBckIsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJLE9BQU9ELGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTWdCLGtCQUFrQmhCLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRSxvQkFBVWMsZ0JBQWdCZixVQUFoQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQyxPQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakI7O0FBRUEsU0FBU08sK0JBQVQsQ0FBeUNGLGNBQXpDLEVBQXlEO0FBQ3ZEQSxtQkFBaUJBLGVBQWVlLE1BQWYsQ0FBc0IsVUFBU2YsY0FBVCxFQUF5QmdCLGFBQXpCLEVBQXdDO0FBQzdFaEIscUJBQWlCQSxlQUFlaUIsTUFBZixDQUFzQkQsYUFBdEIsQ0FBakI7O0FBRUEsV0FBT2hCLGNBQVA7QUFDRCxHQUpnQixFQUlkLEVBSmMsQ0FBakI7O0FBTUEsTUFBTUMsZ0JBQWdCRCxlQUFla0IsR0FBZixDQUFtQixVQUFTRixhQUFULEVBQXdCO0FBQy9ELFFBQUlHLHFCQUFKOztBQUVBLFFBQU9ILHlCQUF5QnhCLE9BQTFCLElBQ0N3Qix5QkFBeUJ0QixXQURoQyxFQUNnRDtBQUM5Q3lCLHFCQUFlSCxhQUFmLENBRDhDLENBQ2Y7QUFDaEMsS0FIRCxNQUdPO0FBQ0wsVUFBTUksT0FBT0osYUFBYjtBQUFBLFVBQTRCO0FBQ3RCSyxvQkFBYyxJQUFJM0IsV0FBSixDQUFnQjBCLElBQWhCLENBRHBCOztBQUdBRCxxQkFBZUUsV0FBZjtBQUNEOztBQUVELFdBQU9GLFlBQVA7QUFDRCxHQWRxQixDQUF0Qjs7QUFnQkEsU0FBT2xCLGFBQVA7QUFDRDs7QUFFRCxTQUFTUSxRQUFULENBQWtCYSxRQUFsQixFQUE0QlosS0FBNUIsRUFBbUM7QUFDakMsTUFBSWEsU0FBUyxLQUFiOztBQUVBLE1BQUlELGFBQWFaLEtBQWpCLEVBQXdCO0FBQUU7QUFDeEJhLGFBQVMsSUFBVDtBQUNELEdBRkQsTUFFTztBQUNMRCxlQUFXbkIsT0FBT3FCLGNBQVAsQ0FBc0JGLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGVBQVNkLFNBQVNhLFFBQVQsRUFBbUJaLEtBQW5CLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9hLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gO1xuXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGh0bWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChpc1R5cGVPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG5cbiAgICBpZiAoICAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpXG4gICAgICAgfHwgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBUZXh0RWxlbWVudCkgICkge1xuICAgICAgY2hpbGRFbGVtZW50ID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGRFbGVtZW50ID0gdGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==