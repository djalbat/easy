'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var objectUtil = function () {
  function objectUtil() {
    _classCallCheck(this, objectUtil);
  }

  _createClass(objectUtil, null, [{
    key: 'combine',
    value: function combine(targetObject) {
      var sourceObject = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var sourceKeys = Object.keys(sourceObject);

      sourceKeys.forEach(function (sourceKey) {
        var targetProperty = targetObject[sourceKey],
            sourceProperty = sourceObject[sourceKey];

        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? targetProperty + ' ' + sourceProperty : sourceProperty;
      });
    }
  }, {
    key: 'prune',
    value: function prune(targetObject, sourceKeys) {
      sourceKeys.forEach(function (sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
          delete targetObject[sourceKey];
        }
      });
    }
  }]);

  return objectUtil;
}();

module.exports = objectUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL29iamVjdC5qcyJdLCJuYW1lcyI6WyJvYmplY3RVdGlsIiwidGFyZ2V0T2JqZWN0Iiwic291cmNlT2JqZWN0Iiwic291cmNlS2V5cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic291cmNlS2V5IiwidGFyZ2V0UHJvcGVydHkiLCJzb3VyY2VQcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxVO1dBQUFBLFU7MEJBQUFBLFU7OztlQUFBQSxVOzs0QkFDV0MsWSxFQUFpQztBQUFBLFVBQW5CQyxZQUFtQix5REFBSixFQUFJOztBQUM5QyxVQUFNQyxhQUFhQyxPQUFPQyxJQUFQLENBQVlILFlBQVosQ0FBbkI7O0FBRUFDLGlCQUFXRyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsWUFBTUMsaUJBQWlCUCxhQUFhTSxTQUFiLENBQXZCO0FBQUEsWUFDTUUsaUJBQWlCUCxhQUFhSyxTQUFiLENBRHZCOztBQUdBTixxQkFBYU0sU0FBYixJQUEwQk4sYUFBYVMsY0FBYixDQUE0QkgsU0FBNUIsSUFDSUMsY0FESixTQUNzQkMsY0FEdEIsR0FFSUEsY0FGOUI7QUFHRCxPQVBEO0FBUUQ7OzswQkFFWVIsWSxFQUFjRSxVLEVBQVk7QUFDckNBLGlCQUFXRyxPQUFYLENBQW1CLFVBQVNDLFNBQVQsRUFBb0I7QUFDckMsWUFBSU4sYUFBYVMsY0FBYixDQUE0QkgsU0FBNUIsQ0FBSixFQUE0QztBQUMxQyxpQkFBT04sYUFBYU0sU0FBYixDQUFQO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7OztTQXBCR1AsVTs7O0FBdUJOVyxPQUFPQyxPQUFQLEdBQWlCWixVQUFqQiIsImZpbGUiOiJvYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIG9iamVjdFV0aWwge1xuICBzdGF0aWMgY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gICAgY29uc3Qgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZU9iamVjdCk7XG5cbiAgICBzb3VyY2VLZXlzLmZvckVhY2goZnVuY3Rpb24oc291cmNlS2V5KSB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldE9iamVjdFtzb3VyY2VLZXldLFxuICAgICAgICAgICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2VPYmplY3Rbc291cmNlS2V5XTtcblxuICAgICAgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0gPSB0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRQcm9wZXJ0eX0gJHtzb3VyY2VQcm9wZXJ0eX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVByb3BlcnR5O1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHBydW5lKHRhcmdldE9iamVjdCwgc291cmNlS2V5cykge1xuICAgIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICAgIGlmICh0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RVdGlsO1xuIl19