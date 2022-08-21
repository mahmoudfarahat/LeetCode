/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits.join('')

   num2 = BigInt(digits.join(''))+BigInt(1)
 

 
 
var temp = ''+num2
 
var intArr = [...temp].reduce((acc, n)=> acc.concat(+n), [] );
     
     
     
// var intArr = Array.from(String(num2), num => Number(num));

return intArr
     
};


 
