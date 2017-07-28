'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtil = function () {
  function domUtil() {
    _classCallCheck(this, domUtil);
  }

  _createClass(domUtil, null, [{
    key: 'domElementFromSelector',
    value: function domElementFromSelector(selector) {
      var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
      selector; ///

      return domElement;
    }
  }, {
    key: 'elementsFromDOMElements',
    value: function elementsFromDOMElements(domElements) {
      var domElementsWithElements = domUtil.filterDOMNodes(domElements, function (domElement) {
        return domElement.__element__ !== undefined;
      }),
          elements = domElementsWithElements.map(function (domElement) {
        return domElement.__element__;
      });

      return elements;
    }
  }, {
    key: 'descendantDOMNodesFromDOMNode',
    value: function descendantDOMNodesFromDOMNode(domNode) {
      var descendantDOMNodes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      var start = -1,
          deleteCount = 0,
          childDOMNodes = domNode.childNodes; ///

      arrayUtil.splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

      childDOMNodes.forEach(function (childDOMNode) {
        domUtil.descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
      });

      return descendantDOMNodes;
    }
  }, {
    key: 'filterDOMNodesBySelector',
    value: function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = domUtil.filterDOMNodes(domNodes, function (domNode) {
        return domUtil.domNodeMatchesSelector(domNode, selector);
      });

      return filteredDOMNodes;
    }
  }, {
    key: 'domNodeMatchesSelector',
    value: function domNodeMatchesSelector(domNode, selector) {
      var domNodeType = domNode.nodeType;

      switch (domNodeType) {
        case Node.ELEMENT_NODE:
          {
            var domElement = domNode; ///

            return domElement.matches(selector);
          }

        case Node.TEXT_NODE:
          {
            if (selector === '*') {
              return true;
            }
          }
      }

      return false;
    }
  }, {
    key: 'filterDOMNodes',
    value: function filterDOMNodes(domNodes, test) {
      var filteredDOMNodes = [],
          domNodesLength = domNodes.length;

      for (var index = 0; index < domNodesLength; index++) {
        var domNode = domNodes[index],
            result = test(domNode);

        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }

      return filteredDOMNodes;
    }
  }]);

  return domUtil;
}();

