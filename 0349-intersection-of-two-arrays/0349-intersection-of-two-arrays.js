/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    obj = {}
 obj1 = {}
 arr = []
 for (let i = 0; i < nums1.length; i++) {
  if(obj[nums1[i]]++){
   obj[nums1[i]]++
  }else{
   obj[nums1[i]]=1
  }
 }

 for (let i = 0; i < nums2.length; i++) {
  if(obj1[nums2[i]]++){
   obj1[nums2[i]]++
  }else{
   obj1[nums2[i]]=1
  }
 }

 for (let element in obj) {
  if ( element in obj1 ){
  arr.push(+element)
  }
 }
 
return arr


 
};
