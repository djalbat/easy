'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }

      var element = null;

      if (firstArgument !== undefined) {
        childElements = flattenChildElements(childElements);

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
        } else if (firstArgument.prototype.render) {
          var _Class = firstArgument,
              ///
          instance = new _Class(properties);

          element = instance.render();
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

function flattenChildElements(childElements) {
  childElements = childElements.reduce(function (childElements, childElement) {
    ///
    childElements = childElements.concat(childElement);

    return childElements;
  }, []);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImZsYXR0ZW5DaGlsZEVsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwiZWxlbWVudEZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkRWxlbWVudCIsImNvbmNhdCIsImFyZ3VtZW50IiwidHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7O0lBRU1DLEs7Ozs7Ozs7a0NBQ2lCQyxhLEVBQWVDLFUsRUFBOEI7QUFBQSx3Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNoRSxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCSSxTQUF0QixFQUFpQztBQUMvQkYsd0JBQWdCRyxxQkFBcUJILGFBQXJCLENBQWhCOztBQUVBRCxxQkFBYUssT0FBT0MsTUFBUCxDQUFjO0FBQ3pCTCx5QkFBZUE7QUFEVSxTQUFkLEVBRVZELFVBRlUsQ0FBYjs7QUFJQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLE9BQU9ELGFBQVAsS0FBeUIsUUFBN0IsRUFBdUM7QUFDNUMsY0FBTVEsVUFBVVIsYUFBaEI7QUFBQSxjQUFnQztBQUMxQlMsdUJBQVdELE9BQVgsV0FBd0JBLE9BQXhCLE1BRE47O0FBR0FMLG9CQUFVTixRQUFRYSxRQUFSLENBQWlCRCxJQUFqQixDQUFWOztBQUVBTixrQkFBUVEsZUFBUixDQUF3QlYsVUFBeEI7QUFDRCxTQVBNLE1BT0EsSUFBSVcsU0FBU1osYUFBVCxFQUF3QkgsT0FBeEIsQ0FBSixFQUFzQztBQUMzQyxjQUFNZ0IsUUFBUWIsYUFBZCxDQUQyQyxDQUNiOztBQUU5Qkcsb0JBQVVVLE1BQU1DLGNBQU4sQ0FBcUJiLFVBQXJCLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSUQsY0FBY2UsU0FBZCxDQUF3QkMsTUFBNUIsRUFBb0M7QUFDekMsY0FBTUgsU0FBUWIsYUFBZDtBQUFBLGNBQThCO0FBQ3hCaUIscUJBQVcsSUFBSUosTUFBSixDQUFVWixVQUFWLENBRGpCOztBQUdBRSxvQkFBVWMsU0FBU0QsTUFBVCxFQUFWO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT2hCLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTWtCLGtCQUFrQmxCLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRyxvQkFBVWUsZ0JBQWdCakIsVUFBaEIsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0UsT0FBUDtBQUNEOzs7Ozs7QUFHSGdCLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQjs7QUFFQSxTQUFTTSxvQkFBVCxDQUE4QkgsYUFBOUIsRUFBNkM7QUFDM0NBLGtCQUFnQkEsY0FBY21CLE1BQWQsQ0FBcUIsVUFBU25CLGFBQVQsRUFBd0JvQixZQUF4QixFQUFzQztBQUFHO0FBQzVFcEIsb0JBQWdCQSxjQUFjcUIsTUFBZCxDQUFxQkQsWUFBckIsQ0FBaEI7O0FBRUEsV0FBT3BCLGFBQVA7QUFDRCxHQUplLEVBSWIsRUFKYSxDQUFoQjs7QUFNQSxTQUFPQSxhQUFQO0FBQ0Q7O0FBRUQsU0FBU1UsUUFBVCxDQUFrQlksUUFBbEIsRUFBNEJYLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUlZLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhWCxLQUFqQixFQUF3QjtBQUFFO0FBQ3hCWSxhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEQsZUFBV2xCLE9BQU9vQixjQUFQLENBQXNCRixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxlQUFTYixTQUFTWSxRQUFULEVBQW1CWCxLQUFuQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPWSxNQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YDtcblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChodG1sKTtcblxuICAgICAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gZmxhdHRlbkNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRFbGVtZW50cywgY2hpbGRFbGVtZW50KSB7ICAvLy9cbiAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5jb25jYXQoY2hpbGRFbGVtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==