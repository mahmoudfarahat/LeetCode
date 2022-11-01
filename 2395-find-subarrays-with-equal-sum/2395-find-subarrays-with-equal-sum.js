/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {

 sum = 0
 arr =[]
for (let i = 0; i < 2; i++) {
 sum +=nums[i]
}
 arr.push(sum)
 
 maxSum = sum
 for (let i = 2; i < nums.length; i++) {
  maxSum = maxSum +nums[i] - nums[i-2] 

 arr.push(maxSum)
 }
 return [...new Set(arr)].length < arr.length
};