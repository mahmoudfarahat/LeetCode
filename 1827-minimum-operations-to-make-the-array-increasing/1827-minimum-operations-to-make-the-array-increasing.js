/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
k =0
 for (let i = 0;i < nums.length; i++) {
   if(nums[i+1]<=nums[i])
   {
    while (nums[i+1]<=nums[i]) {
      ++nums[i+1]
     
     ++k
    }
   }
 }
 return k
};
