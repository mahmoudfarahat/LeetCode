/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
 p =0
 for (let i = 0; i < words.length; i++) {
 newWord = chars.split("")
  o =words[i].length
  for (let j = 0; j < words[i].length; j++) {
 
   if(newWord.includes(words[i][j]))
   {
      --o
     newWord.splice(newWord.indexOf(words[i][j]),1,0)
    
   }
    
   
  if(o == 0)
  {
   p = p +words[i].length
  }
   
  }
 }
  
 return p
 
};