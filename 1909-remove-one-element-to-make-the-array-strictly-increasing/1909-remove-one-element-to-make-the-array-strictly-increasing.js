/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
l = 0
    
    for (let i = 0; i < nums.length-1 ; i++) {

        if (nums[i+1]-nums[i] <= 0  )
        {
           if(nums[i] >= nums[i+2]   ){
 
       
           nums.splice(i,1)
               ++l
          
        } else  {
    
      
            
             nums.splice(i+1,1)
         
         ++l
           
          
        }
        }
         
       
         
        
    }
 
 // console.log(l)
         if (l > 1)
             {
               
                 return false
              
             }
 
 for (let i = 0; i < nums.length-1 ; i++) {

        if (nums[i+1]-nums[i] <= 0)
        {
    
         
         // console.log(nums[i+1])
          return false
        } 
        
    }

    

    return true
};

 
 