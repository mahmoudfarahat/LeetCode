/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

firstPart = word.substring(0,word.indexOf(ch)+1).split("").reverse().join("")
     
secondPart = word.substring(word.indexOf(ch)+1)
 
    return  firstPart + secondPart
    
};