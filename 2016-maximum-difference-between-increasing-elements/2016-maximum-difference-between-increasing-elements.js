/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {

 arr= []
 p =0
for (let i = 0; i < nums.length; i++)
 {
 for (let j = i+1; j < nums.length; j++) {
  
  if(nums[j] > nums[i] ){
   arr.push(nums[j]-nums[i])
   ++p
  }
    
  
 }
 }
if(p == 0)  return -1
 return Math.max(...arr)
};