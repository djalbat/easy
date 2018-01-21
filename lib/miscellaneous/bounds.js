'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: 'getRight',
    value: function getRight() {
      return this.right;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.right - this.left;

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var height = this.bottom - this.top;

      return height;
    }
  }, {
    key: 'isOverlappingMouse',
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: 'fromBoundingClientRect',
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }, {
    key: 'fromTopLeftWidthAndHeight',
    value: function fromTopLeftWidthAndHeight(top, left, width, height) {
      var bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXNjZWxsYW5lb3VzL2JvdW5kcy5qcyJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiYm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93U2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3dTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBdUJDLE1BQXZCLEVBQStCQyxLQUEvQixFQUFzQztBQUFBOztBQUNwQyxTQUFLSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0gsR0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxRQUFRLEtBQUtELEtBQUwsR0FBYSxLQUFLRixJQUFoQzs7QUFFQSxhQUFPRyxLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLFNBQVMsS0FBS0gsTUFBTCxHQUFjLEtBQUtGLEdBQWxDOztBQUVBLGFBQU9LLE1BQVA7QUFDRDs7O3VDQUVrQkMsUSxFQUFVQyxTLEVBQVc7QUFDdEMsYUFBVyxLQUFLUCxHQUFMLEdBQVdNLFFBQVosSUFDQyxLQUFLTCxJQUFMLEdBQVlNLFNBRGIsSUFFQyxLQUFLTCxNQUFMLEdBQWNJLFFBRmYsSUFHQyxLQUFLSCxLQUFMLEdBQWFJLFNBSHhCO0FBSUQ7OzttQ0FFY0MsTSxFQUFRO0FBQ3JCLGFBQVcsS0FBS1IsR0FBTCxHQUFXUSxPQUFPTixNQUFuQixJQUNDLEtBQUtELElBQUwsR0FBWU8sT0FBT0wsS0FEcEIsSUFFQyxLQUFLRCxNQUFMLEdBQWNNLE9BQU9SLEdBRnRCLElBR0MsS0FBS0csS0FBTCxHQUFhSyxPQUFPUCxJQUgvQjtBQUlEOzs7MkNBRTZCUSxrQixFQUFvQjtBQUNoRCxVQUFNQyxrQkFBa0JDLE9BQU9DLFdBQS9CO0FBQUEsVUFBNEM7QUFDdENDLHlCQUFtQkYsT0FBT0csV0FEaEM7QUFBQSxVQUM4QztBQUN4Q2QsWUFBTVMsbUJBQW1CVCxHQUFuQixHQUF5QlUsZUFGckM7QUFBQSxVQUdNVCxPQUFPUSxtQkFBbUJSLElBQW5CLEdBQTBCWSxnQkFIdkM7QUFBQSxVQUlNWCxTQUFTTyxtQkFBbUJQLE1BQW5CLEdBQTRCUSxlQUozQztBQUFBLFVBS01QLFFBQVFNLG1CQUFtQk4sS0FBbkIsR0FBMkJVLGdCQUx6QztBQUFBLFVBTU1MLFNBQVMsSUFBSVQsTUFBSixDQUFXQyxHQUFYLEVBQWdCQyxJQUFoQixFQUFzQkMsTUFBdEIsRUFBOEJDLEtBQTlCLENBTmY7O0FBUUEsYUFBT0ssTUFBUDtBQUNEOzs7OENBRWdDUixHLEVBQUtDLEksRUFBTUcsSyxFQUFPQyxNLEVBQVE7QUFDekQsVUFBTUgsU0FBU0YsTUFBTUssTUFBckI7QUFBQSxVQUNNRixRQUFRRixPQUFPRyxLQURyQjtBQUFBLFVBRU1JLFNBQVMsSUFBSVQsTUFBSixDQUFXQyxHQUFYLEVBQWdCQyxJQUFoQixFQUFzQkMsTUFBdEIsRUFBOEJDLEtBQTlCLENBRmY7O0FBSUEsYUFBT0ssTUFBUDtBQUNEOzs7Ozs7QUFHSE8sT0FBT0MsT0FBUCxHQUFpQmpCLE1BQWpCIiwiZmlsZSI6ImJvdW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IG1vdXNlTGVmdCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSlcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vL1xuICAgICAgICAgIHdpbmRvd1Njcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIl19