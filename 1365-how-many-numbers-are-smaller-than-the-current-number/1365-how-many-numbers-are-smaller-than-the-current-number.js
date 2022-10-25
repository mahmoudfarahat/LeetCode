/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    output = []
for (let i = 0; i < nums.length ; i++) {
    
    newArr = nums.filter(a => a < nums[i]).length
     output.push(newArr)

   
}
     return output
};
