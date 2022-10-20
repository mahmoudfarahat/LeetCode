/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let smallest = Math.min(...nums)
    let largest = Math.max(...nums)

   

   for (let i = smallest ; i > 0 ; --i)
   {
      if (largest % i === 0 && smallest % i ===0 )
      {
         return i
      }
   }


 

};
