'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require('./mixins/key'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    mouseMixins = require('./mixins/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: 'assign',
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler, object) {
      var intermediateHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultIntermediateResizeHandler;

      var eventTypes = 'resize';

      this.on(eventTypes, handler, object, intermediateHandler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler, object) {
      var eventTypes = 'resize';

      this.off(eventTypes, handler, object);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, keyMixins);
Object.assign(Window.prototype, eventMixins);
Object.assign(Window.prototype, clickMixins);
Object.assign(Window.prototype, mouseMixins);

module.exports = new Window(); ///

function defaultIntermediateResizeHandler(handler, event, element) {
  var window = element,
      ///
  width = window.getWidth(),
      height = window.getHeight();

  handler.apply(window, width, height, event);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aW5kb3cuanMiXSwibmFtZXMiOlsia2V5TWl4aW5zIiwicmVxdWlyZSIsImV2ZW50TWl4aW5zIiwiY2xpY2tNaXhpbnMiLCJtb3VzZU1peGlucyIsIldpbmRvdyIsImRvbUVsZW1lbnQiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJzb3VyY2VzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsImhhbmRsZXIiLCJvYmplY3QiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIiLCJldmVudFR5cGVzIiwib24iLCJvZmYiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXZlbnQiLCJlbGVtZW50Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxnQkFBUixDQURwQjtBQUFBLElBRU1FLGNBQWNGLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGdCQUFSLENBSHBCOztJQUtNSSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxVQUFMLEdBQWtCQyxNQUFsQixDQURZLENBQ2M7QUFDM0I7Ozs7NkJBRWtCO0FBQ2pCLFVBQU1DLFNBQVMsS0FBS0YsVUFBcEIsQ0FEaUIsQ0FDZTs7QUFEZix3Q0FBVEcsT0FBUztBQUFUQSxlQUFTO0FBQUE7O0FBR2pCQyxhQUFPQyxNQUFQLGdCQUFjSCxNQUFkLFNBQXlCQyxPQUF6QjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFVBQUwsQ0FBZ0JNLFVBQXZCO0FBQW9DLEssQ0FBQzs7OztnQ0FFdEM7QUFBRSxhQUFPLEtBQUtOLFVBQUwsQ0FBZ0JPLFdBQXZCO0FBQXFDLEssQ0FBQzs7OzttQ0FFckM7QUFBRSxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFdBQXZCO0FBQXFDLEssQ0FBRTs7OztvQ0FFeEM7QUFBRSxhQUFPLEtBQUtSLFVBQUwsQ0FBZ0JTLFdBQXZCO0FBQXFDLEssQ0FBQzs7Ozs2QkFFL0NDLE8sRUFBU0MsTSxFQUFnRTtBQUFBLFVBQXhEQyxtQkFBd0QsdUVBQWxDQyxnQ0FBa0M7O0FBQ2hGLFVBQU1DLGFBQWEsUUFBbkI7O0FBRUEsV0FBS0MsRUFBTCxDQUFRRCxVQUFSLEVBQW9CSixPQUFwQixFQUE2QkMsTUFBN0IsRUFBcUNDLG1CQUFyQztBQUNEOzs7OEJBRVNGLE8sRUFBU0MsTSxFQUFRO0FBQ3pCLFVBQU1HLGFBQWEsUUFBbkI7O0FBRUEsV0FBS0UsR0FBTCxDQUFTRixVQUFULEVBQXFCSixPQUFyQixFQUE4QkMsTUFBOUI7QUFDRDs7Ozs7O0FBR0hQLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDdkIsU0FBaEM7QUFDQVUsT0FBT0MsTUFBUCxDQUFjTixPQUFPa0IsU0FBckIsRUFBZ0NyQixXQUFoQztBQUNBUSxPQUFPQyxNQUFQLENBQWNOLE9BQU9rQixTQUFyQixFQUFnQ3BCLFdBQWhDO0FBQ0FPLE9BQU9DLE1BQVAsQ0FBY04sT0FBT2tCLFNBQXJCLEVBQWdDbkIsV0FBaEM7O0FBRUFvQixPQUFPQyxPQUFQLEdBQWlCLElBQUlwQixNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVNjLGdDQUFULENBQTBDSCxPQUExQyxFQUFtRFUsS0FBbkQsRUFBMERDLE9BQTFELEVBQW1FO0FBQ2pFLE1BQU1wQixTQUFTb0IsT0FBZjtBQUFBLE1BQXdCO0FBQ2xCQyxVQUFRckIsT0FBT3NCLFFBQVAsRUFEZDtBQUFBLE1BRU1DLFNBQVN2QixPQUFPd0IsU0FBUCxFQUZmOztBQUlBZixVQUFRZ0IsS0FBUixDQUFjekIsTUFBZCxFQUFzQnFCLEtBQXRCLEVBQTZCRSxNQUE3QixFQUFxQ0osS0FBckM7QUFDRCIsImZpbGUiOiJ3aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGtleU1peGlucyA9IHJlcXVpcmUoJy4vbWl4aW5zL2tleScpLFxuICAgICAgZXZlbnRNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbnMgPSByZXF1aXJlKCcuL21peGlucy9tb3VzZScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyLCBvYmplY3QsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZXMgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIG9iamVjdCwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlciwgb2JqZWN0KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlcyA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlcywgaGFuZGxlciwgb2JqZWN0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB3aW5kb3cuZ2V0SGVpZ2h0KCk7XG4gIFxuICBoYW5kbGVyLmFwcGx5KHdpbmRvdywgd2lkdGgsIGhlaWdodCwgZXZlbnQpO1xufVxuIl19