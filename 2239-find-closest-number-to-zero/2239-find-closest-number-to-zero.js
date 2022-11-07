/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
arr = []

 numNew =  nums.map(a => {
  if( a < 0)
  {
     return  -a
 }else{
  return a 
 }

 })
  if(nums.includes(Math.min(...numNew)))
  {
   return Math.min(...numNew)
  }else{
   return -Math.min(...numNew)
  }
  
};
 