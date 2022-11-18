/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
j =0
 arr = [ ]
for (let i = 0; i < nums.length; i++) {
 if(nums[i] == 1){
  ++j
   
 }else{
  arr.push(j)
  j = 0
 
 }
}
 if(j){
  arr.push(j)
 }
 return  Math.max(...arr)
};
