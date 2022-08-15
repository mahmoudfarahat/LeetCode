/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    if (nums.length > 1 && Math.min(...nums) == 0 ){
        const n = Math.max(...nums)
        nums.sort((a, b) => a - b);
        
        array = []
           
        for ( i = 0 ; i < nums.length ; i++)
        {
            
        
            if ((nums[i] +1) != nums[i+1]  )
            {
                array.push(nums[i]+1)
                  
            } 
        }
    
        return Math.min(...array);
        
    }else if( Math.min(...nums) == 1 ) {
        return  0;
    }else{
        return  Math.min(...nums)+1;
    }

     



    
    };
    
    
    nums = [3,0,1, 4 ]
    missingNumber(nums)