'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    splice = array.splice;

var domUtilities = function () {
  function domUtilities() {
    _classCallCheck(this, domUtilities);
  }

  _createClass(domUtilities, null, [{
    key: 'domElementFromSelector',
    value: function domElementFromSelector(selector) {
      var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
      selector; ///

      return domElement;
    }
  }, {
    key: 'elementsFromDOMElements',
    value: function elementsFromDOMElements(domElements) {
      var domElementsWithElements = domUtilities.filterDOMNodes(domElements, function (domElement) {
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
      var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var start = -1,
          deleteCount = 0,
          childDOMNodes = domNode.childNodes; ///

      splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

      childDOMNodes.forEach(function (childDOMNode) {
        domUtilities.descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
      });

      return descendantDOMNodes;
    }
  }, {
    key: 'filterDOMNodesBySelector',
    value: function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = domUtilities.filterDOMNodes(domNodes, function (domNode) {
        return domUtilities.domNodeMatchesSelector(domNode, selector);
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

  return domUtilities;
}();

module.exports = domUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvZG9tLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheSIsInNwbGljZSIsImRvbVV0aWxpdGllcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsIl9fZWxlbWVudF9fIiwidW5kZWZpbmVkIiwiZWxlbWVudHMiLCJtYXAiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsImNoaWxkRE9NTm9kZSIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZG9tTm9kZXMiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImRvbU5vZGVUeXBlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwibWF0Y2hlcyIsIlRFWFRfTk9ERSIsInRlc3QiLCJkb21Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImluZGV4IiwicmVzdWx0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixTQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ2FELEtBRGIsQ0FDRUMsTUFERjs7SUFHQUMsWTs7Ozs7OzsyQ0FDMEJDLFEsRUFBVTtBQUN4QyxVQUFNQyxhQUFjLE9BQU9ELFFBQVAsS0FBb0IsUUFBckIsR0FDRUUsU0FBU0MsZ0JBQVQsQ0FBMEJILFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeENBLGNBRnZCLENBRHdDLENBR047O0FBRWxDLGFBQU9DLFVBQVA7QUFDRDs7OzRDQUVnQ0csVyxFQUFhO0FBQzFDLFVBQU1DLDBCQUEwQk4sYUFBYU8sY0FBYixDQUE0QkYsV0FBNUIsRUFBeUMsVUFBU0gsVUFBVCxFQUFxQjtBQUN0RixlQUFRQSxXQUFXTSxXQUFYLEtBQTJCQyxTQUFuQztBQUNELE9BRnlCLENBQWhDO0FBQUEsVUFHTUMsV0FBV0osd0JBQXdCSyxHQUF4QixDQUE0QixVQUFTVCxVQUFULEVBQXFCO0FBQzFELGVBQU9BLFdBQVdNLFdBQWxCO0FBQ0QsT0FGVSxDQUhqQjs7QUFPQSxhQUFPRSxRQUFQO0FBQ0Q7OztrREFFb0NFLE8sRUFBa0M7QUFBQSxVQUF6QkMsa0JBQXlCLHVFQUFKLEVBQUk7O0FBQ3JFLFVBQU1DLFFBQVEsQ0FBQyxDQUFmO0FBQUEsVUFDTUMsY0FBYyxDQURwQjtBQUFBLFVBRU1DLGdCQUFnQkosUUFBUUssVUFGOUIsQ0FEcUUsQ0FHMUI7O0FBRTNDbEIsYUFBT2Msa0JBQVAsRUFBMkJDLEtBQTNCLEVBQWtDQyxXQUFsQyxFQUErQ0MsYUFBL0M7O0FBRUFBLG9CQUFjRSxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NuQixxQkFBYW9CLDZCQUFiLENBQTJDRCxZQUEzQyxFQUF5RE4sa0JBQXpEO0FBQ0QsT0FGRDs7QUFJQSxhQUFPQSxrQkFBUDtBQUNEOzs7NkNBRStCUSxRLEVBQVVwQixRLEVBQVU7QUFDbEQsVUFBTXFCLG1CQUFtQnRCLGFBQWFPLGNBQWIsQ0FBNEJjLFFBQTVCLEVBQXNDLFVBQVNULE9BQVQsRUFBa0I7QUFDL0UsZUFBT1osYUFBYXVCLHNCQUFiLENBQW9DWCxPQUFwQyxFQUE2Q1gsUUFBN0MsQ0FBUDtBQUNELE9BRndCLENBQXpCOztBQUlBLGFBQU9xQixnQkFBUDtBQUNEOzs7MkNBRTZCVixPLEVBQVNYLFEsRUFBVTtBQUMvQyxVQUFNdUIsY0FBY1osUUFBUWEsUUFBNUI7O0FBRUEsY0FBUUQsV0FBUjtBQUNFLGFBQUtFLEtBQUtDLFlBQVY7QUFBeUI7QUFDdkIsZ0JBQU16QixhQUFhVSxPQUFuQixDQUR1QixDQUNLOztBQUU1QixtQkFBT1YsV0FBVzBCLE9BQVgsQ0FBbUIzQixRQUFuQixDQUFQO0FBQ0Q7O0FBRUQsYUFBS3lCLEtBQUtHLFNBQVY7QUFBc0I7QUFDcEIsZ0JBQUk1QixhQUFhLEdBQWpCLEVBQXNCO0FBQ3BCLHFCQUFPLElBQVA7QUFDRDtBQUNGO0FBWEg7O0FBY0EsYUFBTyxLQUFQO0FBQ0Q7OzttQ0FFcUJvQixRLEVBQVVTLEksRUFBTTtBQUNwQyxVQUFNUixtQkFBbUIsRUFBekI7QUFBQSxVQUNNUyxpQkFBaUJWLFNBQVNXLE1BRGhDOztBQUdBLFdBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUYsY0FBNUIsRUFBNENFLE9BQTVDLEVBQXFEO0FBQ25ELFlBQU1yQixVQUFVUyxTQUFTWSxLQUFULENBQWhCO0FBQUEsWUFDTUMsU0FBU0osS0FBS2xCLE9BQUwsQ0FEZjs7QUFHQSxZQUFJc0IsTUFBSixFQUFZO0FBQ1ZaLDJCQUFpQmEsSUFBakIsQ0FBc0J2QixPQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1UsZ0JBQVA7QUFDRDs7Ozs7O0FBR0hjLE9BQU9DLE9BQVAsR0FBaUJyQyxZQUFqQiIsImZpbGUiOiJkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXk7XG5cbmNsYXNzIGRvbVV0aWxpdGllcyB7XG4gIHN0YXRpYyBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG4gIHN0YXRpYyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZG9tVXRpbGl0aWVzLmZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgICAgfSk7XG4gIFxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwLFxuICAgICAgICAgIGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cbiAgXG4gICAgc3BsaWNlKGRlc2NlbmRhbnRET01Ob2Rlcywgc3RhcnQsIGRlbGV0ZUNvdW50LCBjaGlsZERPTU5vZGVzKTtcbiAgXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRE9NTm9kZSkge1xuICAgICAgZG9tVXRpbGl0aWVzLmRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGRvbVV0aWxpdGllcy5maWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgICAgcmV0dXJuIGRvbVV0aWxpdGllcy5kb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcbiAgXG4gICAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERSA6IHtcbiAgICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuICBcbiAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9XG4gIFxuICAgICAgY2FzZSBOb2RlLlRFWFRfTk9ERSA6IHtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gICAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IFtdLFxuICAgICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9tTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuICBcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21VdGlsaXRpZXM7XG4iXX0=