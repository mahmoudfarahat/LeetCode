/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

arr1 =[]
newArray = strs.slice();
 
 for (let i = 0; i < strs.length; i++) {
strs[i] = strs[i].split("").sort().join("")
 }
 
obj ={}
 for (let i = 0; i < strs.length; i++) {

  if( obj[strs[i]])
  {
   obj[strs[i]]++
  }else{
   obj[strs[i]] = 1
  }
 }
 
arr =[]
for (let element in obj) {
 arr2 = []
 for (let i = 0; i < obj[element]; i++) {
  ele = newArray.find(a => a.split("").sort().join("") === element)
 
   arr2.push(ele)
  newArray.splice(newArray.indexOf(ele),1)
  
 }
 arr.push(arr2)
}

 
 
 return arr
};
