/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    
  
   

   for (let i =  Math.min(...nums) ; i > 0 ; --i)
   {
      if (Math.max(...nums)
 % i === 0 && Math.min(...nums) % i ===0 )
      {
         return i
      }
   }


 

};
