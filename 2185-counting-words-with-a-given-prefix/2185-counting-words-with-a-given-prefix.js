 /**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    a = 0


  for (i =0 ; i<words.length ; i++)
  {
 if (words[i].substring(0,pref.length) === pref)
 {
  a++
 } 
  }

  return a
};


 