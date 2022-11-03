/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
s = s.split(" ")
 arr =[]
for (let i = 0; i < s.length; i++) {
 newIndex = s[i].replace(/[a-z]/gi,'')
   
  arr[newIndex-1] = s[i]
  
}
    return arr.map(a => a.replace(/[0-9]/g,'')).join(" ")

};
