'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyProperties(properties) {
  var names = Object.keys(properties);

  names.forEach(function (name) {
    if (name === 'childElements') {
      var childElements = properties['childElements'];

      childElements.forEach(function (childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      var value = properties[name];

      if (isHandlerName(name)) {
        var eventType = eventTypeFromName(name),
            handler = value; ///

        this.on(eventType, handler);
      } else {
        applyPropertyAsAttribute(this, name, value);
      }
    }
  }.bind(this));
}

var jsx = {
  applyProperties: applyProperties
};

module.exports = jsx;

function applyPropertyAsAttribute(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9qc3guanMiXSwibmFtZXMiOlsiYXBwbHlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImFwcGVuZCIsImJpbmQiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJldmVudFR5cGUiLCJldmVudFR5cGVGcm9tTmFtZSIsImhhbmRsZXIiLCJvbiIsImFwcGx5UHJvcGVydHlBc0F0dHJpYnV0ZSIsImpzeCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbGVtZW50Iiwia2V5IiwiZG9tRWxlbWVudCIsImFkZEF0dHJpYnV0ZSIsIm1hdGNoIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsVUFBekIsRUFBcUM7QUFDbkMsTUFBTUMsUUFBUUMsT0FBT0MsSUFBUCxDQUFZSCxVQUFaLENBQWQ7O0FBRUFDLFFBQU1HLE9BQU4sQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0IsUUFBSUEsU0FBUyxlQUFiLEVBQThCO0FBQzVCLFVBQU1DLGdCQUFnQk4sV0FBVyxlQUFYLENBQXRCOztBQUVBTSxvQkFBY0YsT0FBZCxDQUFzQixVQUFTRyxZQUFULEVBQXVCO0FBQzNDLGFBQUtDLE1BQUwsQ0FBWUQsWUFBWjtBQUNELE9BRnFCLENBRXBCRSxJQUZvQixDQUVmLElBRmUsQ0FBdEI7QUFHRCxLQU5ELE1BTU87QUFDTCxVQUFNQyxRQUFRVixXQUFXSyxJQUFYLENBQWQ7O0FBRUEsVUFBSU0sY0FBY04sSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCLFlBQU1PLFlBQVlDLGtCQUFrQlIsSUFBbEIsQ0FBbEI7QUFBQSxZQUNNUyxVQUFVSixLQURoQixDQUR1QixDQUVDOztBQUV4QixhQUFLSyxFQUFMLENBQVFILFNBQVIsRUFBbUJFLE9BQW5CO0FBQ0QsT0FMRCxNQUtPO0FBQ0xFLGlDQUF5QixJQUF6QixFQUErQlgsSUFBL0IsRUFBcUNLLEtBQXJDO0FBQ0Q7QUFDRjtBQUNGLEdBbkJhLENBbUJaRCxJQW5CWSxDQW1CUCxJQW5CTyxDQUFkO0FBb0JEOztBQUVELElBQU1RLE1BQU07QUFDVmxCLG1CQUFpQkE7QUFEUCxDQUFaOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQkYsR0FBakI7O0FBRUEsU0FBU0Qsd0JBQVQsQ0FBa0NJLE9BQWxDLEVBQTJDZixJQUEzQyxFQUFpREssS0FBakQsRUFBd0Q7QUFDdEQsTUFBSUwsU0FBUyxXQUFiLEVBQTBCO0FBQ3hCQSxXQUFPLE9BQVA7QUFDRDs7QUFFRCxNQUFJQSxTQUFTLFNBQWIsRUFBd0I7QUFDdEJBLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksUUFBT0ssS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFNUCxPQUFPRCxPQUFPQyxJQUFQLENBQVlPLEtBQVosQ0FBYjs7QUFFQVAsU0FBS0MsT0FBTCxDQUFhLFVBQVVpQixHQUFWLEVBQWU7QUFDMUJELGNBQVFFLFVBQVIsQ0FBbUJqQixJQUFuQixFQUF5QmdCLEdBQXpCLElBQWdDWCxNQUFNVyxHQUFOLENBQWhDO0FBQ0QsS0FGWSxDQUVYWixJQUZXLENBRU4sSUFGTSxDQUFiO0FBR0QsR0FORCxNQU1PLElBQUksT0FBT0MsS0FBUCxLQUFpQixTQUFyQixFQUFnQztBQUNyQyxRQUFJQSxLQUFKLEVBQVc7QUFDVEEsY0FBUUwsSUFBUixDQURTLENBQ0s7O0FBRWRlLGNBQVFHLFlBQVIsQ0FBcUJsQixJQUFyQixFQUEyQkssS0FBM0I7QUFDRDtBQUNGLEdBTk0sTUFNQTtBQUNMVSxZQUFRRyxZQUFSLENBQXFCbEIsSUFBckIsRUFBMkJLLEtBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxhQUFULENBQXVCTixJQUF2QixFQUE2QjtBQUMzQixTQUFPQSxLQUFLbUIsS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNYLGlCQUFULENBQTJCUixJQUEzQixFQUFpQztBQUMvQixTQUFPQSxLQUFLb0IsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFQO0FBQ0QiLCJmaWxlIjoianN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnY2hpbGRFbGVtZW50cycpIHtcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBwcm9wZXJ0aWVzWydjaGlsZEVsZW1lbnRzJ107XG5cbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoY2hpbGRFbGVtZW50KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgICAgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgIHRoaXMub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGx5UHJvcGVydHlBc0F0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBqc3ggPSB7XG4gIGFwcGx5UHJvcGVydGllczogYXBwbHlQcm9wZXJ0aWVzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeDtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0eUFzQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==