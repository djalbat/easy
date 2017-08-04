'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array;

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

      array.splice(descendantDOMNodes, start, deleteCount, childDOMNodes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvZG9tLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheSIsImRvbVV0aWxpdGllcyIsInNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRvbUVsZW1lbnRzIiwiZG9tRWxlbWVudHNXaXRoRWxlbWVudHMiLCJmaWx0ZXJET01Ob2RlcyIsIl9fZWxlbWVudF9fIiwidW5kZWZpbmVkIiwiZWxlbWVudHMiLCJtYXAiLCJkb21Ob2RlIiwiZGVzY2VuZGFudERPTU5vZGVzIiwic3RhcnQiLCJkZWxldGVDb3VudCIsImNoaWxkRE9NTm9kZXMiLCJjaGlsZE5vZGVzIiwic3BsaWNlIiwiZm9yRWFjaCIsImNoaWxkRE9NTm9kZSIsImRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIiwiZG9tTm9kZXMiLCJmaWx0ZXJlZERPTU5vZGVzIiwiZG9tTm9kZU1hdGNoZXNTZWxlY3RvciIsImRvbU5vZGVUeXBlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwibWF0Y2hlcyIsIlRFWFRfTk9ERSIsInRlc3QiLCJkb21Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsImluZGV4IiwicmVzdWx0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0lBRVFDLEssR0FBVUYsUyxDQUFWRSxLOztJQUVGQyxZOzs7Ozs7OzJDQUMwQkMsUSxFQUFVO0FBQ3hDLFVBQU1DLGFBQWMsT0FBT0QsUUFBUCxLQUFvQixRQUFyQixHQUNFRSxTQUFTQyxnQkFBVCxDQUEwQkgsUUFBMUIsRUFBb0MsQ0FBcEMsQ0FERixHQUM0QztBQUN4Q0EsY0FGdkIsQ0FEd0MsQ0FHTjs7QUFFbEMsYUFBT0MsVUFBUDtBQUNEOzs7NENBRWdDRyxXLEVBQWE7QUFDMUMsVUFBTUMsMEJBQTBCTixhQUFhTyxjQUFiLENBQTRCRixXQUE1QixFQUF5QyxVQUFTSCxVQUFULEVBQXFCO0FBQ3RGLGVBQVFBLFdBQVdNLFdBQVgsS0FBMkJDLFNBQW5DO0FBQ0QsT0FGeUIsQ0FBaEM7QUFBQSxVQUdNQyxXQUFXSix3QkFBd0JLLEdBQXhCLENBQTRCLFVBQVNULFVBQVQsRUFBcUI7QUFDMUQsZUFBT0EsV0FBV00sV0FBbEI7QUFDRCxPQUZVLENBSGpCOztBQU9BLGFBQU9FLFFBQVA7QUFDRDs7O2tEQUVvQ0UsTyxFQUFrQztBQUFBLFVBQXpCQyxrQkFBeUIsdUVBQUosRUFBSTs7QUFDckUsVUFBTUMsUUFBUSxDQUFDLENBQWY7QUFBQSxVQUNNQyxjQUFjLENBRHBCO0FBQUEsVUFFTUMsZ0JBQWdCSixRQUFRSyxVQUY5QixDQURxRSxDQUcxQjs7QUFFM0NsQixZQUFNbUIsTUFBTixDQUFhTCxrQkFBYixFQUFpQ0MsS0FBakMsRUFBd0NDLFdBQXhDLEVBQXFEQyxhQUFyRDs7QUFFQUEsb0JBQWNHLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ3BCLHFCQUFhcUIsNkJBQWIsQ0FBMkNELFlBQTNDLEVBQXlEUCxrQkFBekQ7QUFDRCxPQUZEOztBQUlBLGFBQU9BLGtCQUFQO0FBQ0Q7Ozs2Q0FFK0JTLFEsRUFBVXJCLFEsRUFBVTtBQUNsRCxVQUFNc0IsbUJBQW1CdkIsYUFBYU8sY0FBYixDQUE0QmUsUUFBNUIsRUFBc0MsVUFBU1YsT0FBVCxFQUFrQjtBQUMvRSxlQUFPWixhQUFhd0Isc0JBQWIsQ0FBb0NaLE9BQXBDLEVBQTZDWCxRQUE3QyxDQUFQO0FBQ0QsT0FGd0IsQ0FBekI7O0FBSUEsYUFBT3NCLGdCQUFQO0FBQ0Q7OzsyQ0FFNkJYLE8sRUFBU1gsUSxFQUFVO0FBQy9DLFVBQU13QixjQUFjYixRQUFRYyxRQUE1Qjs7QUFFQSxjQUFRRCxXQUFSO0FBQ0UsYUFBS0UsS0FBS0MsWUFBVjtBQUF5QjtBQUN2QixnQkFBTTFCLGFBQWFVLE9BQW5CLENBRHVCLENBQ0s7O0FBRTVCLG1CQUFPVixXQUFXMkIsT0FBWCxDQUFtQjVCLFFBQW5CLENBQVA7QUFDRDs7QUFFRCxhQUFLMEIsS0FBS0csU0FBVjtBQUFzQjtBQUNwQixnQkFBSTdCLGFBQWEsR0FBakIsRUFBc0I7QUFDcEIscUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFYSDs7QUFjQSxhQUFPLEtBQVA7QUFDRDs7O21DQUVxQnFCLFEsRUFBVVMsSSxFQUFNO0FBQ3BDLFVBQU1SLG1CQUFtQixFQUF6QjtBQUFBLFVBQ01TLGlCQUFpQlYsU0FBU1csTUFEaEM7O0FBR0EsV0FBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixjQUE1QixFQUE0Q0UsT0FBNUMsRUFBcUQ7QUFDbkQsWUFBTXRCLFVBQVVVLFNBQVNZLEtBQVQsQ0FBaEI7QUFBQSxZQUNNQyxTQUFTSixLQUFLbkIsT0FBTCxDQURmOztBQUdBLFlBQUl1QixNQUFKLEVBQVk7QUFDVlosMkJBQWlCYSxJQUFqQixDQUFzQnhCLE9BQXRCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPVyxnQkFBUDtBQUNEOzs7Ozs7QUFHSGMsT0FBT0MsT0FBUCxHQUFpQnRDLFlBQWpCIiwiZmlsZSI6ImRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeTtcblxuY2xhc3MgZG9tVXRpbGl0aWVzIHtcbiAgc3RhdGljIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbiAgc3RhdGljIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBkb21VdGlsaXRpZXMuZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDAsXG4gICAgICAgICAgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuICBcbiAgICBhcnJheS5zcGxpY2UoZGVzY2VuZGFudERPTU5vZGVzLCBzdGFydCwgZGVsZXRlQ291bnQsIGNoaWxkRE9NTm9kZXMpO1xuICBcbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgICBkb21VdGlsaXRpZXMuZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZG9tVXRpbGl0aWVzLmZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCBmdW5jdGlvbihkb21Ob2RlKSB7XG4gICAgICByZXR1cm4gZG9tVXRpbGl0aWVzLmRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZmlsdGVyZWRET01Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuICBcbiAgICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG4gIFxuICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgXG4gICAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICcqJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHRlc3QpIHtcbiAgICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG4gIFxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZG9tTm9kZSk7XG4gIFxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBmaWx0ZXJlZERPTU5vZGVzLnB1c2goZG9tTm9kZSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4gZmlsdGVyZWRET01Ob2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbVV0aWxpdGllcztcbiJdfQ==