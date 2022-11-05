/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    arr= []
    j =0
    p =0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1])
        {
            j++
        }
          if(nums[i] > nums[i+1])
        {
            p++
        }
    }
 if ([...new Set(nums)].length == 1) return true
    
 return (j !== 0 && p == 0 || p !== 0 && j == 0 )

    
};
