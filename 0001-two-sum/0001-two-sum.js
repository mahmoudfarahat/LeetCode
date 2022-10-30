/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    
 for (let i = 0; i < nums.length; i++) {
    newValue = target-nums[i]
  if(nums.includes(newValue)   && i !== nums.indexOf(newValue) ) 
  {
    return [i,nums.indexOf(newValue)]
  }
 }
};