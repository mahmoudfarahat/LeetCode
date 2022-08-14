/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums  ;
 

    nums2 = [...new Set(nums)]

    return (nums2.length < nums.length) ? true : false
   
     
};

 