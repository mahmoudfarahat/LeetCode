/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {    


    ans = []

    k = 0
    for (i = 0; i < nums.length; i++) {
       
        if (i == 0) {

            ans[i] = nums[0]

        } else if (i % 2 == 0) {
            
            ans[i] = nums[i / 2];

        } else if (Math.abs(i % 2) == 1) {
            
            ans[i] = nums[n + k ]
            k++
            
        }
         

    }
    console.log(ans)



return ans

};


nums = [1,2,3,4,4,3,2,1], n = 4

shuffle(nums, n)