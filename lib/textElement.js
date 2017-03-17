'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds');

var TextElement = function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: 'clone',
    value: function clone() {
      return TextElement.clone(this);
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var height = this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.remove();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        _html = this.domElement.innerHTML; ///

        return _html;
      } else {
        var innerHTML = _html; ///

        this.domElement.innerHTML = innerHTML;
      }
    }
  }]);

  return TextElement;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJPZmZzZXQiLCJyZXF1aXJlIiwiQm91bmRzIiwiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJfX2VsZW1lbnRfXyIsImNsb25lIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRET01FbGVtZW50IiwiZmlyc3RTaWJsaW5nRE9NRWxlbWVudCIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsIm5leHRTaWJsaW5nIiwiaHRtbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsIm1vZHVsZSIsImV4cG9ydHMiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxlQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGVBQVIsQ0FEZjs7SUFHTUUsVztBQUNKLHVCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtDLFVBQUwsR0FBa0JDLFNBQVNDLGNBQVQsQ0FBd0JILElBQXhCLENBQWxCLENBRGdCLENBQ2lDOztBQUVqRCxTQUFLQyxVQUFMLENBQWdCRyxXQUFoQixHQUE4QixJQUE5QjtBQUNEOzs7OzRCQUVPO0FBQUUsYUFBT0wsWUFBWU0sS0FBWixDQUFrQixJQUFsQixDQUFQO0FBQWlDOzs7Z0NBRS9CO0FBQ1YsVUFBTUMsTUFBTSxLQUFLTCxVQUFMLENBQWdCTSxTQUE1QjtBQUFBLFVBQXdDO0FBQ2xDQyxhQUFPLEtBQUtQLFVBQUwsQ0FBZ0JRLFVBRDdCO0FBQUEsVUFDMEM7QUFDcENDLGVBQVMsSUFBSWQsTUFBSixDQUFXVSxHQUFYLEVBQWdCRSxJQUFoQixDQUZmOztBQUlBLGFBQU9FLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMscUJBQXFCLEtBQUtWLFVBQUwsQ0FBZ0JXLHFCQUFoQixFQUEzQjtBQUFBLFVBQ01DLFNBQVNmLE9BQU9nQixzQkFBUCxDQUE4Qkgsa0JBQTlCLENBRGY7O0FBR0EsYUFBT0UsTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRSxRQUFRLEtBQUtkLFVBQUwsQ0FBZ0JlLFdBQTlCOztBQUVBLGFBQU9ELEtBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUUsU0FBUyxLQUFLaEIsVUFBTCxDQUFnQmlCLFlBQS9COztBQUVBLGFBQU9ELE1BQVA7QUFDRDs7OzZCQUVRRSxhLEVBQWU7QUFDdEIsVUFBTUMsbUJBQW1CRCxjQUFjbEIsVUFBdkM7QUFBQSxVQUNNb0IseUJBQXlCRCxpQkFBaUJFLFVBRGhELENBRHNCLENBRXNDOztBQUU1REYsdUJBQWlCRyxZQUFqQixDQUE4QixLQUFLdEIsVUFBbkMsRUFBK0NvQixzQkFBL0M7QUFDRDs7OzhCQUVTRixhLEVBQWU7QUFDdkIsVUFBTUMsbUJBQW1CRCxjQUFjbEIsVUFBdkM7O0FBRUFtQix1QkFBaUJHLFlBQWpCLENBQThCLEtBQUt0QixVQUFuQyxFQUErQyxJQUEvQyxFQUh1QixDQUcrQjtBQUN2RDs7OytCQUVVa0IsYSxFQUFlO0FBQ3hCLFVBQU1DLG1CQUFtQkQsY0FBY2xCLFVBQXZDOztBQUVBbUIsdUJBQWlCSSxXQUFqQixDQUE2QixLQUFLdkIsVUFBbEM7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS0EsVUFBTCxDQUFnQndCLE1BQWhCO0FBQ0Q7OztpQ0FFWUMsYyxFQUFnQjtBQUMzQixVQUFNQyxnQkFBZ0JELGVBQWV6QixVQUFmLENBQTBCMkIsVUFBaEQ7QUFBQSxVQUNNQyxvQkFBb0JILGVBQWV6QixVQUR6Qzs7QUFHQTBCLG9CQUFjSixZQUFkLENBQTJCLEtBQUt0QixVQUFoQyxFQUE0QzRCLGlCQUE1QztBQUNEOzs7Z0NBRVdILGMsRUFBZ0I7QUFDMUIsVUFBTUMsZ0JBQWdCRCxlQUFlekIsVUFBZixDQUEwQjJCLFVBQWhEO0FBQUEsVUFDTUMsb0JBQW9CSCxlQUFlekIsVUFEekM7O0FBR0EwQixvQkFBY0osWUFBZCxDQUEyQixLQUFLdEIsVUFBaEMsRUFBNEM0QixrQkFBa0JDLFdBQTlELEVBSjBCLENBSW1EO0FBQzlFOzs7eUJBRUlDLEssRUFBTTtBQUNULFVBQUlBLFVBQVNDLFNBQWIsRUFBd0I7QUFDdEJELGdCQUFPLEtBQUs5QixVQUFMLENBQWdCZ0MsU0FBdkIsQ0FEc0IsQ0FDWTs7QUFFbEMsZUFBT0YsS0FBUDtBQUNELE9BSkQsTUFJTztBQUNMLFlBQU1FLFlBQVlGLEtBQWxCLENBREssQ0FDbUI7O0FBRXhCLGFBQUs5QixVQUFMLENBQWdCZ0MsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJDLE9BQWpCIiwiZmlsZSI6InRleHRFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIFRleHRFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIGZpcnN0U2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh0bWwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiJdfQ==