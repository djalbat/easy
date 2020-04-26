"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = require("./miscellaneous/offset"),
    Bounds = require("./miscellaneous/bounds");

var TextElement = /*#__PURE__*/function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: "clone",
    value: function clone() {
      return TextElement.clone(this);
    }
  }, {
    key: "getText",
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);
      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width = this.domElement.clientWidth;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = this.domElement.clientHeight;
      return height;
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "remove",
    value: function remove() {
      this.domElement.remove();
    }
  }]);

  return TextElement;
}();

module.exports = TextElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRFbGVtZW50LmpzIl0sIm5hbWVzIjpbIk9mZnNldCIsInJlcXVpcmUiLCJCb3VuZHMiLCJUZXh0RWxlbWVudCIsInRleHQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fZWxlbWVudF9fIiwiY2xvbmUiLCJub2RlVmFsdWUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJhZGQiLCJyZW1vdmUiLCJzaWJsaW5nRWxlbWVudCIsInBhcmVudERPTU5vZGUiLCJwYXJlbnROb2RlIiwic2libGluZ0RPTUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLHdCQUFELENBQXRCO0FBQUEsSUFDTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsd0JBQUQsQ0FEdEI7O0lBR01FLFc7QUFDSix1QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxVQUFMLEdBQWtCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILElBQXhCLENBQWxCLENBRGdCLENBQ2lDOztBQUVqRCxTQUFLQyxVQUFMLENBQWdCRyxXQUFoQixHQUE4QixJQUE5QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsV0FBVyxDQUFDTSxLQUFaLENBQWtCLElBQWxCLENBQVA7QUFBaUM7Ozs4QkFFakM7QUFDUixVQUFNQyxTQUFTLEdBQUcsS0FBS0wsVUFBTCxDQUFnQkssU0FBbEM7QUFBQSxVQUNNTixJQUFJLEdBQUdNLFNBRGIsQ0FEUSxDQUVnQjs7QUFFeEIsYUFBT04sSUFBUDtBQUNEOzs7NEJBRU9BLEksRUFBTTtBQUNaLFVBQU1NLFNBQVMsR0FBR04sSUFBbEIsQ0FEWSxDQUNZOztBQUV4QixXQUFLQyxVQUFMLENBQWdCSyxTQUFoQixHQUE0QkEsU0FBNUI7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsR0FBRyxHQUFHLEtBQUtOLFVBQUwsQ0FBZ0JPLFNBQTVCO0FBQUEsVUFBd0M7QUFDbENDLE1BQUFBLElBQUksR0FBRyxLQUFLUixVQUFMLENBQWdCUyxVQUQ3QjtBQUFBLFVBQzBDO0FBQ3BDQyxNQUFBQSxNQUFNLEdBQUcsSUFBSWYsTUFBSixDQUFXVyxHQUFYLEVBQWdCRSxJQUFoQixDQUZmO0FBSUEsYUFBT0UsTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFNQyxrQkFBa0IsR0FBRyxLQUFLWCxVQUFMLENBQWdCWSxxQkFBaEIsRUFBM0I7QUFBQSxVQUNNQyxNQUFNLEdBQUdoQixNQUFNLENBQUNpQixzQkFBUCxDQUE4Qkgsa0JBQTlCLENBRGY7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1FLEtBQUssR0FBRyxLQUFLZixVQUFMLENBQWdCZ0IsV0FBOUI7QUFFQSxhQUFPRCxLQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQU1FLE1BQU0sR0FBRyxLQUFLakIsVUFBTCxDQUFnQmtCLFlBQS9CO0FBRUEsYUFBT0QsTUFBUDtBQUNEOzs7OEJBRVNFLGEsRUFBZTtBQUFFQSxNQUFBQSxhQUFhLENBQUNDLE9BQWQsQ0FBc0IsSUFBdEI7QUFBOEI7Ozs2QkFFaERELGEsRUFBZTtBQUFFQSxNQUFBQSxhQUFhLENBQUNFLE1BQWQsQ0FBcUIsSUFBckI7QUFBNkI7OzswQkFFakRGLGEsRUFBZTtBQUFFQSxNQUFBQSxhQUFhLENBQUNHLEdBQWQsQ0FBa0IsSUFBbEI7QUFBMEI7OzsrQkFFdENILGEsRUFBZTtBQUFFQSxNQUFBQSxhQUFhLENBQUNJLE1BQWQsQ0FBcUIsSUFBckI7QUFBNkI7OztpQ0FFNUNDLGMsRUFBZ0I7QUFDM0IsVUFBTUMsYUFBYSxHQUFHRCxjQUFjLENBQUN4QixVQUFmLENBQTBCMEIsVUFBaEQ7QUFBQSxVQUNNQyxpQkFBaUIsR0FBR0gsY0FBYyxDQUFDeEIsVUFEekM7QUFHQXlCLE1BQUFBLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQixLQUFLNUIsVUFBaEMsRUFBNEMyQixpQkFBNUM7QUFDRDs7O2dDQUVXSCxjLEVBQWdCO0FBQzFCLFVBQU1DLGFBQWEsR0FBR0QsY0FBYyxDQUFDeEIsVUFBZixDQUEwQjBCLFVBQWhEO0FBQUEsVUFDTUMsaUJBQWlCLEdBQUdILGNBQWMsQ0FBQ3hCLFVBRHpDO0FBR0F5QixNQUFBQSxhQUFhLENBQUNHLFlBQWQsQ0FBMkIsS0FBSzVCLFVBQWhDLEVBQTRDMkIsaUJBQWlCLENBQUNFLFdBQTlELEVBSjBCLENBSW1EO0FBQzlFOzs7NkJBRVE7QUFDUCxXQUFLN0IsVUFBTCxDQUFnQnVCLE1BQWhCO0FBQ0Q7Ozs7OztBQUdITyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQyxXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCIpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iXX0=