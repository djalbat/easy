"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _offset = _interopRequireDefault(require("./offset"));
var _bounds = _interopRequireDefault(require("./bounds"));
var _element = _interopRequireDefault(require("./mixins/element"));
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJPZmZzZXQiLCJCb3VuZHMiLCJlbGVtZW50TWl4aW5zIiwiVGV4dEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRleHQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fZWxlbWVudF9fIiwiZ2V0VGV4dCIsIm5vZGVWYWx1ZSIsInNldFRleHQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJwcmVwZW5kVG8iLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZFRvIiwiYXBwZW5kIiwiYWRkVG8iLCJhZGQiLCJyZW1vdmVGcm9tIiwicmVtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTyxHQUFVLENBQVYsT0FBVTtBQUNWLEdBQVUsQ0FBVixPQUFVO0FBQ0gsR0FBa0IsQ0FBbEIsUUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsV0FBVyxpQkFBakIsUUFBUTthQUFGLFdBQVcsQ0FDSCxJQUFJOzhCQURaLFdBQVc7UUFFYixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFHLENBQUcsQUFBSCxF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YSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQjtZQUMvRCxDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQixHQUFLLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUNwRCxpQkFBaUIsR0FBRyxjQUFjLENBQUMsVUFBVTtnQkFFbkQsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDbEYsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QixDQUFDOzs7V0F6RUcsV0FBVzs7QUE0RWpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUE5RVQsUUFBa0I7ZUFnRjdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEVsZW1lbnQ7XG4iXX0=