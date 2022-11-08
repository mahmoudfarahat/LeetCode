/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
obj = {}
 for (let i = 0; i < s.length; i++) {
  if(obj[s[i]])
  {
   obj[s[i]]++
  }else{
   obj[s[i]] = 1
  }
 }

  return [...new Set(Object.values(obj))].length == 1

};