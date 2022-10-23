/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  
 arr = nums.sort((a,b) => a-b).reverse()
  const set = new Set(arr);
  const array = [...set];
   
   if(array[2] || array[2] == 0){
    return array[2]
  }else{
  return Math.max(...array)
  }
};



