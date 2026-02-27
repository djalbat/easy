"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get augment () {
        return augment;
    },
    get first () {
        return first;
    },
    get flatten () {
        return flatten;
    },
    get guarantee () {
        return guarantee;
    },
    get push () {
        return push;
    }
});
function first(array) {
    return array[0];
}
function push(array1, array2) {
    Array.prototype.push.apply(array1, array2);
}
function augment(array1, array2, test) {
    array1 = [
        ...array1
    ]; ///
    array2.forEach((element, index)=>{
        const passed = test(element, index);
        if (passed) {
            array1.push(element);
        }
    });
    return array1;
}
function flatten(array) {
    return array.reduce((array, element)=>{
        array = array.concat(element); ///
        return array;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return arrayOrElement instanceof Array ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIl0sIm5hbWVzIjpbImF1Z21lbnQiLCJmaXJzdCIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJwdXNoIiwiYXJyYXkiLCJhcnJheTEiLCJhcnJheTIiLCJBcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGVzdCIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJwYXNzZWQiLCJyZWR1Y2UiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBTWdCQTtlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBeEJBQztlQUFBQTs7O0FBRlQsU0FBU0gsTUFBTUksS0FBSztJQUFJLE9BQU9BLEtBQUssQ0FBQyxFQUFFO0FBQUU7QUFFekMsU0FBU0QsS0FBS0UsTUFBTSxFQUFFQyxNQUFNO0lBQUlDLE1BQU1DLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUNKLFFBQVFDO0FBQVM7QUFFNUUsU0FBU1AsUUFBUU0sTUFBTSxFQUFFQyxNQUFNLEVBQUVJLElBQUk7SUFDMUNMLFNBQVM7V0FBS0E7S0FBUSxFQUFFLEdBQUc7SUFFM0JDLE9BQU9LLE9BQU8sQ0FBQyxDQUFDQyxTQUFTQztRQUN2QixNQUFNQyxTQUFTSixLQUFLRSxTQUFTQztRQUU3QixJQUFJQyxRQUFRO1lBQ1ZULE9BQU9GLElBQUksQ0FBQ1M7UUFDZDtJQUNGO0lBRUEsT0FBT1A7QUFDVDtBQUVPLFNBQVNKLFFBQVFHLEtBQUs7SUFDM0IsT0FBT0EsTUFBTVcsTUFBTSxDQUFDLENBQUNYLE9BQU9RO1FBQzFCUixRQUFRQSxNQUFNWSxNQUFNLENBQUNKLFVBQVcsR0FBRztRQUVuQyxPQUFPUjtJQUNULEdBQUcsRUFBRTtBQUNQO0FBRU8sU0FBU0YsVUFBVWUsY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPLEFBQUNBLDBCQUEwQlYsUUFDeEJVLGlCQUNFO1FBQUNBO0tBQWU7QUFDOUIifQ==