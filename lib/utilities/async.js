"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forEach", {
    enumerable: true,
    get: function() {
        return forEach;
    }
});
function forEach(array, operation, done, context) {
    var length = array.length; ///
    var count = -1;
    function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
            done();
        } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
        }
    }
    next();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXN5bmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXG5cbiAgbGV0IGNvdW50ID0gLTE7XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjb3VudCsrO1xuXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXJyYXkiLCJvcGVyYXRpb24iLCJkb25lIiwiY29udGV4dCIsImxlbmd0aCIsImNvdW50IiwibmV4dCIsInRlcm1pbmF0ZSIsImluZGV4IiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxRQUFRQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQ3JELElBQU1DLFNBQVNKLE1BQU1JLE1BQU0sRUFBRyxHQUFHO0lBRWpDLElBQUlDLFFBQVEsQ0FBQztJQUViLFNBQVNDO1FBQ1BEO1FBRUEsSUFBTUUsWUFBYUYsVUFBVUQ7UUFFN0IsSUFBSUcsV0FBVztZQUNiTDtRQUNGLE9BQU87WUFDTCxJQUFNTSxRQUFRSCxPQUNSSSxVQUFVVCxLQUFLLENBQUNRLE1BQU07WUFFNUJQLFVBQVVRLFNBQVNILE1BQU1KLE1BQU1DLFNBQVNLO1FBQzFDO0lBQ0Y7SUFFQUY7QUFDRiJ9