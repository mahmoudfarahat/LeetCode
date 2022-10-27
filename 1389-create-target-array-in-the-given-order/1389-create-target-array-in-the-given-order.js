/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    arr = []
    
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]  , index[i])
         
        arr.splice(index[i],0,nums[i])
       
    }

    return arr
};
