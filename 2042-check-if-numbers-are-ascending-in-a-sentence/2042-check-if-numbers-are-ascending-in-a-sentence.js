/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
 
  arr=  s.split(" ").filter(a => !isNaN(a))

 for (let i = 0; i < arr.length; i++) {
  if(arr[i+1]-arr[i] < 1){
   return false
  }
  
 }
 return true
};

