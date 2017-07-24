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
      var sourceObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL29iamVjdC5qcyJdLCJuYW1lcyI6WyJvYmplY3RVdGlsIiwidGFyZ2V0T2JqZWN0Iiwic291cmNlT2JqZWN0Iiwic291cmNlS2V5cyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic291cmNlS2V5IiwidGFyZ2V0UHJvcGVydHkiLCJzb3VyY2VQcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxVOzs7Ozs7OzRCQUNXQyxZLEVBQWlDO0FBQUEsVUFBbkJDLFlBQW1CLHVFQUFKLEVBQUk7O0FBQzlDLFVBQU1DLGFBQWFDLE9BQU9DLElBQVAsQ0FBWUgsWUFBWixDQUFuQjs7QUFFQUMsaUJBQVdHLE9BQVgsQ0FBbUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNyQyxZQUFNQyxpQkFBaUJQLGFBQWFNLFNBQWIsQ0FBdkI7QUFBQSxZQUNNRSxpQkFBaUJQLGFBQWFLLFNBQWIsQ0FEdkI7O0FBR0FOLHFCQUFhTSxTQUFiLElBQTBCTixhQUFhUyxjQUFiLENBQTRCSCxTQUE1QixJQUNJQyxjQURKLFNBQ3NCQyxjQUR0QixHQUVJQSxjQUY5QjtBQUdELE9BUEQ7QUFRRDs7OzBCQUVZUixZLEVBQWNFLFUsRUFBWTtBQUNyQ0EsaUJBQVdHLE9BQVgsQ0FBbUIsVUFBU0MsU0FBVCxFQUFvQjtBQUNyQyxZQUFJTixhQUFhUyxjQUFiLENBQTRCSCxTQUE1QixDQUFKLEVBQTRDO0FBQzFDLGlCQUFPTixhQUFhTSxTQUFiLENBQVA7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJaLFVBQWpCIiwiZmlsZSI6Im9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3Mgb2JqZWN0VXRpbCB7XG4gIHN0YXRpYyBjb21iaW5lKHRhcmdldE9iamVjdCwgc291cmNlT2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlT2JqZWN0KTtcblxuICAgIHNvdXJjZUtleXMuZm9yRWFjaChmdW5jdGlvbihzb3VyY2VLZXkpIHtcbiAgICAgIGNvbnN0IHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0sXG4gICAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgICB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSA9IHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFByb3BlcnR5fSAke3NvdXJjZVByb3BlcnR5fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gICAgc291cmNlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZUtleSkge1xuICAgICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFV0aWw7XG4iXX0=