/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
arr = []
 j = 0
for (let i = 0; i < nums.length; i++) {
 if(nums[i] < nums[i+1]){
  ++j
 }else{
  arr.push(j)
  j = 0
 }
}
 return Math.max(...arr) +1
};