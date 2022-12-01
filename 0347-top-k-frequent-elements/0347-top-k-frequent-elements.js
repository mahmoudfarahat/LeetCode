/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
obj ={}
 for (let i = 0; i < nums.length; i++) {
  if(obj[nums[i]])
  {
   obj[nums[i]]++
  }else{
   obj[nums[i]] = 1
  }
 }

 
let sortable = [];
for (var element in obj) {
    sortable.push([element, obj[element]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
 
 arr =[]
 for (let i = 0; i <k; i++) {
   
  for (let j = 0; j < sortable[i].length; j++) {
   
   if(j == 0)
   {
    arr.push(+sortable[i][j])
   }
   
  }
 }
   return arr
};