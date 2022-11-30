/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
arr =[]
  for (let i = 1; i < nums.length+1; i++) {
if(!(nums.includes(i)))
{
 arr.push(i)
}
  }

 return arr
};
