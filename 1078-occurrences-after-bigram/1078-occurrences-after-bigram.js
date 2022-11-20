/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
 text = text.split(' ');
 arr =[]
    for (let i = 0; i < text.length; i++) {
   
 if(text[i] == first && text[i+1] == second)
 {
     if(text[i+2])
         {
             arr.push(text[i+2])
         }
  
 }
    }
 return arr
};