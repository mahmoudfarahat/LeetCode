/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums = [...new Set(nums)]
    while (nums.length > 0)
        {
    maxNum = Math.max(...nums)
              if(nums.includes(-maxNum))
    {
        return maxNum
    }else{
        nums.splice(nums.indexOf(maxNum),1)
    }
    
        }
  if(nums.length == 0){
      return -1
  }
};