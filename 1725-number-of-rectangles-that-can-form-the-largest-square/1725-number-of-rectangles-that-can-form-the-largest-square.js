/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
 arr =[]
 i = 0
    for (let i = 0; i < rectangles.length; i++) {
      arr.push(Math.min(...rectangles[i]))
    }

 arr.map(a => a == Math.max(...arr)? ++i : 0)
 
 return i
 
 
};