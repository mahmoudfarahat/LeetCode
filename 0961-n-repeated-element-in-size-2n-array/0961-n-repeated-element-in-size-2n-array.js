/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
obj = {}
 for (let i = 0; i < nums.length; i++) {
  if(obj[nums[i]]){
   obj[nums[i]]++
  }else{
   obj[nums[i]] = 1
  }
 }
 
  
 n = [...new Set(nums)].length-1
 
 for (let element in obj) {
  if(obj[element] == n)
  {
   return +element
  }
 }
};
