'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'findPrototype',
    value: function findPrototype(element, Class) {
      var elements = [];

      findElements(element, Class, elements);

      var lastElement = last(elements),
          prototype = Object.getPrototypeOf(lastElement);

      return prototype;
    }
  }]);

  return util;
}();

module.exports = util;

function findElements(element, Class, elements) {
  if (element instanceof Class) {
    elements.push(element);

    element = Object.getPrototypeOf(element); ///

    findElements(element, Class, elements);
  }
}

function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWxlZ2F0ZS91dGlsLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJlbGVtZW50IiwiQ2xhc3MiLCJlbGVtZW50cyIsImZpbmRFbGVtZW50cyIsImxhc3RFbGVtZW50IiwibGFzdCIsInByb3RvdHlwZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwibW9kdWxlIiwiZXhwb3J0cyIsInB1c2giLCJhcnJheSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxJOzs7Ozs7O2tDQUNpQkMsTyxFQUFTQyxLLEVBQU87QUFDbkMsVUFBSUMsV0FBVyxFQUFmOztBQUVBQyxtQkFBYUgsT0FBYixFQUFzQkMsS0FBdEIsRUFBNkJDLFFBQTdCOztBQUVBLFVBQUlFLGNBQWNDLEtBQUtILFFBQUwsQ0FBbEI7QUFBQSxVQUNJSSxZQUFZQyxPQUFPQyxjQUFQLENBQXNCSixXQUF0QixDQURoQjs7QUFHQSxhQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCWCxJQUFqQjs7QUFFQSxTQUFTSSxZQUFULENBQXNCSCxPQUF0QixFQUErQkMsS0FBL0IsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQzlDLE1BQUlGLG1CQUFtQkMsS0FBdkIsRUFBOEI7QUFDNUJDLGFBQVNTLElBQVQsQ0FBY1gsT0FBZDs7QUFFQUEsY0FBVU8sT0FBT0MsY0FBUCxDQUFzQlIsT0FBdEIsQ0FBVixDQUg0QixDQUdjOztBQUUxQ0csaUJBQWFILE9BQWIsRUFBc0JDLEtBQXRCLEVBQTZCQyxRQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0csSUFBVCxDQUFjTyxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTUMsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUMiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBmaW5kUHJvdG90eXBlKGVsZW1lbnQsIENsYXNzKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW107XG5cbiAgICBmaW5kRWxlbWVudHMoZWxlbWVudCwgQ2xhc3MsIGVsZW1lbnRzKTtcblxuICAgIHZhciBsYXN0RWxlbWVudCA9IGxhc3QoZWxlbWVudHMpLFxuICAgICAgICBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobGFzdEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByb3RvdHlwZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG5cbmZ1bmN0aW9uIGZpbmRFbGVtZW50cyhlbGVtZW50LCBDbGFzcywgZWxlbWVudHMpIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG5cbiAgICBlbGVtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsZW1lbnQpOyAvLy9cblxuICAgIGZpbmRFbGVtZW50cyhlbGVtZW50LCBDbGFzcywgZWxlbWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbiJdfQ==