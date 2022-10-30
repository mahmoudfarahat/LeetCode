/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
 o = 0
p =0
   for (let i = 0; i < words.length; i++) {
  o =   0
 for (let j = 0; j < words[i].length; j++) {
  if(allowed.includes(words[i][j]))
     {
       ++o
     }
 }
  if (o==words[i].length)
  {
   ++p
  }
    
 }
 return p
};
