"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _offset = /*#__PURE__*/ _interopRequireDefault(require("./offset"));
var _bounds = /*#__PURE__*/ _interopRequireDefault(require("./bounds"));
var _element = /*#__PURE__*/ _interopRequireDefault(require("./mixins/element"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TextElement = /*#__PURE__*/ function() {
    function TextElement(text) {
        _classCallCheck(this, TextElement);
        this.domElement = document.createTextNode(text); ///
        this.domElement.__element__ = this;
    }
    _createClass(TextElement, [
        {
            key: "getText",
            value: function getText() {
                var nodeValue = this.domElement.nodeValue, text = nodeValue; ///
                return text;
            }
        },
        {
            key: "setText",
            value: function setText(text) {
                var nodeValue = text; ///
                this.domElement.nodeValue = nodeValue;
            }
        },
        {
            key: "getOffset",
            value: function getOffset() {
                var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
                return offset;
            }
        },
        {
            key: "getBounds",
            value: function getBounds() {
                var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
                return bounds;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var clientWidth = this.domElement.clientWidth, width = clientWidth; ///
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var clientHeight = this.domElement.clientHeight, height = clientHeight; ///
                return height;
            }
        },
        {
            key: "prependTo",
            value: function prependTo(parentElement) {
                parentElement.prepend(this);
            }
        },
        {
            key: "appendTo",
            value: function appendTo(parentElement) {
                parentElement.append(this);
            }
        },
        {
            key: "addTo",
            value: function addTo(parentElement) {
                parentElement.add(this);
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentElement) {
                parentElement.remove(this);
            }
        },
        {
            key: "insertBefore",
            value: function insertBefore(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
            }
        },
        {
            key: "insertAfter",
            value: function insertAfter(siblingElement) {
                var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
                parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
            }
        },
        {
            key: "remove",
            value: function remove() {
                this.domElement.remove();
            }
        }
    ]);
    return TextElement;
}();
Object.assign(TextElement.prototype, _element.default);
var _default = TextElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEVsZW1lbnQ7XG4iXSwibmFtZXMiOlsiVGV4dEVsZW1lbnQiLCJ0ZXh0IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJfX2VsZW1lbnRfXyIsImdldFRleHQiLCJub2RlVmFsdWUiLCJzZXRUZXh0IiwiZ2V0T2Zmc2V0IiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJvZmZzZXQiLCJPZmZzZXQiLCJnZXRCb3VuZHMiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3VuZHMiLCJCb3VuZHMiLCJmcm9tQm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsIndpZHRoIiwiZ2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaGVpZ2h0IiwicHJlcGVuZFRvIiwicGFyZW50RWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmRUbyIsImFwcGVuZCIsImFkZFRvIiwiYWRkIiwicmVtb3ZlRnJvbSIsInJlbW92ZSIsImluc2VydEJlZm9yZSIsInNpYmxpbmdFbGVtZW50IiwicGFyZW50RE9NTm9kZSIsInBhcmVudE5vZGUiLCJzaWJsaW5nRE9NRWxlbWVudCIsImluc2VydEFmdGVyIiwibmV4dFNpYmxpbmciLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUi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