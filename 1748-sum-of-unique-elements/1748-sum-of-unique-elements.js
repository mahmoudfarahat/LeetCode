/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

 obj = {}
sum = 0
 for (let i = 0; i < nums.length; i++) {
  if(obj[nums[i]])
  {
   obj[nums[i]]++
  }else{
    obj[nums[i]] =1
  }
 }
for (let name in obj) {
 if(obj[name] == 1)
 {
  sum += +name
 }
}
 return sum
};

