/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
      arr= []
    sentences.forEach(element => {
        arr.push(element.split(" ").length)
     });
return Math.max(...arr) 
};