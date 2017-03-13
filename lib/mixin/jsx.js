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

var jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi9qc3guanMiXSwibmFtZXMiOlsiYXBwbHlQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJuYW1lIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImFwcGVuZCIsImJpbmQiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJldmVudFR5cGUiLCJldmVudFR5cGVGcm9tTmFtZSIsImhhbmRsZXIiLCJvbiIsImFwcGx5UHJvcGVydHlBc0F0dHJpYnV0ZSIsImpzeE1peGluIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnQiLCJrZXkiLCJkb21FbGVtZW50IiwiYWRkQXR0cmlidXRlIiwibWF0Y2giLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxVQUF6QixFQUFxQztBQUNuQyxNQUFNQyxRQUFRQyxPQUFPQyxJQUFQLENBQVlILFVBQVosQ0FBZDs7QUFFQUMsUUFBTUcsT0FBTixDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQixRQUFJQSxTQUFTLGVBQWIsRUFBOEI7QUFDNUIsVUFBTUMsZ0JBQWdCTixXQUFXLGVBQVgsQ0FBdEI7O0FBRUFNLG9CQUFjRixPQUFkLENBQXNCLFVBQVNHLFlBQVQsRUFBdUI7QUFDM0MsYUFBS0MsTUFBTCxDQUFZRCxZQUFaO0FBQ0QsT0FGcUIsQ0FFcEJFLElBRm9CLENBRWYsSUFGZSxDQUF0QjtBQUdELEtBTkQsTUFNTztBQUNMLFVBQU1DLFFBQVFWLFdBQVdLLElBQVgsQ0FBZDs7QUFFQSxVQUFJTSxjQUFjTixJQUFkLENBQUosRUFBeUI7QUFDdkIsWUFBTU8sWUFBWUMsa0JBQWtCUixJQUFsQixDQUFsQjtBQUFBLFlBQ01TLFVBQVVKLEtBRGhCLENBRHVCLENBRUM7O0FBRXhCLGFBQUtLLEVBQUwsQ0FBUUgsU0FBUixFQUFtQkUsT0FBbkI7QUFDRCxPQUxELE1BS087QUFDTEUsaUNBQXlCLElBQXpCLEVBQStCWCxJQUEvQixFQUFxQ0ssS0FBckM7QUFDRDtBQUNGO0FBQ0YsR0FuQmEsQ0FtQlpELElBbkJZLENBbUJQLElBbkJPLENBQWQ7QUFvQkQ7O0FBRUQsSUFBTVEsV0FBVztBQUNmbEIsbUJBQWlCQTtBQURGLENBQWpCOztBQUlBbUIsT0FBT0MsT0FBUCxHQUFpQkYsUUFBakI7O0FBRUEsU0FBU0Qsd0JBQVQsQ0FBa0NJLE9BQWxDLEVBQTJDZixJQUEzQyxFQUFpREssS0FBakQsRUFBd0Q7QUFDdEQsTUFBSUwsU0FBUyxXQUFiLEVBQTBCO0FBQ3hCQSxXQUFPLE9BQVA7QUFDRDs7QUFFRCxNQUFJQSxTQUFTLFNBQWIsRUFBd0I7QUFDdEJBLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksUUFBT0ssS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFNUCxPQUFPRCxPQUFPQyxJQUFQLENBQVlPLEtBQVosQ0FBYjs7QUFFQVAsU0FBS0MsT0FBTCxDQUFhLFVBQVVpQixHQUFWLEVBQWU7QUFDMUJELGNBQVFFLFVBQVIsQ0FBbUJqQixJQUFuQixFQUF5QmdCLEdBQXpCLElBQWdDWCxNQUFNVyxHQUFOLENBQWhDO0FBQ0QsS0FGWSxDQUVYWixJQUZXLENBRU4sSUFGTSxDQUFiO0FBR0QsR0FORCxNQU1PLElBQUksT0FBT0MsS0FBUCxLQUFpQixTQUFyQixFQUFnQztBQUNyQyxRQUFJQSxLQUFKLEVBQVc7QUFDVEEsY0FBUUwsSUFBUixDQURTLENBQ0s7O0FBRWRlLGNBQVFHLFlBQVIsQ0FBcUJsQixJQUFyQixFQUEyQkssS0FBM0I7QUFDRDtBQUNGLEdBTk0sTUFNQTtBQUNMVSxZQUFRRyxZQUFSLENBQXFCbEIsSUFBckIsRUFBMkJLLEtBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxhQUFULENBQXVCTixJQUF2QixFQUE2QjtBQUMzQixTQUFPQSxLQUFLbUIsS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNYLGlCQUFULENBQTJCUixJQUEzQixFQUFpQztBQUMvQixTQUFPQSxLQUFLb0IsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixFQUFQO0FBQ0QiLCJmaWxlIjoianN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChuYW1lID09PSAnY2hpbGRFbGVtZW50cycpIHtcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBwcm9wZXJ0aWVzWydjaGlsZEVsZW1lbnRzJ107XG5cbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoY2hpbGRFbGVtZW50KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgICAgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgIHRoaXMub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGx5UHJvcGVydHlBc0F0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganN4TWl4aW47XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydHlBc0F0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50VHlwZUZyb21OYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCk7XG59XG4iXX0=