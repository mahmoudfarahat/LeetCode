/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
newArr = []
  
for (let i = 0; i <= arr.length; i++) {
 if(i % 2 !== 0)
 {
  newArr.push(i)
 }
}
 
 sumArr =[]
 for (let p = 0; p < newArr.length; p++) {
  sum = 0
  maxSum =0
 for (let i = 0; i < newArr[p]; i++) {
  sum += arr[i]
 }
  
  sumArr.push(sum)
  maxSum = sum
for (let i = newArr[p]; i < arr.length; i++) {
 maxSum = maxSum - arr[i-newArr[p]]+ arr[i]
  sumArr.push(maxSum)
 
}
  
 }

 return sumArr.reduce((a,b) => {
  return a+b
 } )}