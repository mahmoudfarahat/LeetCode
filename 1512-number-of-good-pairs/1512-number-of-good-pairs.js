/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {

 let output = 0
 nums2 =  nums.slice();


    for(i=0 ; i < nums.length; i++)
    {
       
        for(j = i+1 ; j < (nums.length); j++)
        {
            
            if (nums[i] == nums[j] )
            {
              
                 output++ 
            }
        }
        nums2.shift()
       
    }
  
return output
};


nums = [1,1,1,1]


numIdenticalPairs(nums)