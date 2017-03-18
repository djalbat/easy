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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEFyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwiZWxlbWVudEZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZEVsZW1lbnQiLCJ0ZXh0IiwidGV4dEVsZW1lbnQiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxlQUFSLENBRHBCOztJQUdNRSxLOzs7Ozs7O2tDQUNpQkMsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVUsSUFBZDs7QUFFQSxVQUFJRixrQkFBa0JHLFNBQXRCLEVBQWlDO0FBQUEsMENBSGdCQyxjQUdoQjtBQUhnQkEsd0JBR2hCO0FBQUE7O0FBQy9CLFlBQU1DLGdCQUFnQkMsZ0NBQWdDRixjQUFoQyxDQUF0Qjs7QUFFQUgscUJBQWFNLE9BQU9DLE1BQVAsQ0FBYztBQUN6QkgseUJBQWVBO0FBRFUsU0FBZCxFQUVWSixVQUZVLENBQWI7O0FBSUEsWUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxPQUFPRCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQzVDLGNBQU1TLFVBQVVULGFBQWhCO0FBQUEsY0FBZ0M7QUFDMUJVLHVCQUFXRCxPQUFYLFdBQXdCQSxPQUF4QixNQUROOztBQUdBUCxvQkFBVU4sUUFBUWUsUUFBUixDQUFpQkQsSUFBakIsQ0FBVjs7QUFFQVIsa0JBQVFVLGVBQVIsQ0FBd0JYLFVBQXhCO0FBQ0QsU0FQTSxNQU9BLElBQUlZLFNBQVNiLGFBQVQsRUFBd0JKLE9BQXhCLENBQUosRUFBc0M7QUFDM0MsY0FBTWtCLFFBQVFkLGFBQWQsQ0FEMkMsQ0FDYjs7QUFFOUJFLG9CQUFVWSxNQUFNQyxjQUFOLENBQXFCZCxVQUFyQixDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUlELGNBQWNnQixTQUFkLENBQXdCQyxNQUE1QixFQUFvQztBQUN6QyxjQUFNSCxTQUFRZCxhQUFkO0FBQUEsY0FBOEI7QUFDeEJrQixxQkFBVyxJQUFJSixNQUFKLENBQVViLFVBQVYsQ0FEakI7O0FBR0FDLG9CQUFVZ0IsU0FBU0QsTUFBVCxFQUFWO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT2pCLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTW1CLGtCQUFrQm5CLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRSxvQkFBVWlCLGdCQUFnQmxCLFVBQWhCLENBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9DLE9BQVA7QUFDRDs7Ozs7O0FBR0hrQixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakI7O0FBRUEsU0FBU08sK0JBQVQsQ0FBeUNGLGNBQXpDLEVBQXlEO0FBQ3ZEQSxtQkFBaUJBLGVBQWVrQixNQUFmLENBQXNCLFVBQVNsQixjQUFULEVBQXlCbUIsYUFBekIsRUFBd0M7QUFDN0VuQixxQkFBaUJBLGVBQWVvQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPbkIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFNQyxnQkFBZ0JELGVBQWVxQixHQUFmLENBQW1CLFVBQVNGLGFBQVQsRUFBd0I7QUFDL0QsUUFBSUcscUJBQUo7O0FBRUEsUUFBT0gseUJBQXlCM0IsT0FBMUIsSUFDQzJCLHlCQUF5QnpCLFdBRGhDLEVBQ2dEO0FBQzlDNEIscUJBQWVILGFBQWYsQ0FEOEMsQ0FDZjtBQUNoQyxLQUhELE1BR087QUFDTCxVQUFNSSxPQUFPSixhQUFiO0FBQUEsVUFBNEI7QUFDdEJLLG9CQUFjLElBQUk5QixXQUFKLENBQWdCNkIsSUFBaEIsQ0FEcEI7O0FBR0FELHFCQUFlRSxXQUFmO0FBQ0Q7O0FBRUQsV0FBT0YsWUFBUDtBQUNELEdBZHFCLENBQXRCOztBQWdCQSxTQUFPckIsYUFBUDtBQUNEOztBQUVELFNBQVNRLFFBQVQsQ0FBa0JnQixRQUFsQixFQUE0QmYsS0FBNUIsRUFBbUM7QUFDakMsTUFBSWdCLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhZixLQUFqQixFQUF3QjtBQUFFO0FBQ3hCZ0IsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELGVBQVd0QixPQUFPd0IsY0FBUCxDQUFzQkYsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxRQUFKLEVBQWM7QUFDWkMsZUFBU2pCLFNBQVNnQixRQUFULEVBQW1CZixLQUFuQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPZ0IsTUFBUDtBQUNEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKTtcblxuICAgICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmA7XG5cbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoaHRtbCk7XG5cbiAgICAgICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbGFzcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBlbGVtZW50ID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG5cbiAgICBpZiAoICAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpXG4gICAgICAgfHwgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBUZXh0RWxlbWVudCkgICkge1xuICAgICAgY2hpbGRFbGVtZW50ID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGRFbGVtZW50ID0gdGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==