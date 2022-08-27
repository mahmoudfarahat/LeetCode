/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
 var countPrefixes = function(words, s) {
  a = 0
for ( i = 0 ; i< words.length; i++)
{
 
if (words[i] ==s.substring(0,words[i].length))
{
   a++
}


}
 return a 
};
 