/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
arrNew = arr.slice()
for (let i = 0; i < arr.length; i++) {
 arrNew.shift()
  arr[i] = Math.max(...arrNew)
            if (i == arr.length-1) {
                      arr[i] = -1   
            }
}

            return arr 
};