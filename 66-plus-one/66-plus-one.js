/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits.join('')

   num2 = BigInt(digits.join(''))+BigInt(1)
 

   
var intArr = Array.from(String(num2), num => Number(num));

return intArr
     
};


 