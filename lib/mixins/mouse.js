'use strict';

function onMouseUp(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseup', handler, object, intermediateHandler);
}

function onMouseDown(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mousedown', handler, object, intermediateHandler);
}

function onMouseOver(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseover', handler, object, intermediateHandler);
}

function onMouseOut(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mouseout', handler, object, intermediateHandler);
}

function onMouseMove(handler, object) {
  var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateHandler;

  this.on('mousemove', handler, object, intermediateHandler);
}

function offMouseUp(handler, object) {
  this.off('mouseup', handler, object);
}

function offMouseDown(handler, object) {
  this.off('mousedown', handler, object);
}

function offMouseOver(handler, object) {
  this.off('mouseover', handler, object);
}

function offMouseOut(handler, object) {
  this.off('mouseout', handler, object);
}

function offMouseMove(handler, object) {
  this.off('mousemove', handler, object);
}

module.exports = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

function defaultIntermediateHandler(handler, event, targetElement) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button; ///

  handler(mouseTop, mouseLeft, mouseButton, event, targetElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbnMvbW91c2UuanMiXSwibmFtZXMiOlsib25Nb3VzZVVwIiwiaGFuZGxlciIsIm9iamVjdCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlciIsIm9uIiwib25Nb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJvbk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmYiLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU92ZXIiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlTW92ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJtb3VzZVRvcCIsInBhZ2VZIiwibW91c2VMZWZ0IiwicGFnZVgiLCJtb3VzZUJ1dHRvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJDLE1BQTVCLEVBQXNGO0FBQUEsTUFBbERDLG1CQUFrRCx1RUFBNUJDLDBCQUE0Qjs7QUFDcEYsT0FBS0MsRUFBTCxDQUFRLFNBQVIsRUFBbUJKLE9BQW5CLEVBQTRCQyxNQUE1QixFQUFvQ0MsbUJBQXBDO0FBQ0Q7O0FBRUQsU0FBU0csV0FBVCxDQUFxQkwsT0FBckIsRUFBOEJDLE1BQTlCLEVBQXdGO0FBQUEsTUFBbERDLG1CQUFrRCx1RUFBNUJDLDBCQUE0Qjs7QUFDdEYsT0FBS0MsRUFBTCxDQUFRLFdBQVIsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QixFQUFzQ0MsbUJBQXRDO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQk4sT0FBckIsRUFBOEJDLE1BQTlCLEVBQXdGO0FBQUEsTUFBbERDLG1CQUFrRCx1RUFBNUJDLDBCQUE0Qjs7QUFDdEYsT0FBS0MsRUFBTCxDQUFRLFdBQVIsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QixFQUFzQ0MsbUJBQXRDO0FBQ0Q7O0FBRUQsU0FBU0ssVUFBVCxDQUFvQlAsT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXVGO0FBQUEsTUFBbERDLG1CQUFrRCx1RUFBNUJDLDBCQUE0Qjs7QUFDckYsT0FBS0MsRUFBTCxDQUFRLFVBQVIsRUFBb0JKLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQ0MsbUJBQXJDO0FBQ0Q7O0FBRUQsU0FBU00sV0FBVCxDQUFxQlIsT0FBckIsRUFBOEJDLE1BQTlCLEVBQXdGO0FBQUEsTUFBbERDLG1CQUFrRCx1RUFBNUJDLDBCQUE0Qjs7QUFDdEYsT0FBS0MsRUFBTCxDQUFRLFdBQVIsRUFBcUJKLE9BQXJCLEVBQThCQyxNQUE5QixFQUFzQ0MsbUJBQXRDO0FBQ0Q7O0FBRUQsU0FBU08sVUFBVCxDQUFvQlQsT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXFDO0FBQUUsT0FBS1MsR0FBTCxDQUFTLFNBQVQsRUFBb0JWLE9BQXBCLEVBQTZCQyxNQUE3QjtBQUF1Qzs7QUFFOUUsU0FBU1UsWUFBVCxDQUFzQlgsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQUUsT0FBS1MsR0FBTCxDQUFTLFdBQVQsRUFBc0JWLE9BQXRCLEVBQStCQyxNQUEvQjtBQUF5Qzs7QUFFbEYsU0FBU1csWUFBVCxDQUFzQlosT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQUUsT0FBS1MsR0FBTCxDQUFTLFdBQVQsRUFBc0JWLE9BQXRCLEVBQStCQyxNQUEvQjtBQUF5Qzs7QUFFbEYsU0FBU1ksV0FBVCxDQUFxQmIsT0FBckIsRUFBOEJDLE1BQTlCLEVBQXNDO0FBQUUsT0FBS1MsR0FBTCxDQUFTLFVBQVQsRUFBcUJWLE9BQXJCLEVBQThCQyxNQUE5QjtBQUF3Qzs7QUFFaEYsU0FBU2EsWUFBVCxDQUFzQmQsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQUUsT0FBS1MsR0FBTCxDQUFTLFdBQVQsRUFBc0JWLE9BQXRCLEVBQStCQyxNQUEvQjtBQUF5Qzs7QUFFbEZjLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmpCLGFBQVdBLFNBREk7QUFFZk0sZUFBYUEsV0FGRTtBQUdmQyxlQUFhQSxXQUhFO0FBSWZDLGNBQVlBLFVBSkc7QUFLZkMsZUFBYUEsV0FMRTtBQU1mQyxjQUFZQSxVQU5HO0FBT2ZFLGdCQUFjQSxZQVBDO0FBUWZDLGdCQUFjQSxZQVJDO0FBU2ZDLGVBQWFBLFdBVEU7QUFVZkMsZ0JBQWNBO0FBVkMsQ0FBakI7O0FBYUEsU0FBU1gsMEJBQVQsQ0FBb0NILE9BQXBDLEVBQTZDaUIsS0FBN0MsRUFBb0RDLGFBQXBELEVBQW1FO0FBQ2pFLE1BQU1DLFdBQVdGLE1BQU1HLEtBQXZCO0FBQUEsTUFBK0I7QUFDekJDLGNBQVlKLE1BQU1LLEtBRHhCO0FBQUEsTUFDK0I7QUFDekJDLGdCQUFjTixNQUFNTyxNQUYxQixDQURpRSxDQUcvQjs7QUFFbEN4QixVQUFRbUIsUUFBUixFQUFrQkUsU0FBbEIsRUFBNkJFLFdBQTdCLEVBQTBDTixLQUExQyxFQUFpREMsYUFBakQ7QUFDRCIsImZpbGUiOiJtb3VzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNldXAnLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3ZlcihoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW92ZXInLCBoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlb3V0JywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2Vtb3ZlJywgaGFuZGxlciwgb2JqZWN0LCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ21vdXNlZG93bicsIGhhbmRsZXIsIG9iamVjdCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKGhhbmRsZXIsIG9iamVjdCkgeyB0aGlzLm9mZignbW91c2VvdmVyJywgaGFuZGxlciwgb2JqZWN0KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU91dChoYW5kbGVyLCBvYmplY3QpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgaGFuZGxlciwgb2JqZWN0KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUoaGFuZGxlciwgb2JqZWN0KSB7IHRoaXMub2ZmKCdtb3VzZW1vdmUnLCBoYW5kbGVyLCBvYmplY3QpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbk1vdXNlVXA6IG9uTW91c2VVcCxcbiAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICBvbk1vdXNlT3Zlcjogb25Nb3VzZU92ZXIsXG4gIG9uTW91c2VPdXQ6IG9uTW91c2VPdXQsXG4gIG9uTW91c2VNb3ZlOiBvbk1vdXNlTW92ZSxcbiAgb2ZmTW91c2VVcDogb2ZmTW91c2VVcCxcbiAgb2ZmTW91c2VEb3duOiBvZmZNb3VzZURvd24sXG4gIG9mZk1vdXNlT3Zlcjogb2ZmTW91c2VPdmVyLFxuICBvZmZNb3VzZU91dDogb2ZmTW91c2VPdXQsXG4gIG9mZk1vdXNlTW92ZTogb2ZmTW91c2VNb3ZlXG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b247IC8vL1xuICBcbiAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xufVxuIl19