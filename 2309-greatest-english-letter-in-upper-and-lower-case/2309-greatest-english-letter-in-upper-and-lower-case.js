/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    alpabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
               "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 s =s.split("")
 
 arr = []
 for (let i = 0; i < s.length; i++) 
 {
  for (let j = 0; j < s.length; j++) {
    if (s[i] !== s[j])
    {
     if(s[i] === s[j].toLowerCase() ||  s[i] === s[j].toUpperCase() )
     {
      arr.push(s[i].toUpperCase())
     }
    }
  }
 }
 return arr.length > 0 ?    [...new Set(arr.sort())][[...new Set(arr)].length-1] : ''
  
};
