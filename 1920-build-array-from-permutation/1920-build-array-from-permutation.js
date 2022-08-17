/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    
ans = []


for (i = 0 ; i <nums.length ; i++)
{
   ans.push(nums[nums[i]])
}

return ans
};

  nums = [0,2,1,5,3,4]
buildArray(nums)