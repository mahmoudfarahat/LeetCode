/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
arrNew = []
 length = arr.length
 for (let i = 0; i < arr.length; i++) {
  
    if(arr[i] === 0)
    {
     arrNew.push(i)
    }
  
 }
 
  for (let i = 0; i < arrNew.length;++i) {
 
  arr.splice(arrNew[i]+i+1,0,0) 
    
  }
   arr.splice(length)
};
