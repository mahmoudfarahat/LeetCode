/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
p = 0
    for (let i = 0; i < words.length ; i++) {
     p = 0
     for (let j = 0; j < words[i].length; j++) {
      // console.log(words[i][j] , words[i][words[i].length-1-j] )
        if(words[i][j] === words[i][words[i].length-1-j] )
        {
         ++p
         if ( p == words[i].length)
         {
                return words[i]

         }
        }
     }
    }
    return ""
};