module.exports = domUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2RvbS5qcyJdLCJuYW1lcyI6WyJkb21VdGlsIiwic2VsZWN0b3IiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZG9tRWxlbWVudHMiLCJkb21FbGVtZW50c1dpdGhFbGVtZW50cyIsImZpbHRlckRPTU5vZGVzIiwiX19lbGVtZW50X18iLCJ1bmRlZmluZWQiLCJlbGVtZW50cyIsIm1hcCIsImRvbU5vZGUiLCJkZXNjZW5kYW50RE9NTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiY2hpbGRET01Ob2RlcyIsImNoaWxkTm9kZXMiLCJhcnJheVV0aWwiLCJzcGxpY2UiLCJmb3JFYWNoIiwiY2hpbGRET01Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUiLCJkb21Ob2RlcyIsImZpbHRlcmVkRE9NTm9kZXMiLCJkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yIiwiZG9tTm9kZVR5cGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJtYXRjaGVzIiwiVEVYVF9OT0RFIiwidGVzdCIsImRvbU5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJyZXN1bHQiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxPO1dBQUFBLE87MEJBQUFBLE87OztlQUFBQSxPOzsyQ0FDMEJDLFEsRUFBVTtBQUN4QyxVQUFNQyxhQUFjLE9BQU9ELFFBQVAsS0FBb0IsUUFBckIsR0FDRUUsU0FBU0MsZ0JBQVQsQ0FBMEJILFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeENBLGNBRnZCLENBRHdDLENBR047O0FBRWxDLGFBQU9DLFVBQVA7QUFDRDs7OzRDQUVnQ0csVyxFQUFhO0FBQzFDLFVBQU1DLDBCQUEwQk4sUUFBUU8sY0FBUixDQUF1QkYsV0FBdkIsRUFBb0MsVUFBU0gsVUFBVCxFQUFxQjtBQUNqRixlQUFRQSxXQUFXTSxXQUFYLEtBQTJCQyxTQUFuQztBQUNELE9BRnlCLENBQWhDO0FBQUEsVUFHTUMsV0FBV0osd0JBQXdCSyxHQUF4QixDQUE0QixVQUFTVCxVQUFULEVBQXFCO0FBQzFELGVBQU9BLFdBQVdNLFdBQWxCO0FBQ0QsT0FGVSxDQUhqQjs7QUFPQSxhQUFPRSxRQUFQO0FBQ0Q7OztrREFFb0NFLE8sRUFBa0M7QUFBQSxVQUF6QkMsa0JBQXlCLHlEQUFKLEVBQUk7O0FBQ3JFLFVBQU1DLFFBQVEsQ0FBQyxDQUFmO0FBQUEsVUFDTUMsY0FBYyxDQURwQjtBQUFBLFVBRU1DLGdCQUFnQkosUUFBUUssVUFGOUIsQ0FEcUUsQ0FHMUI7O0FBRTNDQyxnQkFBVUMsTUFBVixDQUFpQk4sa0JBQWpCLEVBQXFDQyxLQUFyQyxFQUE0Q0MsV0FBNUMsRUFBeURDLGFBQXpEOztBQUVBQSxvQkFBY0ksT0FBZCxDQUFzQixVQUFTQyxZQUFULEVBQXVCO0FBQzNDckIsZ0JBQVFzQiw2QkFBUixDQUFzQ0QsWUFBdEMsRUFBb0RSLGtCQUFwRDtBQUNELE9BRkQ7O0FBSUEsYUFBT0Esa0JBQVA7QUFDRDs7OzZDQUUrQlUsUSxFQUFVdEIsUSxFQUFVO0FBQ2xELFVBQU11QixtQkFBbUJ4QixRQUFRTyxjQUFSLENBQXVCZ0IsUUFBdkIsRUFBaUMsVUFBU1gsT0FBVCxFQUFrQjtBQUMxRSxlQUFPWixRQUFReUIsc0JBQVIsQ0FBK0JiLE9BQS9CLEVBQXdDWCxRQUF4QyxDQUFQO0FBQ0QsT0FGd0IsQ0FBekI7O0FBSUEsYUFBT3VCLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJaLE8sRUFBU1gsUSxFQUFVO0FBQy9DLFVBQU15QixjQUFjZCxRQUFRZSxRQUE1Qjs7QUFFQSxjQUFRRCxXQUFSO0FBQ0UsYUFBS0UsS0FBS0MsWUFBVjtBQUF5QjtBQUN2QixnQkFBTTNCLGFBQWFVLE9BQW5CLENBRHVCLENBQ0s7O0FBRTVCLG1CQUFPVixXQUFXNEIsT0FBWCxDQUFtQjdCLFFBQW5CLENBQVA7QUFDRDs7QUFFRCxhQUFLMkIsS0FBS0csU0FBVjtBQUFzQjtBQUNwQixnQkFBSTlCLGFBQWEsR0FBakIsRUFBc0I7QUFDcEIscUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFYSDs7QUFjQSxhQUFPLEtBQVA7QUFDRDs7O21DQUVxQnNCLFEsRUFBVVMsSSxFQUFNO0FBQ3BDLFVBQU1SLG1CQUFtQixFQUF6QjtBQUFBLFVBQ01TLGlCQUFpQlYsU0FBU1csTUFEaEM7O0FBR0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixjQUE1QixFQUE0Q0UsT0FBNUMsRUFBcUQ7QUFDbkQsWUFBTXZCLFVBQVVXLFNBQVNZLEtBQVQsQ0FBaEI7QUFBQSxZQUNNQyxTQUFTSixLQUFLcEIsT0FBTCxDQURmOztBQUdBLFlBQUl3QixNQUFKLEVBQVk7QUFDVlosMkJBQWlCYSxJQUFqQixDQUFzQnpCLE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPWSxnQkFBUDtBQUNEOzs7U0E1RUd4QixPOzs7QUErRU5zQyxPQUFPQyxPQUFQLEdBQWlCdkMsT0FBakIiLCJmaWxlIjoiZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBkb21VdGlsIHtcbiAgc3RhdGljIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbiAgc3RhdGljIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBkb21VdGlsLmZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgICAgfSk7XG4gIFxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwLFxuICAgICAgICAgIGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cbiAgXG4gICAgYXJyYXlVdGlsLnNwbGljZShkZXNjZW5kYW50RE9NTm9kZXMsIHN0YXJ0LCBkZWxldGVDb3VudCwgY2hpbGRET01Ob2Rlcyk7XG4gIFxuICAgIGNoaWxkRE9NTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZERPTU5vZGUpIHtcbiAgICAgIGRvbVV0aWwuZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZG9tVXRpbC5maWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgICAgcmV0dXJuIGRvbVV0aWwuZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcik7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG4gIFxuICAgIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cbiAgXG4gICAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgfVxuICBcbiAgICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gJyonKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICAgIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgICBkb21Ob2Rlc0xlbmd0aCA9IGRvbU5vZGVzLmxlbmd0aDtcbiAgXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBkb21Ob2RlID0gZG9tTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcbiAgXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tVXRpbDtcbiJdfQ==