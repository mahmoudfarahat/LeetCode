/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  arr = []
 j = 0
 for (let i = 0; i < s.length; i++) {
  if(s[i] == s[i+1])
  {
   j++
  }else{
   if(j){
     arr.push([s[i-1],j+1])
   }
   j = 0
   
  }
 }
if (arr.length == 0) {
    return 1
}
 return Math.max(...arr.map(a => a[1]))
};