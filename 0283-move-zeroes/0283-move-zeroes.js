/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
j = 0
 
 for (let i = 0; i < nums.length; i++) {
  if(nums[i] === 0)
  {
   nums.splice(i,1)
   ++j
   --i
  }
 }

 for (let i = 0; i < j; i++) {
  nums.push(0)
 }

 return nums
};
 