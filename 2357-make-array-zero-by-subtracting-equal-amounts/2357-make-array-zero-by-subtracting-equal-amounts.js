/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
     i =0
     if  (nums.reduce((a, b) => a + b, 0) ==0)
   {
    return 0  
   }
   while (nums.length > 0) {
      
       minValue = Math.min.apply(null, nums.filter(Boolean));
   
      nums = nums.map(a => {
     if( a > 0){
          return a-minValue
     }else{
        return a
     }}).filter(a => a != 0)
 ++i
       
   }
      
 
return i

 
};
