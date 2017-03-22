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

        if (false) {} else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

          element = elementFunction(properties);
        } else if (typeof firstArgument === 'string') {
          var tagName = firstArgument,
              ///
          html = '<' + tagName + '></' + tagName + '>';

          element = Element.fromHTML(Element, html);

          element.applyProperties(properties);
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

    if (typeof childArgument === 'string') {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    } else {
      childElement = childArgument; ///
    }

    return childElement;
  });

  return childElements;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEFyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNUeXBlT2YiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwiZWxlbWVudEZ1bmN0aW9uIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEFyZ3VtZW50IiwiY29uY2F0IiwibWFwIiwiY2hpbGRFbGVtZW50IiwidGV4dCIsInRleHRFbGVtZW50IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGVBQVIsQ0FEcEI7O0lBR01FLEs7Ozs7Ozs7a0NBQ2lCQyxhLEVBQWVDLFUsRUFBK0I7QUFDakUsVUFBSUMsVUFBVSxJQUFkOztBQUVBLFVBQUlGLGtCQUFrQkcsU0FBdEIsRUFBaUM7QUFBQSwwQ0FIZ0JDLGNBR2hCO0FBSGdCQSx3QkFHaEI7QUFBQTs7QUFDL0IsWUFBTUMsZ0JBQWdCQyxnQ0FBZ0NGLGNBQWhDLENBQXRCOztBQUVBSCxxQkFBYU0sT0FBT0MsTUFBUCxDQUFjO0FBQ3pCSCx5QkFBZUE7QUFEVSxTQUFkLEVBRVZKLFVBRlUsQ0FBYjs7QUFJQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJUSxTQUFTVCxhQUFULEVBQXdCSixPQUF4QixDQUFKLEVBQXNDO0FBQzNDLGNBQU1jLFFBQVFWLGFBQWQsQ0FEMkMsQ0FDYjs7QUFFOUJFLG9CQUFVUSxNQUFNQyxjQUFOLENBQXFCVixVQUFyQixDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUksT0FBT0QsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFNWSxrQkFBa0JaLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRSxvQkFBVVUsZ0JBQWdCWCxVQUFoQixDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUksT0FBT0QsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUM1QyxjQUFNYSxVQUFVYixhQUFoQjtBQUFBLGNBQWdDO0FBQzFCYyx1QkFBV0QsT0FBWCxXQUF3QkEsT0FBeEIsTUFETjs7QUFHQVgsb0JBQVVOLFFBQVFtQixRQUFSLENBQWlCbkIsT0FBakIsRUFBMEJrQixJQUExQixDQUFWOztBQUVBWixrQkFBUWMsZUFBUixDQUF3QmYsVUFBeEI7QUFDRDtBQUNGOztBQUVELGFBQU9DLE9BQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJuQixLQUFqQjs7QUFFQSxTQUFTTywrQkFBVCxDQUF5Q0YsY0FBekMsRUFBeUQ7QUFDdkRBLG1CQUFpQkEsZUFBZWUsTUFBZixDQUFzQixVQUFTZixjQUFULEVBQXlCZ0IsYUFBekIsRUFBd0M7QUFDN0VoQixxQkFBaUJBLGVBQWVpQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPaEIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFNQyxnQkFBZ0JELGVBQWVrQixHQUFmLENBQW1CLFVBQVNGLGFBQVQsRUFBd0I7QUFDL0QsUUFBSUcscUJBQUo7O0FBRUEsUUFBSSxPQUFPSCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDLFVBQU1JLE9BQU9KLGFBQWI7QUFBQSxVQUE0QjtBQUN0Qkssb0JBQWMsSUFBSTNCLFdBQUosQ0FBZ0IwQixJQUFoQixDQURwQjs7QUFHQUQscUJBQWVFLFdBQWY7QUFDRCxLQUxELE1BS087QUFDTEYscUJBQWVILGFBQWYsQ0FESyxDQUMwQjtBQUNoQzs7QUFFRCxXQUFPRyxZQUFQO0FBQ0QsR0FicUIsQ0FBdEI7O0FBZUEsU0FBT2xCLGFBQVA7QUFDRDs7QUFFRCxTQUFTSSxRQUFULENBQWtCaUIsUUFBbEIsRUFBNEJoQixLQUE1QixFQUFtQztBQUNqQyxNQUFJaUIsU0FBUyxLQUFiOztBQUVBLE1BQUlELFNBQVNFLElBQVQsS0FBa0JsQixNQUFNa0IsSUFBNUIsRUFBa0M7QUFBRTtBQUNsQ0QsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELGVBQVduQixPQUFPc0IsY0FBUCxDQUFzQkgsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxRQUFKLEVBQWM7QUFDWkMsZUFBU2xCLFNBQVNpQixRQUFULEVBQW1CaEIsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2lCLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gO1xuXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKEVsZW1lbnQsIGh0bWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjaGlsZEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=