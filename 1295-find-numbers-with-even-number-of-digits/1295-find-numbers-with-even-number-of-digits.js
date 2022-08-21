/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    a =0

    for(i=0; i<nums.length; i++)
    {
        
         if((nums[i].toString().length)%2 == 0)
        {
            a++
          
        }
    }

    return a
};


  nums = [12,345,2,6,7896]


  findNumbers(nums)