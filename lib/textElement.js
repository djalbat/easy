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
var _offset = /*#__PURE__*/ _interop_require_default(require("./offset"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds"));
var _element = /*#__PURE__*/ _interop_require_default(require("./mixins/element"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TextElement = /*#__PURE__*/ function() {
    function TextElement(text) {
        _class_call_check(this, TextElement);
        this.domElement = document.createTextNode(text); ///
        this.domElement.__element__ = this;
    }
    _create_class(TextElement, [
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