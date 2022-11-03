/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {

 
 newWord =  word.replace(/[a-z]/gi," ").trim()
 
 while (newWord.includes("  ")) {
  
  newWord =  newWord.replaceAll("  "," ")
  
 }
    
    if(newWord == '')
        {return 0}

newWord =  newWord.split(" ")
 
 for (let i = 0; i < newWord.length; i++) {
  
 newWord[i] = newWord[i].replace(/^0+/g,"")
 
}

 return [...new Set (newWord)].length
};
