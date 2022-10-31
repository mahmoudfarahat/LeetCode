/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
 arr = []
    for (let i = 0; i < words.length; i++) {
      
      for (let j = 0; j < words.length; j++) {
       if(words[i] != words[j])
       {
        if (words[i].includes(words[j]))
        {
         arr.push(words[j])
        }
       }
      }
    }
 return [...new Set(arr)]
};