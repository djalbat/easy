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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6WyJPZmZzZXQiLCJCb3VuZHMiLCJlbGVtZW50TWl4aW5zIiwiVGV4dEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInRleHQiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fZWxlbWVudF9fIiwiZ2V0VGV4dCIsIm5vZGVWYWx1ZSIsInNldFRleHQiLCJnZXRPZmZzZXQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldCIsImdldEJvdW5kcyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdW5kcyIsImZyb21Cb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaWR0aCIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJnZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJwcmVwZW5kVG8iLCJwYXJlbnRFbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZFRvIiwiYXBwZW5kIiwiYWRkVG8iLCJhZGQiLCJyZW1vdmVGcm9tIiwicmVtb3ZlIiwiaW5zZXJ0QmVmb3JlIiwic2libGluZ0VsZW1lbnQiLCJwYXJlbnRET01Ob2RlIiwicGFyZW50Tm9kZSIsInNpYmxpbmdET01FbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJuZXh0U2libGluZyIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTyxHQUFVLENBQVYsT0FBVTtBQUNWLEdBQVUsQ0FBVixPQUFVO0FBQ0gsR0FBa0IsQ0FBbEIsUUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsV0FBVyxpQkFBakIsUUFBUTthQUFGLFdBQVcsQ0FDSCxJQUFJOzhCQURaLFdBQVc7UUFFYixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUVwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJOztpQkFKaEMsV0FBVzs7WUFPZixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFDckMsSUFBSSxHQUFHLFNBQVMsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTNCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDYixHQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTNCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFNBQVM7WUFDdkMsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDakMsTUFBTSxHQUFHLEdBQUcsQ0EzQkgsT0FBVSxTQTJCQyxHQUFHLEVBQUUsSUFBSTtnQkFFbkMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsR0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLElBQzFELE1BQU0sR0FqQ0csT0FBVSxTQWlDSCxzQkFBc0IsQ0FBQyxrQkFBa0I7Z0JBRS9ELE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQ3pDLEtBQUssR0FBRyxXQUFXLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUvQixNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxHQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUMzQyxNQUFNLEdBQUcsWUFBWSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFTLEdBQVQsU0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUFHLENBQUM7OztZQUV6RCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUFHLENBQUM7OztZQUV2RCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFHLENBQUM7OztZQUVqRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUFHLENBQUM7OztZQUV6RCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QixHQUFLLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUNwRCxpQkFBaUIsR0FBRyxjQUFjLENBQUMsVUFBVTtnQkFFbkQsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQjtZQUMvRCxDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMzQixHQUFLLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUNwRCxpQkFBaUIsR0FBRyxjQUFjLENBQUMsVUFBVTtnQkFFbkQsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7WUFDbEYsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUN4QixDQUFDOzs7V0F6RUcsV0FBVzs7QUE0RWpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUE5RVQsUUFBa0I7ZUFnRjdCLFdBQVcifQ==