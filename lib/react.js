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

    if (childArgument instanceof Element) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlRleHRFbGVtZW50IiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZEFyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllcyIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwiZWxlbWVudEZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZEVsZW1lbnQiLCJ0ZXh0IiwidGV4dEVsZW1lbnQiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxlQUFSLENBRHBCOztJQUdNRSxLOzs7Ozs7O2tDQUNpQkMsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVUsSUFBZDs7QUFFQSxVQUFJRixrQkFBa0JHLFNBQXRCLEVBQWlDO0FBQUEsMENBSGdCQyxjQUdoQjtBQUhnQkEsd0JBR2hCO0FBQUE7O0FBQy9CLFlBQU1DLGdCQUFnQkMsZ0NBQWdDRixjQUFoQyxDQUF0Qjs7QUFFQUgscUJBQWFNLE9BQU9DLE1BQVAsQ0FBYztBQUN6QkgseUJBQWVBO0FBRFUsU0FBZCxFQUVWSixVQUZVLENBQWI7O0FBSUEsWUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxPQUFPRCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQzVDLGNBQU1TLFVBQVVULGFBQWhCO0FBQUEsY0FBZ0M7QUFDMUJVLHVCQUFXRCxPQUFYLFdBQXdCQSxPQUF4QixNQUROOztBQUdBUCxvQkFBVU4sUUFBUWUsUUFBUixDQUFpQkQsSUFBakIsQ0FBVjs7QUFFQVIsa0JBQVFVLGVBQVIsQ0FBd0JYLFVBQXhCO0FBQ0QsU0FQTSxNQU9BLElBQUlZLFNBQVNiLGFBQVQsRUFBd0JKLE9BQXhCLENBQUosRUFBc0M7QUFDM0MsY0FBTWtCLFFBQVFkLGFBQWQsQ0FEMkMsQ0FDYjs7QUFFOUJFLG9CQUFVWSxNQUFNQyxjQUFOLENBQXFCZCxVQUFyQixDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUlELGNBQWNnQixTQUFkLENBQXdCQyxNQUE1QixFQUFvQztBQUN6QyxjQUFNSCxTQUFRZCxhQUFkO0FBQUEsY0FBOEI7QUFDeEJrQixxQkFBVyxJQUFJSixNQUFKLENBQVViLFVBQVYsQ0FEakI7O0FBR0FDLG9CQUFVZ0IsU0FBU0QsTUFBVCxFQUFWO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT2pCLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTW1CLGtCQUFrQm5CLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRSxvQkFBVWlCLGdCQUFnQmxCLFVBQWhCLENBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9DLE9BQVA7QUFDRDs7Ozs7O0FBR0hrQixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakI7O0FBRUEsU0FBU08sK0JBQVQsQ0FBeUNGLGNBQXpDLEVBQXlEO0FBQ3ZEQSxtQkFBaUJBLGVBQWVrQixNQUFmLENBQXNCLFVBQVNsQixjQUFULEVBQXlCbUIsYUFBekIsRUFBd0M7QUFDN0VuQixxQkFBaUJBLGVBQWVvQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPbkIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFNQyxnQkFBZ0JELGVBQWVxQixHQUFmLENBQW1CLFVBQVNGLGFBQVQsRUFBd0I7QUFDL0QsUUFBSUcscUJBQUo7O0FBRUEsUUFBSUgseUJBQXlCM0IsT0FBN0IsRUFBc0M7QUFDcEM4QixxQkFBZUgsYUFBZixDQURvQyxDQUNMO0FBQ2hDLEtBRkQsTUFFTztBQUNMLFVBQU1JLE9BQU9KLGFBQWI7QUFBQSxVQUE0QjtBQUN0Qkssb0JBQWMsSUFBSTlCLFdBQUosQ0FBZ0I2QixJQUFoQixDQURwQjs7QUFHQUQscUJBQWVFLFdBQWY7QUFDRDs7QUFFRCxXQUFPRixZQUFQO0FBQ0QsR0FicUIsQ0FBdEI7O0FBZUEsU0FBT3JCLGFBQVA7QUFDRDs7QUFFRCxTQUFTUSxRQUFULENBQWtCZ0IsUUFBbEIsRUFBNEJmLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUlnQixTQUFTLEtBQWI7O0FBRUEsTUFBSUQsYUFBYWYsS0FBakIsRUFBd0I7QUFBRTtBQUN4QmdCLGFBQVMsSUFBVDtBQUNELEdBRkQsTUFFTztBQUNMRCxlQUFXdEIsT0FBT3dCLGNBQVAsQ0FBc0JGLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGVBQVNqQixTQUFTZ0IsUUFBVCxFQUFtQmYsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2dCLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gO1xuXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGh0bWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChpc1R5cGVPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xhc3MocHJvcGVydGllcyk7XG5cbiAgICAgICAgZWxlbWVudCA9IGluc3RhbmNlLnJlbmRlcigpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGRFbGVtZW50O1xuXG4gICAgaWYgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIl19