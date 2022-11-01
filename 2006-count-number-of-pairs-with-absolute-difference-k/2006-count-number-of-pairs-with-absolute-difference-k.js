 /*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  o = 0
for (let i = 0; i < nums.length; i++) {
  for (let j = i+1; j < nums.length; j++) {
   
   if(nums[i]-nums[j] === k || nums[i]-nums[j] === -k)
   {
  
    ++o
   }
  }
}

 return o
};

