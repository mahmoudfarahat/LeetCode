/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

   var ans = []
   var numsLength = nums.length
   for (i = 0; i < numsLength; i++) {

        ans[i] =  nums.reduce((a, b) => a + b, 0)
        nums.pop();
       
      

    }
   ans = ans.reverse();
   return ans
};

nums = [1, 2, 3, 4]

runningSum(nums)

 
 