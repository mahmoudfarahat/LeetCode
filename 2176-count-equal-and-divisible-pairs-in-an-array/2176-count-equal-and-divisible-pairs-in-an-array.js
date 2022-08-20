/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    a = 0
    num2 = nums.slice()

    for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                let mul = i * j
                if (mul % k === 0) {
                     a++
                }

            }
        }

 

    }

    return a


};
nums = [5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3]
k = 7

countPairs(nums,k)