/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums  ;
 

    nums2 = [...new Set(nums)]

    if(nums2.length < nums.length)
    {
        return true
    }else
    {
        return false
    }
     
};

 