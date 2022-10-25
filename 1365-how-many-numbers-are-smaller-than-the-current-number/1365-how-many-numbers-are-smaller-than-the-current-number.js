/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    output = []
for (let i = 0; i < nums.length ; i++) {
    
    newArr = nums.filter(a => a < nums[i])
     output.push(newArr.length)

   
}
     return output
};
