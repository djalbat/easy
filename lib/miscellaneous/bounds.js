"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bounds = /*#__PURE__*/function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: "getTop",
    value: function getTop() {
      return this.top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.right;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width = this.right - this.left;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = this.bottom - this.top;
      return height;
    }
  }, {
    key: "setTop",
    value: function setTop(top) {
      this.top = top;
    }
  }, {
    key: "setLeft",
    value: function setLeft(left) {
      this.left = left;
    }
  }, {
    key: "setBottom",
    value: function setBottom(bottom) {
      this.bottom = bottom;
    }
  }, {
    key: "setRight",
    value: function setRight(right) {
      this.right = right;
    }
  }, {
    key: "shift",
    value: function shift(horizontalOffset, verticalOffset) {
      this.top += verticalOffset;
      this.left += horizontalOffset;
      this.bottom += verticalOffset;
      this.right += horizontalOffset;
    }
  }, {
    key: "isOverlappingMouse",
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: "areOverlapping",
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: "fromBoundingClientRect",
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
    key: "fromTopLeftWidthAndHeight",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdW5kcy5qcyJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImhvcml6b250YWxPZmZzZXQiLCJ2ZXJ0aWNhbE9mZnNldCIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiYm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93U2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3dTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBQ3BDLFNBQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLSCxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLEtBQUssR0FBRyxLQUFLRCxLQUFMLEdBQWEsS0FBS0YsSUFBaEM7QUFFQSxhQUFPRyxLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLE1BQU0sR0FBRyxLQUFLSCxNQUFMLEdBQWMsS0FBS0YsR0FBbEM7QUFFQSxhQUFPSyxNQUFQO0FBQ0Q7OzsyQkFFTUwsRyxFQUFLO0FBQ1YsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7MEJBRUtHLGdCLEVBQWtCQyxjLEVBQWdCO0FBQ3RDLFdBQUtQLEdBQUwsSUFBWU8sY0FBWjtBQUNBLFdBQUtOLElBQUwsSUFBYUssZ0JBQWI7QUFDQSxXQUFLSixNQUFMLElBQWVLLGNBQWY7QUFDQSxXQUFLSixLQUFMLElBQWNHLGdCQUFkO0FBQ0Q7Ozt1Q0FFa0JFLFEsRUFBVUMsUyxFQUFXO0FBQ3RDLGFBQVcsS0FBS1QsR0FBTCxHQUFXUSxRQUFaLElBQ0MsS0FBS1AsSUFBTCxHQUFZUSxTQURiLElBRUMsS0FBS1AsTUFBTCxHQUFjTSxRQUZmLElBR0MsS0FBS0wsS0FBTCxHQUFhTSxTQUh4QjtBQUlEOzs7bUNBRWNDLE0sRUFBUTtBQUNyQixhQUFXLEtBQUtWLEdBQUwsR0FBV1UsTUFBTSxDQUFDUixNQUFuQixJQUNDLEtBQUtELElBQUwsR0FBWVMsTUFBTSxDQUFDUCxLQURwQixJQUVDLEtBQUtELE1BQUwsR0FBY1EsTUFBTSxDQUFDVixHQUZ0QixJQUdDLEtBQUtHLEtBQUwsR0FBYU8sTUFBTSxDQUFDVCxJQUgvQjtBQUlEOzs7MkNBRTZCVSxrQixFQUFvQjtBQUNoRCxVQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBL0I7QUFBQSxVQUE0QztBQUN0Q0MsTUFBQUEsZ0JBQWdCLEdBQUdGLE1BQU0sQ0FBQ0csV0FEaEM7QUFBQSxVQUM4QztBQUN4Q2hCLE1BQUFBLEdBQUcsR0FBR1csa0JBQWtCLENBQUNYLEdBQW5CLEdBQXlCWSxlQUZyQztBQUFBLFVBR01YLElBQUksR0FBR1Usa0JBQWtCLENBQUNWLElBQW5CLEdBQTBCYyxnQkFIdkM7QUFBQSxVQUlNYixNQUFNLEdBQUdTLGtCQUFrQixDQUFDVCxNQUFuQixHQUE0QlUsZUFKM0M7QUFBQSxVQUtNVCxLQUFLLEdBQUdRLGtCQUFrQixDQUFDUixLQUFuQixHQUEyQlksZ0JBTHpDO0FBQUEsVUFNTUwsTUFBTSxHQUFHLElBQUlYLE1BQUosQ0FBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixDQU5mO0FBUUEsYUFBT08sTUFBUDtBQUNEOzs7OENBRWdDVixHLEVBQUtDLEksRUFBTUcsSyxFQUFPQyxNLEVBQVE7QUFDekQsVUFBTUgsTUFBTSxHQUFHRixHQUFHLEdBQUdLLE1BQXJCO0FBQUEsVUFDTUYsS0FBSyxHQUFHRixJQUFJLEdBQUdHLEtBRHJCO0FBQUEsVUFFTU0sTUFBTSxHQUFHLElBQUlYLE1BQUosQ0FBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixDQUZmO0FBSUEsYUFBT08sTUFBUDtBQUNEOzs7Ozs7QUFHSE8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIFxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbSkge1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgc2V0UmlnaHQocmlnaHQpIHtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzaGlmdChob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldCkge1xuICAgIHRoaXMudG9wICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMubGVmdCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMucmlnaHQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiJdfQ==