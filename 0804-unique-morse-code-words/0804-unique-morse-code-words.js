/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    marks = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

 alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 p = 0
arr =[ ]

 for (let i = 0; i < words.length; i++) {
  p = 0
  newFormat =''
  for (let j = 0; j < words[i].length; j++) {
newFormat += marks[alphabet.indexOf(words[i][j])]
 
++p
   if(p ==  words[i].length && !(arr.includes(newFormat))){
    arr.push(newFormat)
   }
  }
 }
return arr.length
};
