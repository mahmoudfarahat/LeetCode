/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
 arr =[]
  for (let i = 0; i < nums.length ; i++) {
    
for (let index = 0; index < nums[2*i]; index++) {
 
   arr.push(nums[2*i+1])
}
  
  }  

 return arr
};
