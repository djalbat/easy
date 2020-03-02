'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdW5kcy5qcyJdLCJuYW1lcyI6WyJCb3VuZHMiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImhvcml6b250YWxPZmZzZXQiLCJ2ZXJ0aWNhbE9mZnNldCIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiYm91bmRzIiwiYm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93U2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ3aW5kb3dTY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQUE7O0FBQ3BDLFNBQUtILEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLSCxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLEtBQUssR0FBRyxLQUFLRCxLQUFMLEdBQWEsS0FBS0YsSUFBaEM7QUFFQSxhQUFPRyxLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1DLE1BQU0sR0FBRyxLQUFLSCxNQUFMLEdBQWMsS0FBS0YsR0FBbEM7QUFFQSxhQUFPSyxNQUFQO0FBQ0Q7OzsyQkFFTUwsRyxFQUFLO0FBQ1YsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7MEJBRUtHLGdCLEVBQWtCQyxjLEVBQWdCO0FBQ3RDLFdBQUtQLEdBQUwsSUFBWU8sY0FBWjtBQUNBLFdBQUtOLElBQUwsSUFBYUssZ0JBQWI7QUFDQSxXQUFLSixNQUFMLElBQWVLLGNBQWY7QUFDQSxXQUFLSixLQUFMLElBQWNHLGdCQUFkO0FBQ0Q7Ozt1Q0FFa0JFLFEsRUFBVUMsUyxFQUFXO0FBQ3RDLGFBQVcsS0FBS1QsR0FBTCxHQUFXUSxRQUFaLElBQ0MsS0FBS1AsSUFBTCxHQUFZUSxTQURiLElBRUMsS0FBS1AsTUFBTCxHQUFjTSxRQUZmLElBR0MsS0FBS0wsS0FBTCxHQUFhTSxTQUh4QjtBQUlEOzs7bUNBRWNDLE0sRUFBUTtBQUNyQixhQUFXLEtBQUtWLEdBQUwsR0FBV1UsTUFBTSxDQUFDUixNQUFuQixJQUNDLEtBQUtELElBQUwsR0FBWVMsTUFBTSxDQUFDUCxLQURwQixJQUVDLEtBQUtELE1BQUwsR0FBY1EsTUFBTSxDQUFDVixHQUZ0QixJQUdDLEtBQUtHLEtBQUwsR0FBYU8sTUFBTSxDQUFDVCxJQUgvQjtBQUlEOzs7MkNBRTZCVSxrQixFQUFvQjtBQUNoRCxVQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBL0I7QUFBQSxVQUE0QztBQUN0Q0MsTUFBQUEsZ0JBQWdCLEdBQUdGLE1BQU0sQ0FBQ0csV0FEaEM7QUFBQSxVQUM4QztBQUN4Q2hCLE1BQUFBLEdBQUcsR0FBR1csa0JBQWtCLENBQUNYLEdBQW5CLEdBQXlCWSxlQUZyQztBQUFBLFVBR01YLElBQUksR0FBR1Usa0JBQWtCLENBQUNWLElBQW5CLEdBQTBCYyxnQkFIdkM7QUFBQSxVQUlNYixNQUFNLEdBQUdTLGtCQUFrQixDQUFDVCxNQUFuQixHQUE0QlUsZUFKM0M7QUFBQSxVQUtNVCxLQUFLLEdBQUdRLGtCQUFrQixDQUFDUixLQUFuQixHQUEyQlksZ0JBTHpDO0FBQUEsVUFNTUwsTUFBTSxHQUFHLElBQUlYLE1BQUosQ0FBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixDQU5mO0FBUUEsYUFBT08sTUFBUDtBQUNEOzs7OENBRWdDVixHLEVBQUtDLEksRUFBTUcsSyxFQUFPQyxNLEVBQVE7QUFDekQsVUFBTUgsTUFBTSxHQUFHRixHQUFHLEdBQUdLLE1BQXJCO0FBQUEsVUFDTUYsS0FBSyxHQUFHRixJQUFJLEdBQUdHLEtBRHJCO0FBQUEsVUFFTU0sTUFBTSxHQUFHLElBQUlYLE1BQUosQ0FBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixDQUZmO0FBSUEsYUFBT08sTUFBUDtBQUNEOzs7Ozs7QUFHSE8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvdHRvbSAtIHRoaXMudG9wO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBcbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNldFJpZ2h0KHJpZ2h0KSB7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgc2hpZnQoaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXQpIHtcbiAgICB0aGlzLnRvcCArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLmxlZnQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgICB0aGlzLmJvdHRvbSArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLnJpZ2h0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iXX0=