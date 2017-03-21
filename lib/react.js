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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEFyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNUeXBlT2YiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwiZWxlbWVudEZ1bmN0aW9uIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEFyZ3VtZW50IiwiY29uY2F0IiwibWFwIiwiY2hpbGRFbGVtZW50IiwidGV4dCIsInRleHRFbGVtZW50IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLGNBQWNELFFBQVEsZUFBUixDQURwQjs7SUFHTUUsSzs7Ozs7OztrQ0FDaUJDLGEsRUFBZUMsVSxFQUErQjtBQUNqRSxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSUYsa0JBQWtCRyxTQUF0QixFQUFpQztBQUFBLDBDQUhnQkMsY0FHaEI7QUFIZ0JBLHdCQUdoQjtBQUFBOztBQUMvQixZQUFNQyxnQkFBZ0JDLGdDQUFnQ0YsY0FBaEMsQ0FBdEI7O0FBRUFILHFCQUFhTSxPQUFPQyxNQUFQLENBQWM7QUFDekJILHlCQUFlQTtBQURVLFNBQWQsRUFFVkosVUFGVSxDQUFiOztBQUlBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUlRLFNBQVNULGFBQVQsRUFBd0JKLE9BQXhCLENBQUosRUFBc0M7QUFDM0MsY0FBTWMsUUFBUVYsYUFBZCxDQUQyQyxDQUNiOztBQUU5QkUsb0JBQVVRLE1BQU1DLGNBQU4sQ0FBcUJWLFVBQXJCLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSSxPQUFPRCxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQzlDLGNBQU1ZLGtCQUFrQlosYUFBeEIsQ0FEOEMsQ0FDTjs7QUFFeENFLG9CQUFVVSxnQkFBZ0JYLFVBQWhCLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSSxPQUFPRCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQzVDLGNBQU1hLFVBQVViLGFBQWhCO0FBQUEsY0FBZ0M7QUFDMUJjLHVCQUFXRCxPQUFYLFdBQXdCQSxPQUF4QixNQUROOztBQUdBWCxvQkFBVU4sUUFBUW1CLFFBQVIsQ0FBaUJuQixPQUFqQixFQUEwQmtCLElBQTFCLENBQVY7O0FBRUFaLGtCQUFRYyxlQUFSLENBQXdCZixVQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0MsT0FBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCOztBQUVBLFNBQVNPLCtCQUFULENBQXlDRixjQUF6QyxFQUF5RDtBQUN2REEsbUJBQWlCQSxlQUFlZSxNQUFmLENBQXNCLFVBQVNmLGNBQVQsRUFBeUJnQixhQUF6QixFQUF3QztBQUM3RWhCLHFCQUFpQkEsZUFBZWlCLE1BQWYsQ0FBc0JELGFBQXRCLENBQWpCOztBQUVBLFdBQU9oQixjQUFQO0FBQ0QsR0FKZ0IsRUFJZCxFQUpjLENBQWpCOztBQU1BLE1BQU1DLGdCQUFnQkQsZUFBZWtCLEdBQWYsQ0FBbUIsVUFBU0YsYUFBVCxFQUF3QjtBQUMvRCxRQUFJRyxxQkFBSjs7QUFFQSxRQUFPSCx5QkFBeUJ4QixPQUExQixJQUNDd0IseUJBQXlCdEIsV0FEaEMsRUFDZ0Q7QUFDOUN5QixxQkFBZUgsYUFBZixDQUQ4QyxDQUNmO0FBQ2hDLEtBSEQsTUFHTztBQUNMLFVBQU1JLE9BQU9KLGFBQWI7QUFBQSxVQUE0QjtBQUN0Qkssb0JBQWMsSUFBSTNCLFdBQUosQ0FBZ0IwQixJQUFoQixDQURwQjs7QUFHQUQscUJBQWVFLFdBQWY7QUFDRDs7QUFFRCxXQUFPRixZQUFQO0FBQ0QsR0FkcUIsQ0FBdEI7O0FBZ0JBLFNBQU9sQixhQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksUUFBVCxDQUFrQmlCLFFBQWxCLEVBQTRCaEIsS0FBNUIsRUFBbUM7QUFDakMsTUFBSWlCLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhaEIsS0FBakIsRUFBd0I7QUFBRTtBQUN4QmlCLGFBQVMsSUFBVDtBQUNELEdBRkQsTUFFTztBQUNMRCxlQUFXbkIsT0FBT3FCLGNBQVAsQ0FBc0JGLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGVBQVNsQixTQUFTaUIsUUFBVCxFQUFtQmhCLEtBQW5CLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9pQixNQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc1R5cGVPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YDtcblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sKTtcblxuICAgICAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGRFbGVtZW50O1xuXG4gICAgaWYgKCAgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KVxuICAgICAgIHx8IChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgVGV4dEVsZW1lbnQpICApIHtcbiAgICAgIGNoaWxkRWxlbWVudCA9IGNoaWxkQXJndW1lbnQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=