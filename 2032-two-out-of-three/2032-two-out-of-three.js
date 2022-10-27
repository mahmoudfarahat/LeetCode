/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {


 arr1 = []
arr = [...new Set([...nums1,...nums2,...nums3])]

    for (let i = 0; i <arr.length ; i++) {
        if ((nums1.includes(arr[i]) && nums2.includes(arr[i])) || (nums1.includes(arr[i]) && nums3.includes(arr[i]))
           || (nums2.includes(arr[i]) && nums3.includes(arr[i]))
           )
        {
             arr1.push(arr[i])
        }
    }

    return arr1
};
